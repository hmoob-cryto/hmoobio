INSERT INTO site_settings (key, value, description) VALUES
('site_name', 'hmoob', 'ชื่อเว็บไซต์ส่วนแรก (สีทอง)'),
('site_name_suffix', '.io', 'ชื่อเว็บไซต์ส่วนท้าย (สีเทา)'),
('logo_url', '', 'URL ของโลโก้เว็บไซต์ (เว้นว่างใช้โลโก้เริ่มต้น)')
ON CONFLICT (key) DO NOTHING;