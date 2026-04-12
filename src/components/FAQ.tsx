import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What is Hmoob.io?", a: "Hmoob.io is a cloud-based cryptocurrency mining platform that allows anyone to mine digital assets without needing to own or manage physical mining hardware." },
  { q: "Do I need technical skills to start?", a: "Not at all! Our platform is designed for complete beginners. Simply sign up, connect a wallet, choose a plan, and start earning." },
  { q: "Which cryptocurrencies can I mine?", a: "We support 35+ coins across major blockchains including Bitcoin, Ethereum, Solana, BNB Chain, and many more." },
  { q: "How do I receive my rewards?", a: "Rewards are sent directly to your connected Web3 wallet. We recommend Bitget Wallet for the best experience." },
  { q: "Is Hmoob.io safe and secure?", a: "Yes. We use bank-grade encryption, multi-factor authentication, and conduct regular third-party security audits to protect our users." },
];

export default function FAQ() {
  return (
    <section id="faq" className="section-fade py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsla(172,55%,39%,0.03)_0%,_transparent_50%)]" />
      <div className="container max-w-3xl relative">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4 mx-auto">
            <span className="w-8 h-px bg-primary/50" />
            FAQ
            <span className="w-8 h-px bg-primary/50" />
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-2xl px-7 bg-surface hover:border-primary/15 transition-colors duration-300 data-[state=open]:border-primary/20"
            >
              <AccordionTrigger className="text-left font-display text-base font-semibold hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-[1.8] pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
