import { useScrollFade } from "@/hooks/useScrollFade";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import AppPreview from "@/components/AppPreview";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import BoostPlans from "@/components/BoostPlans";
import Ecosystem from "@/components/Ecosystem";
import Vision from "@/components/Vision";
import VideoSection from "@/components/VideoSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Index() {
  useScrollFade();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <AppPreview />
      <HowItWorks />
      <Features />
      <BoostPlans />
      <Ecosystem />
      <Vision />
      <VideoSection />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
      <FloatingContact />
    </div>
  );
}
