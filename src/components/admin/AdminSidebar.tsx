import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarFooter, useSidebar,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard, Mountain, Wallet, Link2, Settings, Zap, Gift,
  Globe, HelpCircle, Footprints, Shield, Star, BarChart3, MessageSquare,
  BadgeCheck, Handshake, LogOut, KeyRound, History, Coins, Video,
} from "lucide-react";

const menuGroups = [
  {
    label: "Overview",
    items: [
      { title: "Dashboard", path: "/admin", icon: LayoutDashboard },
    ],
  },
  {
    label: "Content",
    items: [
      
      { title: "Site Settings", path: "/admin/site-settings", icon: Settings },
      { title: "Site Links", path: "/admin/site-links", icon: Link2 },
    ],
  },
  {
    label: "Sections",
    items: [
      { title: "Boost Plans", path: "/admin/boost-plans", icon: Zap },
      { title: "Boost Benefits", path: "/admin/boost-benefits", icon: Gift },
      { title: "Features", path: "/admin/features", icon: Star },
      { title: "How It Works", path: "/admin/how-it-works", icon: Footprints },
      { title: "Security", path: "/admin/security-features", icon: Shield },
      { title: "FAQs", path: "/admin/faqs", icon: HelpCircle },
      { title: "Stats", path: "/admin/stats", icon: BarChart3 },
      { title: "Testimonials", path: "/admin/testimonials", icon: MessageSquare },
      { title: "Videos", path: "/admin/videos", icon: Video },
    ],
  },
  {
    label: "History & Vision",
    items: [
      { title: "History Timeline", path: "/admin/history-timeline", icon: History },
      { title: "Vision Milestones", path: "/admin/vision", icon: Mountain },
    ],
  },
  {
    label: "Ecosystem & Tokens",
    items: [
      { title: "Token Platforms", path: "/admin/token-platforms", icon: Coins },
      { title: "Wallets", path: "/admin/wallets", icon: Wallet },
      { title: "Ecosystem Items", path: "/admin/ecosystem", icon: Globe },
    ],
  },
  {
    label: "Trust & Branding",
    items: [
      { title: "Trust Indicators", path: "/admin/trust-indicators", icon: BadgeCheck },
      { title: "Trust Partners", path: "/admin/trust-partners", icon: Handshake },
    ],
  },
];

export function AdminSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Sidebar collapsible="icon" className="border-r-0 !bg-slate-800">
      <SidebarContent className="pt-4 !bg-slate-800">
        {/* Logo */}
        <div className={`px-4 mb-4 flex items-center gap-2 ${collapsed ? "justify-center" : ""}`}>
          <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center shrink-0">
            <Shield size={16} className="text-white" />
          </div>
          {!collapsed && (
            <div>
              <div className="font-display font-bold text-sm text-white">Hmoob Admin</div>
              <div className="text-[10px] text-slate-400">Content Manager</div>
            </div>
          )}
        </div>

        {menuGroups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel className="text-[10px] uppercase tracking-widest text-slate-500">
              {!collapsed && group.label}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton
                      onClick={() => navigate(item.path)}
                      isActive={isActive(item.path)}
                      tooltip={collapsed ? item.title : undefined}
                      className={`transition-all ${isActive(item.path) ? "!bg-amber-500/20 !text-amber-400 font-medium" : "!text-slate-300 hover:!text-white hover:!bg-slate-700"}`}
                    >
                      <item.icon size={16} />
                      {!collapsed && <span className="text-sm">{item.title}</span>}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t border-slate-700 p-2 !bg-slate-800">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => navigate("/admin/change-password")} tooltip={collapsed ? "Change Password" : undefined} className={`transition-all ${isActive("/admin/change-password") ? "!bg-amber-500/20 !text-amber-400 font-medium" : "!text-slate-300 hover:!text-white hover:!bg-slate-700"}`}>
              <KeyRound size={16} />
              {!collapsed && <span className="text-sm">Change Password</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => navigate("/")} className="!text-slate-300 hover:!text-white hover:!bg-slate-700">
              <Globe size={16} />
              {!collapsed && <span className="text-sm">View Site</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={signOut} className="!text-red-400 hover:!text-red-300 hover:!bg-red-500/10">
              <LogOut size={16} />
              {!collapsed && <span className="text-sm">Sign Out</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}