import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = ["About", "How It Works", "Features", "Ecosystem", "FAQ"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase().replace(/ /g, "-"))?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass border-b border-border" : ""}`}>
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-display text-xl font-bold text-foreground">
          <span className="text-gradient-gold">hmoob</span>.io
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l}
            </button>
          ))}
          <button onClick={() => scrollTo("cta")} className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:brightness-110 transition">
            Get Started
          </button>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden glass border-t border-border p-4 flex flex-col gap-3">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="text-sm text-muted-foreground hover:text-foreground text-left py-2">
              {l}
            </button>
          ))}
          <button onClick={() => scrollTo("cta")} className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold mt-2">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
