import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What is HMOOB Mining?", a: "HMOOB Mining is a cloud-based mining platform built on the DannyChain Layer 2 blockchain. You mine HMOOB tokens by connecting your wallet and purchasing boost plans — no physical hardware needed." },
  { q: "How do I start mining?", a: "Simply visit hmoob.io, connect your Web3 wallet, and purchase a Boost plan. Your mining starts immediately and runs automatically for 365 days." },
  { q: "What are Boost plans?", a: "Boost plans let you increase your mining hash rate (GH/s). There are 6 tiers from 10 to 1,000 HMOOB, each offering 365% ROI over 365 days. Boosts stack, so you can purchase multiple." },
  { q: "How does the referral program work?", a: "Invite friends using your referral link and earn 20% bonus plus additional GH/s hash rate boosts. The more friends who join and boost, the more you earn." },
  { q: "What is DannyChain?", a: "DannyChain is a decentralized Layer 2 blockchain that is EVM-compatible, offering low fees, high speed, and Ethereum-level security. HMOOB Mining and the DANNY Exchange are built on DannyChain." },
  { q: "How do I withdraw or swap my HMOOB tokens?", a: "Go to the Wallet section to withdraw HMOOB to your Web3 wallet, or use the integrated Swap feature to exchange HMOOB for other tokens on the DANNY Exchange." },
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
