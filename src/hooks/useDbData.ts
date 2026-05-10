import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";

export function useVisionMilestones() {
  const { locale } = useLanguage();
  return useQuery({
    queryKey: ["vision_milestones", locale],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("vision_milestones")
        .select("*")
        .eq("locale", locale)
        .eq("is_active", true)
        .order("sort_order");
      if (error) throw error;
      return data;
    },
  });
}

export function useCompatibleWallets() {
  return useQuery({
    queryKey: ["compatible_wallets"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("compatible_wallets")
        .select("*")
        .eq("is_active", true)
        .order("sort_order");
      if (error) throw error;
      return data;
    },
  });
}

export function useSiteLinks(category: string) {
  return useQuery({
    queryKey: ["site_links", category],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("site_links")
        .select("*")
        .eq("category", category)
        .eq("is_active", true)
        .order("sort_order");
      if (error) throw error;
      return data;
    },
  });
}

export function useSiteSettings() {
  return useQuery({
    queryKey: ["site_settings_global"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("site_settings")
        .select("key, value");
      if (error) throw error;
      const map: Record<string, string> = {};
      data?.forEach((row) => {
        // Safety: always extract plain string value
        const v = row.value;
        map[row.key] = (typeof v === "object" && v !== null && "value" in (v as any))
          ? (v as any).value
          : String(v ?? "");
      });
      return map;
    },
  });
}

export function useHistoryTimeline() {
  const { locale } = useLanguage();
  return useQuery({
    queryKey: ["history_timeline", locale],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("history_timeline")
        .select("*")
        .eq("locale", locale)
        .eq("is_active", true)
        .order("sort_order");
      if (error) throw error;
      return data;
    },
  });
}

export function useTokenPlatforms() {
  const { locale } = useLanguage();
  return useQuery({
    queryKey: ["token_platforms", locale],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("token_platforms")
        .select("*")
        .eq("locale", locale)
        .eq("is_active", true)
        .order("sort_order");
      if (error) throw error;
      return data;
    },
  });
}

export function useVisionSection() {
  const { locale } = useLanguage();
  return useQuery({
    queryKey: ["vision_section", locale],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("vision_section")
        .select("key, value")
        .eq("locale", locale)
        .eq("is_active", true);
      if (error) throw error;
      const map: Record<string, string> = {};
      (data || []).forEach((r: any) => { map[r.key] = r.value ?? ""; });
      return map;
    },
  });
}

export function useVisionDistribution() {
  const { locale } = useLanguage();
  return useQuery({
    queryKey: ["vision_distribution", locale],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("vision_distribution")
        .select("*")
        .eq("locale", locale)
        .eq("is_active", true)
        .order("sort_order");
      if (error) throw error;
      return data || [];
    },
  });
}

export function useEcosystemItems() {
  const { locale } = useLanguage();
  return useQuery({
    queryKey: ["ecosystem_items", locale],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("ecosystem_items")
        .select("*")
        .eq("locale", locale)
        .eq("is_active", true)
        .order("sort_order");
      if (error) throw error;
      return data || [];
    },
  });
}
