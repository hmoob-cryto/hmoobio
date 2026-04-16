
-- History timeline table
CREATE TABLE public.history_timeline (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon_name TEXT NOT NULL DEFAULT 'Star',
  status TEXT NOT NULL DEFAULT 'upcoming',
  locale TEXT NOT NULL DEFAULT 'en',
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.history_timeline ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access" ON public.history_timeline FOR SELECT USING (true);
CREATE POLICY "Admins can insert" ON public.history_timeline FOR INSERT TO authenticated WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update" ON public.history_timeline FOR UPDATE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can delete" ON public.history_timeline FOR DELETE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER update_history_timeline_updated_at BEFORE UPDATE ON public.history_timeline FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Token platforms table
CREATE TABLE public.token_platforms (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  url TEXT NOT NULL,
  icon_name TEXT NOT NULL DEFAULT 'Globe',
  platform_type TEXT NOT NULL DEFAULT 'Web',
  gradient TEXT NOT NULL DEFAULT 'from-primary/20 to-amber-500/10',
  locale TEXT NOT NULL DEFAULT 'en',
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.token_platforms ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access" ON public.token_platforms FOR SELECT USING (true);
CREATE POLICY "Admins can insert" ON public.token_platforms FOR INSERT TO authenticated WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update" ON public.token_platforms FOR UPDATE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can delete" ON public.token_platforms FOR DELETE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER update_token_platforms_updated_at BEFORE UPDATE ON public.token_platforms FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
