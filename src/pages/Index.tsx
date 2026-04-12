import { useScrollFade } from "@/hooks/useScrollFade";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Ecosystem from "@/components/Ecosystem";
import Vision from "@/components/Vision";
import VideoSection from "@/components/VideoSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Index() {
  useScrollFade();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <HowItWorks />
      <Features />
      <Ecosystem />
      <Vision />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
}
