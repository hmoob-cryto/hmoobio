-- Create videos table for the "Watch" section
CREATE TABLE public.videos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  video_url TEXT NOT NULL,
  thumbnail_url TEXT,
  locale TEXT NOT NULL DEFAULT 'en',
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.videos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access" ON public.videos FOR SELECT USING (true);
CREATE POLICY "Admins can insert" ON public.videos FOR INSERT TO authenticated WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update" ON public.videos FOR UPDATE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can delete" ON public.videos FOR DELETE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER update_videos_updated_at
BEFORE UPDATE ON public.videos
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Storage policies for video uploads to existing 'media' bucket
CREATE POLICY "Public can view videos in media bucket"
ON storage.objects FOR SELECT
USING (bucket_id = 'media');

CREATE POLICY "Admins can upload videos to media bucket"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'media' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update videos in media bucket"
ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'media' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete videos in media bucket"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'media' AND has_role(auth.uid(), 'admin'::app_role));

-- Seed with current default video
INSERT INTO public.videos (title, description, video_url, locale, sort_order) VALUES
('Welcome to Hmoob Bitcoin', 'Introduction to our ecosystem', '/src/assets/ecosystem-promo.mp4', 'en', 1),
('Welcome to Hmoob Bitcoin', 'ການແນະນຳລະບົບນິເວດຂອງພວກເຮົາ', '/src/assets/ecosystem-promo.mp4', 'hmn', 1),
('ยินดีต้อนรับสู่ Hmoob Bitcoin', 'แนะนำระบบนิเวศของเรา', '/src/assets/ecosystem-promo.mp4', 'th', 1);