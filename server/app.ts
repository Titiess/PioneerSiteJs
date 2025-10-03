import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

export async function buildApp() {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use((req, res, next) => {
    const start = Date.now();
    const path = req.path;
    let captured: any;

    const orig = res.json.bind(res);
    // @ts-ignore
    res.json = (body: any, ...args: any[]) => { captured = body; return orig(body, ...args); };

    res.on("finish", () => {
      const ms = Date.now() - start;
      if (path.startsWith("/api")) {
        let line = `${req.method} ${path} ${res.statusCode} in ${ms}ms`;
        if (captured) line += ` :: ${JSON.stringify(captured)}`;
        if (line.length > 80) line = line.slice(0, 79) + "…";
        log(line);
      }
    });

    next();
  });

  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  return app;
}

// default export for Vercel serverless
const appPromise = buildApp();
export default async function handler(req: any, res: any) {
  const app = await appPromise;
  return (app as any)(req, res);
}
