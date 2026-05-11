import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import * as Icons from "lucide-react";
import { Sparkles, Target, Rocket, Coins, Quote, FileText, Download, ExternalLink } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  useVisionSection,
  useVisionDistribution,
  useEcosystemItems,
  useSiteSettings,
} from "@/hooks/useDbData";
import visionBg from "@/assets/vision-bg.jpg";

// Resolve a lucide icon name dynamically with safe fallback
function Icon({ name, size = 20, className }: { name?: string | null; size?: number; className?: string }) {
  const Cmp = (name && (Icons as any)[name]) || Icons.Star;
  return <Cmp size={size} className={className} />;
}

export default function OurVision() {
  const { locale } = useLanguage();
  const { data: sectionMap } = useVisionSection();
  const { data: distribution } = useVisionDistribution();
  const { data: ecosystem } = useEcosystemItems();
  const { data: settings } = useSiteSettings();
  const [pdfOpen, setPdfOpen] = useState(false);

  const t = (k: string, fallback = "") => sectionMap?.[k] || fallback;
  const PDF_URL = settings?.["vision_pdf_url"] || "/Hmoob_Project.pdf";

  const reviewLabel = t("reviewLabel", locale === "th" ? "รีวิวเอกสาร" : locale === "hmn" ? "Saib Daim Ntawv" : "Review Document");
  const downloadLabel = t("downloadLabel", "Download PDF");
  const openInNewTab = t("openInNewTab", locale === "th" ? "เปิดในแท็บใหม่" : locale === "hmn" ? "Qhib Tab Tshiab" : "Open in new tab");
  const docTitle = t("docTitle", "Hmoob Project Document");

  const distData = (distribution || []).map((d: any) => ({
    key: d.key,
    label: d.label,
    value: Number(d.percent) || 0,
    color: d.color,
    icon_name: d.icon_name,
  }));

  return (
    <section id="history" className="py-16 sm:py-28 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary/[0.05] blur-[140px] pointer-events-none" />

      <div className="container max-w-6xl relative">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-[0.2em] uppercase mb-4">
            <span className="w-8 h-px bg-primary/50" />
            {t("label")}
            <span className="w-8 h-px bg-primary/50" />
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold mt-2 mb-5 leading-tight">
            {t("title1")} <span className="text-gradient-gold">{t("title2")}</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setPdfOpen(true)}
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <FileText size={18} className="transition-transform group-hover:scale-110" />
              {reviewLabel}
            </button>
            <a
              href={PDF_URL}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-border bg-surface/60 text-foreground hover:border-primary/40 hover:bg-surface transition-all duration-300"
            >
              <Download size={18} />
              {downloadLabel}
            </a>
          </div>
        </div>

        <Dialog open={pdfOpen} onOpenChange={setPdfOpen}>
          <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 gap-0 bg-surface border-border overflow-hidden flex flex-col">
            <div className="flex items-center justify-between gap-3 px-5 py-3 border-b border-border bg-background/50 shrink-0">
              <DialogTitle className="flex items-center gap-2 font-display text-base">
                <FileText size={18} className="text-primary" />
                <span className="text-gradient-gold">{docTitle}</span>
              </DialogTitle>
              <div className="flex items-center gap-2">
                <a href={PDF_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-border bg-surface/80 text-foreground hover:border-primary/40 transition-colors">
                  <ExternalLink size={14} />
                  {openInNewTab}
                </a>
                <a href={PDF_URL} download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-border bg-surface/80 text-foreground hover:border-primary/40 transition-colors">
                  <Download size={14} />
                  {downloadLabel}
                </a>
              </div>
            </div>
            <object data={`${PDF_URL}#view=FitH&toolbar=1`} type="application/pdf" className="flex-1 w-full bg-background">
              <iframe
                src={`https://docs.google.com/viewer?url=${encodeURIComponent((typeof window !== "undefined" ? window.location.origin : "") + PDF_URL)}&embedded=true`}
                title={docTitle}
                className="flex-1 w-full bg-background border-0"
              />
            </object>
          </DialogContent>
        </Dialog>

        {/* Intro hero card */}
        <div className="relative rounded-3xl overflow-hidden mb-14 sm:mb-20 border border-border bg-surface/40 backdrop-blur-sm">
          <img src={visionBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/85" />
          <div className="relative p-8 sm:p-14 grid md:grid-cols-[auto_1fr] gap-8 items-start">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
              <Sparkles className="text-primary" size={32} />
            </div>
            <div>
              <div className="text-primary font-mono text-xs tracking-widest uppercase mb-3">
                {t("introLabel")}
              </div>
              <p className="font-display text-xl sm:text-2xl md:text-3xl leading-[1.5] text-foreground/90">
                {t("intro")}
              </p>
            </div>
          </div>
        </div>

        {/* Vision / Mission / Goal cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-16 sm:mb-24">
          {[
            { Ico: Sparkles, label: t("visionLabel"), body: t("vision"), accent: "primary" },
            { Ico: Target, label: t("missionLabel"), body: t("mission"), accent: "secondary" },
            { Ico: Rocket, label: t("goalLabel"), body: t("goal"), accent: "primary" },
          ].map((c, i) => (
            <div key={i} className="group relative rounded-2xl p-7 bg-surface/60 border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={48} className="text-primary" />
              </div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                c.accent === "primary"
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "bg-secondary/10 text-secondary border border-secondary/20"
              }`}>
                <c.Ico size={22} />
              </div>
              <h3 className="font-display font-bold text-lg mb-3 text-gradient-gold">{c.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        {/* Ecosystem Grid */}
        <div className="mb-16 sm:mb-24">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-[0.2em] uppercase mb-3">
              <span className="w-6 h-px bg-primary/50" />
              {t("ecosystemLabel")}
              <span className="w-6 h-px bg-primary/50" />
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-bold mb-3">
              {t("ecosystemTitle")}
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
              {t("ecosystemSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(ecosystem || []).map((item: any, i: number) => {
              const isPrimary = i % 2 === 0;
              return (
                <div key={item.id} className="group relative rounded-2xl p-5 bg-surface/50 border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/[0.05] group-hover:bg-primary/[0.12] transition-colors" />
                  <div className={`relative w-11 h-11 rounded-xl flex items-center justify-center mb-3 border ${
                    isPrimary
                      ? "bg-primary/10 border-primary/25 text-primary"
                      : "bg-secondary/10 border-secondary/25 text-secondary"
                  }`}>
                    <Icon name={item.icon_name} size={20} />
                  </div>
                  <div className="relative font-display font-bold text-sm mb-1.5">{item.name}</div>
                  <div className="relative text-muted-foreground text-xs leading-relaxed">{item.description}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* HMOOB COIN Spotlight */}
        <div className="relative rounded-3xl overflow-hidden mb-16 sm:mb-20 border border-primary/20 bg-gradient-to-br from-primary/[0.08] via-surface/80 to-secondary/[0.05]">
          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-secondary/10 blur-3xl" />
          <div className="relative p-8 sm:p-12 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-mono text-[10px] tracking-widest uppercase mb-4">
                <Coins size={12} /> {t("coinSpotlight")}
              </div>
              <h3 className="font-display text-3xl sm:text-5xl font-bold mb-4 leading-tight">
                <span className="text-gradient-gold">{t("coinTagline")}</span>
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">{t("coinDesc")}</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: t("supplyLabel"), value: t("supplyValue", "999,999,999"), sub: t("supplySub", "HMOOB") },
                { label: t("chainLabel"), value: t("chainValue", "DannyChain L2"), sub: "" },
                { label: t("yearLabel"), value: t("yearValue", "2026"), sub: "" },
              ].map((s, i) => (
                <div key={i} className="rounded-2xl p-4 sm:p-5 bg-background/60 border border-border text-center">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                    {s.label}
                  </div>
                  <div className="font-display font-bold text-base sm:text-lg text-gradient-gold leading-tight break-words">
                    {s.value}
                  </div>
                  {s.sub && (
                    <div className="text-[10px] font-mono text-muted-foreground mt-1">{s.sub}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Token Distribution */}
        <div>
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-[0.2em] uppercase mb-3">
              <span className="w-6 h-px bg-primary/50" />
              {t("distLabel")}
              <span className="w-6 h-px bg-primary/50" />
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-bold mb-3">{t("distTitle")}</h3>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
              {t("distSubtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center rounded-3xl border border-border bg-surface/40 p-6 sm:p-10">
            {/* Pie Chart */}
            <div className="relative h-[320px] sm:h-[380px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={distData}
                    dataKey="value"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={130}
                    paddingAngle={2}
                    stroke="hsl(var(--background))"
                    strokeWidth={3}
                  >
                    {distData.map((d) => (
                      <Cell key={d.key} fill={d.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    cursor={{ fill: "transparent" }}
                    contentStyle={{
                      background: "hsl(220 25% 8% / 0.95)",
                      border: "1px solid hsl(var(--primary) / 0.4)",
                      borderRadius: "12px",
                      fontSize: "13px",
                      color: "#ffffff",
                      boxShadow: "0 10px 30px -10px hsl(var(--primary) / 0.4)",
                    }}
                    itemStyle={{ color: "#ffffff", fontWeight: 600 }}
                    labelStyle={{ color: "#ffffff" }}
                    formatter={(value: number, _n, item: any) => [
                      `${value}%`,
                      item.payload.label,
                    ]}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  {t("supplyLabel")}
                </div>
                <div className="font-display font-bold text-lg sm:text-xl text-gradient-gold mt-1">
                  100%
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-3">
              {distData.map(({ key, label, value, color, icon_name }) => (
                <div key={key} className="group flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-background/40 border border-border hover:border-primary/30 transition-all">
                  <div
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 border"
                    style={{ background: `${color}1A`, borderColor: `${color}40`, color }}
                  >
                    <Icon name={icon_name} size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-display font-bold text-sm sm:text-base truncate">{label}</div>
                    <div className="mt-1.5 h-1.5 rounded-full bg-muted/40 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ width: `${Math.min(100, value * 2)}%`, background: color }}
                      />
                    </div>
                  </div>
                  <div className="font-display font-bold text-lg sm:text-xl shrink-0 tabular-nums" style={{ color }}>
                    {value}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
