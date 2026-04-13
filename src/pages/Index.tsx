import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WelcomeDialog from "@/components/WelcomeDialog";
import TrustBanner from "@/components/TrustBanner";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import AppPreview from "@/components/AppPreview";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import SecuritySection from "@/components/SecuritySection";
import BoostPlans from "@/components/BoostPlans";
import Ecosystem from "@/components/Ecosystem";
import Vision from "@/components/Vision";
import VideoSection from "@/components/VideoSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import ScrollToTop from "@/components/ScrollToTop";
import { useScrollFade } from "@/hooks/useScrollFade";

export default function Index() {
  useScrollFade();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBanner />
      <StatsBar />
      <div className="section-fade"><About /></div>
      <div className="section-divider" />
      <div className="section-fade"><AppPreview /></div>
      <div className="section-divider" />
      <div className="section-fade"><HowItWorks /></div>
      <div className="section-fade"><Features /></div>
      <div className="section-divider" />
      <div className="section-fade"><SecuritySection /></div>
      <div className="section-fade"><BoostPlans /></div>
      <div className="section-divider" />
      <div className="section-fade"><Ecosystem /></div>
      <div className="section-fade"><Vision /></div>
      <div className="section-fade"><VideoSection /></div>
      <div className="section-fade"><Testimonials /></div>
      <div className="section-fade"><FAQ /></div>
      <div className="section-fade"><CTASection /></div>
      <Footer />
      <FloatingContact />
      <ScrollToTop />
      <WelcomeDialog />
    </div>
  );
}
