import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/loan-products", label: "Loan Products" },
    { path: "/requirements", label: "Requirements" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur-md" style={{ backgroundColor: "rgba(11, 42, 37, 0.92)" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover-elevate rounded-md px-2 py-1" data-testid="link-home">
            <img src="/logo.svg" alt="Pioneer Cooperative Logo" className="h-10 w-10" />
            <span className="text-lg font-bold tracking-tight text-foreground">PIONEER COOPERATIVE</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={location === link.path ? "bg-primary/20 text-primary-foreground" : ""}
                  data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link href="/apply">
              <Button size="sm" className="ml-2" data-testid="button-apply-cta">
                Apply Online
              </Button>
            </Link>
          </nav>

          <button
            className="lg:hidden p-2 hover-elevate rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-border/40 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${location === link.path ? "bg-primary/20 text-primary-foreground" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link href="/apply">
              <Button className="w-full" onClick={() => setMobileMenuOpen(false)} data-testid="button-mobile-apply">
                Apply Online
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
