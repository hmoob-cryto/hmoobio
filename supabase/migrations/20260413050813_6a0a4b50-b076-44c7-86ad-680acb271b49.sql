
-- 1. translations table
CREATE TABLE public.translations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text NOT NULL,
  locale text NOT NULL DEFAULT 'en',
  value text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(key, locale)
);
ALTER TABLE public.translations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read access" ON public.translations FOR SELECT USING (true);
CREATE TRIGGER update_translations_updated_at BEFORE UPDATE ON public.translations FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 2. vision_milestones table
CREATE TABLE public.vision_milestones (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  icon_name text NOT NULL DEFAULT 'Star',
  title text NOT NULL,
  description text NOT NULL,
  status text NOT NULL DEFAULT 'upcoming',
  sort_order integer NOT NULL DEFAULT 0,
  locale text NOT NULL DEFAULT 'en',
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.vision_milestones ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read access" ON public.vision_milestones FOR SELECT USING (true);
CREATE TRIGGER update_vision_milestones_updated_at BEFORE UPDATE ON public.vision_milestones FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 3. compatible_wallets table
CREATE TABLE public.compatible_wallets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  rating text NOT NULL DEFAULT '0',
  downloads text NOT NULL DEFAULT '0',
  logo_url text NOT NULL,
  play_url text NOT NULL,
  is_recommended boolean NOT NULL DEFAULT false,
  sort_order integer NOT NULL DEFAULT 0,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.compatible_wallets ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read access" ON public.compatible_wallets FOR SELECT USING (true);
CREATE TRIGGER update_compatible_wallets_updated_at BEFORE UPDATE ON public.compatible_wallets FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 4. site_links table
CREATE TABLE public.site_links (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  url text NOT NULL,
  category text NOT NULL DEFAULT 'general',
  logo_url text,
  icon_name text,
  description text,
  sort_order integer NOT NULL DEFAULT 0,
  is_active boolean NOT NULL DEFAULT true,
  locale text NOT NULL DEFAULT 'en',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.site_links ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read access" ON public.site_links FOR SELECT USING (true);
CREATE TRIGGER update_site_links_updated_at BEFORE UPDATE ON public.site_links FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 5. site_settings table
CREATE TABLE public.site_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text NOT NULL UNIQUE,
  value text NOT NULL,
  description text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read access" ON public.site_settings FOR SELECT USING (true);
CREATE TRIGGER update_site_settings_updated_at BEFORE UPDATE ON public.site_settings FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
