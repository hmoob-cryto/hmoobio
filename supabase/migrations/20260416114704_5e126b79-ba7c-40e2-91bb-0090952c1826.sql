INSERT INTO public.site_settings (key, value, description) VALUES
('welcome_title_th', 'ยินดีต้อนรับสู่โปรเจกต์ Hmong', 'Welcome dialog title in Thai'),
('welcome_desc_th', 'ขุดเหรียญ HMOOB ซื้อขายบน DanDEX สำรวจบน DanScan — ทั้งหมดบนระบบนิเวศ DannyChain', 'Welcome dialog description in Thai'),
('welcome_cta_th', 'เริ่มต้นใช้งาน', 'Welcome dialog CTA in Thai'),
('welcome_stat1_label_th', 'นักขุด', 'Welcome stat 1 label TH')
ON CONFLICT DO NOTHING;