
-- 1. Create video_translations table
CREATE TABLE public.video_translations (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  video_id uuid NOT NULL REFERENCES public.videos(id) ON DELETE CASCADE,
  locale text NOT NULL DEFAULT 'en',
  title text NOT NULL,
  description text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE(video_id, locale)
);

ALTER TABLE public.video_translations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access" ON public.video_translations FOR SELECT USING (true);
CREATE POLICY "Admins can insert" ON public.video_translations FOR INSERT TO authenticated WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update" ON public.video_translations FOR UPDATE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can delete" ON public.video_translations FOR DELETE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER update_video_translations_updated_at
  BEFORE UPDATE ON public.video_translations
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 2. Migrate existing data: copy current title/description per row into translations
INSERT INTO public.video_translations (video_id, locale, title, description)
SELECT id, COALESCE(locale, 'en'), title, description FROM public.videos
ON CONFLICT (video_id, locale) DO NOTHING;

-- 3. Drop locale from videos (one video = all locales now)
ALTER TABLE public.videos DROP COLUMN IF EXISTS locale;

-- title/description stay on videos as fallback (keep them, allow null for description already)
ALTER TABLE public.videos ALTER COLUMN title DROP NOT NULL;
