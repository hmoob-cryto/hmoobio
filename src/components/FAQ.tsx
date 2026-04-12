import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const { locale, t } = useLanguage();
  const { data: faqs } = useQuery({
    queryKey: ["faqs", locale],
    queryFn: async () => {
      const { data, error } = await supabase.from("faqs").select("*").eq("is_active", true).eq("locale", locale).order("sort_order");
      if (error) throw error;
      return data;
    },
  });

  if (!faqs) return null;

  return (
    <section id="faq" className="section-fade py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsla(172,55%,39%,0.03)_0%,_transparent_50%)]" />
      <div className="container max-w-3xl relative">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4 mx-auto">
            <span className="w-8 h-px bg-primary/50" />{t("faq.label")}<span className="w-8 h-px bg-primary/50" />
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2">
            {t("faq.title1")} <span className="text-gradient-gold">{t("faq.title2")}</span>
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f) => (
            <AccordionItem key={f.id} value={f.id} className="border border-border rounded-2xl px-7 bg-surface hover:border-primary/15 transition-colors duration-300 data-[state=open]:border-primary/20">
              <AccordionTrigger className="text-left font-display text-base font-semibold hover:no-underline py-5">{f.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-[1.8] pb-6">{f.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
