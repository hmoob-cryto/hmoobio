import { Twitter, Github, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <span className="font-display text-xl font-bold">
              <span className="text-gradient-gold">hmoob</span>.io
            </span>
            <p className="text-muted-foreground text-sm mt-3">
              Crypto cloud mining for everyone. Empowering communities through blockchain technology.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">Platform</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="#about" className="block hover:text-foreground transition-colors">About</a>
              <a href="#features" className="block hover:text-foreground transition-colors">Features</a>
              <a href="#how-it-works" className="block hover:text-foreground transition-colors">How It Works</a>
              <a href="#faq" className="block hover:text-foreground transition-colors">FAQ</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">Resources</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="#" className="block hover:text-foreground transition-colors">Documentation</a>
              <a href="#" className="block hover:text-foreground transition-colors">Blog</a>
              <a href="#" className="block hover:text-foreground transition-colors">Support</a>
              <a href="#" className="block hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                <Github size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Hmoob.io. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
