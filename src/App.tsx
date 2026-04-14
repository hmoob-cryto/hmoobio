import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import AdminLogin from "./pages/AdminLogin.tsx";
import AdminLayout from "./components/admin/AdminLayout.tsx";
import AdminDashboard from "./pages/admin/AdminDashboard.tsx";

import AdminSiteSettings from "./pages/admin/AdminSiteSettings.tsx";
import AdminSiteLinks from "./pages/admin/AdminSiteLinks.tsx";
import AdminBoostPlans from "./pages/admin/AdminBoostPlans.tsx";
import AdminBoostBenefits from "./pages/admin/AdminBoostBenefits.tsx";
import AdminFeatures from "./pages/admin/AdminFeatures.tsx";
import AdminHowItWorks from "./pages/admin/AdminHowItWorks.tsx";
import AdminSecurityFeatures from "./pages/admin/AdminSecurityFeatures.tsx";
import AdminEcosystem from "./pages/admin/AdminEcosystem.tsx";
import AdminFaqs from "./pages/admin/AdminFaqs.tsx";
import AdminStats from "./pages/admin/AdminStats.tsx";
import AdminTestimonials from "./pages/admin/AdminTestimonials.tsx";
import AdminVision from "./pages/admin/AdminVision.tsx";
import AdminWallets from "./pages/admin/AdminWallets.tsx";
import AdminTrustIndicators from "./pages/admin/AdminTrustIndicators.tsx";
import AdminTrustPartners from "./pages/admin/AdminTrustPartners.tsx";
import AdminChangePassword from "./pages/admin/AdminChangePassword.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              
              <Route path="site-settings" element={<AdminSiteSettings />} />
              <Route path="site-links" element={<AdminSiteLinks />} />
              <Route path="boost-plans" element={<AdminBoostPlans />} />
              <Route path="boost-benefits" element={<AdminBoostBenefits />} />
              <Route path="features" element={<AdminFeatures />} />
              <Route path="how-it-works" element={<AdminHowItWorks />} />
              <Route path="security-features" element={<AdminSecurityFeatures />} />
              <Route path="ecosystem" element={<AdminEcosystem />} />
              <Route path="faqs" element={<AdminFaqs />} />
              <Route path="stats" element={<AdminStats />} />
              <Route path="testimonials" element={<AdminTestimonials />} />
              <Route path="vision" element={<AdminVision />} />
              <Route path="wallets" element={<AdminWallets />} />
              <Route path="trust-indicators" element={<AdminTrustIndicators />} />
              <Route path="trust-partners" element={<AdminTrustPartners />} />
              <Route path="change-password" element={<AdminChangePassword />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
