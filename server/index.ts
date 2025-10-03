import { buildApp } from "./app";
import { log } from "./vite";

(async () => {
  const app = await buildApp();

  const port = parseInt(process.env.PORT || "5000", 10);
  const host = process.env.HOST || "0.0.0.0";
  const useReusePort = process.platform !== "win32" && process.env.REUSE_PORT === "1";

  const server = (app as any).listen(
    { port, host, ...(useReusePort ? { reusePort: true } : {}) },
    () => log(`serving on port ${port}`)
  );

  // optional: expose if routes attach WS
  (app as any).httpServer = server;
})();
