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
    <section id="faq" className="section-fade py-24">
      <div className="container max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">FAQ</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 bg-surface">
              <AccordionTrigger className="text-left font-display text-base font-medium hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
