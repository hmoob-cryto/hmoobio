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
