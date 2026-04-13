import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarFooter, useSidebar,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard, Languages, Mountain, Wallet, Link2, Settings, Zap, Gift,
  Globe, HelpCircle, Footprints, Shield, Star, BarChart3, MessageSquare,
  BadgeCheck, Handshake, LogOut,
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
      { title: "Translations", path: "/admin/translations", icon: Languages },
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
      { title: "Ecosystem", path: "/admin/ecosystem", icon: Globe },
      { title: "FAQs", path: "/admin/faqs", icon: HelpCircle },
      { title: "Stats", path: "/admin/stats", icon: BarChart3 },
      { title: "Testimonials", path: "/admin/testimonials", icon: MessageSquare },
    ],
  },
  {
    label: "Other",
    items: [
      { title: "Vision Milestones", path: "/admin/vision", icon: Mountain },
      { title: "Wallets", path: "/admin/wallets", icon: Wallet },
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
    <Sidebar collapsible="icon" className="border-r border-border">
      <SidebarContent className="pt-4">
        {/* Logo */}
        <div className={`px-4 mb-4 flex items-center gap-2 ${collapsed ? "justify-center" : ""}`}>
          <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
            <Shield size={16} className="text-primary" />
          </div>
          {!collapsed && (
            <div>
              <div className="font-display font-bold text-sm">Hmoob Admin</div>
              <div className="text-[10px] text-muted-foreground">Content Manager</div>
            </div>
          )}
        </div>

        {menuGroups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel className="text-[10px] uppercase tracking-widest text-muted-foreground/60">
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
                      className={`transition-all ${isActive(item.path) ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted/30"}`}
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

      <SidebarFooter className="border-t border-border p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => navigate("/")} className="text-muted-foreground hover:text-foreground">
              <Globe size={16} />
              {!collapsed && <span className="text-sm">View Site</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={signOut} className="text-destructive hover:text-destructive hover:bg-destructive/10">
              <LogOut size={16} />
              {!collapsed && <span className="text-sm">Sign Out</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
