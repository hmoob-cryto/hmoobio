import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const links = [
  { label: "About", id: "about" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Features", id: "features" },
  { label: "Ecosystem", id: "ecosystem" },
  { label: "FAQ", id: "faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass border-b border-border shadow-lg shadow-background/50" : ""}`}>
      <div className="container flex items-center justify-between h-18 py-3">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative">
            <img src={logo} alt="Hmoob.io" className="w-11 h-11 rounded-full ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300" />
            <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="font-display text-lg font-bold text-foreground">
            <span className="text-gradient-gold">hmoob</span>
            <span className="text-muted-foreground">.io</span>
          </span>
        </a>
        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-sm text-muted-foreground hover:text-foreground px-4 py-2 rounded-lg hover:bg-muted/30 transition-all duration-200"
            >
              {l.label}
            </button>
          ))}
          <div className="w-px h-6 bg-border mx-3" />
          <button
            onClick={() => scrollTo("cta")}
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get Started
          </button>
        </div>
        <button className="lg:hidden text-foreground p-2 rounded-lg hover:bg-muted/30 transition-colors" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden glass border-t border-border px-4 pb-4 pt-2 flex flex-col gap-1 animate-fade-up-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-sm text-muted-foreground hover:text-foreground text-left py-3 px-3 rounded-lg hover:bg-muted/30 transition-colors"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("cta")}
            className="bg-primary text-primary-foreground px-5 py-3 rounded-lg text-sm font-semibold mt-2"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
