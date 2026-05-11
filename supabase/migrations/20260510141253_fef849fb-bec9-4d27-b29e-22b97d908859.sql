
-- 1) vision_section: text content per locale + key
CREATE TABLE public.vision_section (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  locale text NOT NULL DEFAULT 'en',
  key text NOT NULL,
  value text NOT NULL DEFAULT '',
  sort_order integer NOT NULL DEFAULT 0,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (locale, key)
);

ALTER TABLE public.vision_section ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access" ON public.vision_section FOR SELECT USING (true);
CREATE POLICY "Admins can insert" ON public.vision_section FOR INSERT TO authenticated WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update" ON public.vision_section FOR UPDATE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can delete" ON public.vision_section FOR DELETE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER trg_vision_section_updated BEFORE UPDATE ON public.vision_section FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 2) vision_distribution: token allocation segments per locale
CREATE TABLE public.vision_distribution (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  locale text NOT NULL DEFAULT 'en',
  key text NOT NULL,
  label text NOT NULL,
  percent numeric NOT NULL DEFAULT 0,
  color text NOT NULL DEFAULT '#D4A843',
  icon_name text NOT NULL DEFAULT 'Coins',
  sort_order integer NOT NULL DEFAULT 0,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.vision_distribution ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access" ON public.vision_distribution FOR SELECT USING (true);
CREATE POLICY "Admins can insert" ON public.vision_distribution FOR INSERT TO authenticated WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update" ON public.vision_distribution FOR UPDATE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can delete" ON public.vision_distribution FOR DELETE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER trg_vision_distribution_updated BEFORE UPDATE ON public.vision_distribution FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 3) Site setting for PDF URL
INSERT INTO public.site_settings (key, value, description)
VALUES ('vision_pdf_url', '/Hmoob_Project.pdf', 'URL of the Hmoob Project document (PDF) shown in the Vision section')
ON CONFLICT DO NOTHING;

-- 4) Seed vision_section for EN / HMN / TH
INSERT INTO public.vision_section (locale, key, value, sort_order) VALUES
-- EN
('en','label','Project Vision',1),
('en','title1','The Hmoob',2),
('en','title2','Project',3),
('en','subtitle','A community-driven crypto ecosystem built for the Hmong people and every entrepreneur worldwide.',4),
('en','reviewLabel','Review Document',5),
('en','downloadLabel','Download PDF',6),
('en','openInNewTab','Open in new tab',7),
('en','docTitle','Hmoob Project Document',8),
('en','introLabel','What is Hmoob Project?',9),
('en','intro','Hmoob Project is a collaborative business hub built around the world of digital currencies (cryptocurrencies). It unites the Hmong community and global participants under one online economy.',10),
('en','visionLabel','Our Vision',11),
('en','vision','To create an online crypto economy that empowers the Hmong people across the world — and any community that loves digital business — to grow together, learn together, and prosper together.',12),
('en','missionLabel','Our Mission',13),
('en','mission','To build a sustainable, long-lasting online ecosystem powered by collective participation — one that lifts every member toward a brighter future.',14),
('en','goalLabel','Our Goal',15),
('en','goal','To open digital business opportunities so the Hmong people and the world can join hands, escape poverty, find joy, and grow as wise, prosperous citizens of the modern world.',16),
('en','ecosystemLabel','Building Step by Step',17),
('en','ecosystemTitle','The Hmoob Project Ecosystem',18),
('en','ecosystemSubtitle','Each platform is being crafted, one piece at a time, to power a full Hmong-driven crypto economy.',19),
('en','coinSpotlight','HMOOB COIN',20),
('en','coinTagline','The Heart of the Ecosystem',21),
('en','coinDesc','HMOOB COIN is the Hmong community''s own crypto token, minted on DannyChain Layer 2 in 2026. It powers every product inside Hmoob Project.',22),
('en','supplyLabel','Total Supply',23),
('en','supplyValue','999,999,999',24),
('en','supplySub','HMOOB',25),
('en','chainLabel','Built On',26),
('en','chainValue','DannyChain L2',27),
('en','yearLabel','Launched',28),
('en','yearValue','2026',29),
('en','distLabel','Token Allocation',30),
('en','distTitle','How HMOOB COIN is Distributed',31),
('en','distSubtitle','A transparent allocation designed to grow the ecosystem, support builders, and uplift those in need.',32),
-- HMN
('hmn','label','Lub Zeem Muag',1),
('hmn','title1','Hmoob',2),
('hmn','title2','Project',3),
('hmn','subtitle','Lub chaw koom kev lag luam huab cua tsim los rau haiv hmoob thiab tsoom tib neeg thoob qab ntuj.',4),
('hmn','reviewLabel','Saib Daim Ntawv',5),
('hmn','downloadLabel','Download PDF',6),
('hmn','openInNewTab','Qhib Tab Tshiab',7),
('hmn','docTitle','Hmoob Project — Daim Ntawv',8),
('hmn','introLabel','Hmoob Project yog dab tsi?',9),
('hmn','intro','Hmoob Project yog ib lub chaw koom kev lag luam ntau yam sab seem nyiaj huab cua (crypto currencies) — ib lub khw lag luam huab cua sib koom rau haiv hmoob thiab tib neeg ntiaj teb.',10),
('hmn','visionLabel','Lub Zeem Muag',11),
('hmn','vision','Yog tsim kev lag luam rau peb haiv hmoob nyob thoob lub qab ntuj thiab lwm haiv neeg cov uas nyiam kev lag luam sab huab cua (online), kom muaj kev vam meej thiab kev txawj ntse ib qib zuj zus.',12),
('hmn','missionLabel','Phiaj Xwm',13),
('hmn','mission','Yuav ua mus kom ntev li ntev tau rau lub neej tom ntej los ntawm kev koom tes txhua leej txhua tus.',14),
('hmn','goalLabel','Lub Hom Phiaj',15),
('hmn','goal','Tsim kev lag luam sab huab cua kom peb hmoob thiab tib neeg ntiaj teb tau los koom ua tsev neeg, daws txoj kev txom nyem, muaj kev lom zem, muaj yeej, thiab muaj kev txawj ntse caum cuag lub ntiaj teb.',16),
('hmn','ecosystemLabel','Kev Tsim Kho Ib Kauj Ruam Zuj Zus',17),
('hmn','ecosystemTitle','Hmoob Project Cov Cuab Yeej',18),
('hmn','ecosystemSubtitle','Txhua lub khiab khw raug tsim ib qib zuj zus los ua kom haiv hmoob muaj kev vam meej sab huab cua.',19),
('hmn','coinSpotlight','HMOOB COIN',20),
('hmn','coinTagline','Lub Plawv Ntawm Hmoob Project',21),
('hmn','coinDesc','HMOOB COIN yog hmoob lub npib puav pheej huab cua tsim los ntawm DannyChain Layer 2 xyoo 2026, siv rau txhua yam khiab khw hauv Hmoob Project.',22),
('hmn','supplyLabel','Tag Nrho',23),
('hmn','supplyValue','999,999,999',24),
('hmn','supplySub','HMOOB',25),
('hmn','chainLabel','Tsim Saum',26),
('hmn','chainValue','DannyChain L2',27),
('hmn','yearLabel','Pib Xyoo',28),
('hmn','yearValue','2026',29),
('hmn','distLabel','Kev Faib Npib',30),
('hmn','distTitle','HMOOB COIN Faib Li Cas',31),
('hmn','distSubtitle','Faib pom tseeb los txhawb kev tsim kho, pab cov tsim, thiab pab tsoom tib neeg ntsib kev txom nyem.',32),
-- TH
('th','label','วิสัยทัศน์',1),
('th','title1','โครงการ',2),
('th','title2','Hmoob',3),
('th','subtitle','ระบบเศรษฐกิจคริปโตที่ขับเคลื่อนโดยชุมชน สร้างขึ้นเพื่อชาวม้งและผู้ประกอบการทั่วโลก',4),
('th','reviewLabel','รีวิวเอกสาร',5),
('th','downloadLabel','ดาวน์โหลด PDF',6),
('th','openInNewTab','เปิดในแท็บใหม่',7),
('th','docTitle','เอกสาร Hmoob Project',8),
('th','introLabel','Hmoob Project คืออะไร?',9),
('th','intro','Hmoob Project คือศูนย์รวมธุรกิจสกุลเงินดิจิทัล (คริปโต) ที่รวมชาวม้งและผู้คนทั่วโลกไว้ภายใต้เศรษฐกิจออนไลน์เดียวกัน',10),
('th','visionLabel','วิสัยทัศน์',11),
('th','vision','สร้างเศรษฐกิจคริปโตออนไลน์ที่ส่งเสริมชาวม้งทั่วโลกและทุกชุมชนที่รักธุรกิจดิจิทัล ให้เติบโต เรียนรู้ และรุ่งเรืองไปด้วยกัน',12),
('th','missionLabel','พันธกิจ',13),
('th','mission','สร้างระบบนิเวศออนไลน์ที่ยั่งยืนระยะยาว ขับเคลื่อนด้วยการมีส่วนร่วมของทุกคน เพื่อยกระดับชีวิตของสมาชิกทุกคนสู่อนาคตที่สดใส',14),
('th','goalLabel','เป้าหมาย',15),
('th','goal','เปิดโอกาสธุรกิจดิจิทัลให้ชาวม้งและคนทั่วโลกได้จับมือกัน ก้าวพ้นความยากจน มีความสุข และเติบโตอย่างชาญฉลาดในโลกยุคใหม่',16),
('th','ecosystemLabel','สร้างทีละขั้นตอน',17),
('th','ecosystemTitle','ระบบนิเวศของ Hmoob Project',18),
('th','ecosystemSubtitle','แต่ละแพลตฟอร์มถูกสร้างขึ้นทีละชิ้น เพื่อขับเคลื่อนเศรษฐกิจคริปโตของชาวม้งอย่างเต็มรูปแบบ',19),
('th','coinSpotlight','HMOOB COIN',20),
('th','coinTagline','หัวใจของระบบนิเวศ',21),
('th','coinDesc','HMOOB COIN คือโทเคนคริปโตของชุมชนชาวม้ง สร้างบน DannyChain Layer 2 ในปี 2026 และขับเคลื่อนทุกผลิตภัณฑ์ใน Hmoob Project',22),
('th','supplyLabel','ปริมาณทั้งหมด',23),
('th','supplyValue','999,999,999',24),
('th','supplySub','HMOOB',25),
('th','chainLabel','สร้างบน',26),
('th','chainValue','DannyChain L2',27),
('th','yearLabel','เปิดตัว',28),
('th','yearValue','2026',29),
('th','distLabel','การจัดสรรโทเคน',30),
('th','distTitle','HMOOB COIN ถูกจัดสรรอย่างไร',31),
('th','distSubtitle','การจัดสรรที่โปร่งใส ออกแบบเพื่อขยายระบบนิเวศ สนับสนุนผู้สร้าง และช่วยเหลือผู้ที่ต้องการ',32);

-- 5) Seed vision_distribution for EN / HMN / TH
INSERT INTO public.vision_distribution (locale, key, label, percent, color, icon_name, sort_order) VALUES
('en','free','Free Community Airdrop',5,'#60A5FA','Gift',1),
('en','business','Business & Ecosystem Use',40,'#D4A843','Briefcase',2),
('en','team','Team & Builders',10,'#A78BFA','Users',3),
('en','burn','Burn (Removed Forever)',25,'#F87171','Flame',4),
('en','aid','Aid for People in Need',10,'#34D399','HeartHandshake',5),
('en','growth','Growth & Development',10,'#FBBF24','TrendingUp',6),

('hmn','free','Faib Pub Dawb',5,'#60A5FA','Gift',1),
('hmn','business','Kev Lag Luam',40,'#D4A843','Briefcase',2),
('hmn','team','Cov Tuav & Tsim Kho',10,'#A78BFA','Users',3),
('hmn','burn','Hlawv Pov Tseg',25,'#F87171','Flame',4),
('hmn','aid','Pab Tib Neeg Txom Nyem',10,'#34D399','HeartHandshake',5),
('hmn','growth','Peev Tsim Kho',10,'#FBBF24','TrendingUp',6),

('th','free','แจกฟรีให้ชุมชน',5,'#60A5FA','Gift',1),
('th','business','ใช้ในธุรกิจและระบบนิเวศ',40,'#D4A843','Briefcase',2),
('th','team','ทีมและผู้สร้าง',10,'#A78BFA','Users',3),
('th','burn','เผาทิ้ง (ลดออกถาวร)',25,'#F87171','Flame',4),
('th','aid','ช่วยเหลือผู้ยากไร้',10,'#34D399','HeartHandshake',5),
('th','growth','เงินทุนพัฒนา',10,'#FBBF24','TrendingUp',6);

-- 6) Seed ecosystem_items (8 cards) for EN / HMN / TH (only insert if table is empty)
INSERT INTO public.ecosystem_items (locale, name, description, icon_name, url, sort_order, is_active)
SELECT * FROM (VALUES
  ('en','HMOOB COIN','The native crypto token of the Hmong community.','Coins','',1,true),
  ('en','HMOOB Mining','Mine HMOOB COIN right from your phone — no hardware needed.','Pickaxe','',2,true),
  ('en','Dandex.io','A digital asset exchange to swap and trade crypto.','ArrowLeftRight','',3,true),
  ('en','Dan Marketplace','An online marketplace for buying and selling goods.','ShoppingBag','',4,true),
  ('en','Dan Real Estate','A platform to trade property and inherited assets.','Home','',5,true),
  ('en','AI HMOOB','AI tools powered by HMOOB COIN to advance the Hmong people.','Bot','',6,true),
  ('en','HMOOB Games','Fun, rewarding games that bring the community together.','Gamepad2','',7,true),
  ('en','Crypto Lending','Borrow and lend digital currency to grow real-world ventures.','HandCoins','',8,true),

  ('hmn','HMOOB COIN','Hmoob lub npib puav pheej huab cua.','Coins','',1,true),
  ('hmn','HMOOB Mining','Khawb HMOOB COIN hauv xov tooj — tsis tas siv twj.','Pickaxe','',2,true),
  ('hmn','Dandex.io','Khw pauv nyiaj huab cua.','ArrowLeftRight','',3,true),
  ('hmn','Dan Marketplace','Khw yuav muag khoom saum huab cua.','ShoppingBag','',4,true),
  ('hmn','Dan Real Estate','Khw yuav muag qub txheej qub teg.','Home','',5,true),
  ('hmn','AI HMOOB','AI siv HMOOB COIN rau haiv hmoob vam meej.','Bot','',6,true),
  ('hmn','HMOOB Games','Cov games lom zem rau tsoom tib neeg.','Gamepad2','',7,true),
  ('hmn','Khw Qiv Txais','Qiv txais npib huab cua los koom kev lag luam.','HandCoins','',8,true),

  ('th','HMOOB COIN','โทเคนคริปโตของชุมชนชาวม้ง','Coins','',1,true),
  ('th','HMOOB Mining','ขุด HMOOB COIN ผ่านมือถือ ไม่ต้องใช้ฮาร์ดแวร์','Pickaxe','',2,true),
  ('th','Dandex.io','ตลาดแลกเปลี่ยนสินทรัพย์ดิจิทัล','ArrowLeftRight','',3,true),
  ('th','Dan Marketplace','ตลาดซื้อขายสินค้าออนไลน์','ShoppingBag','',4,true),
  ('th','Dan Real Estate','แพลตฟอร์มซื้อขายอสังหาริมทรัพย์','Home','',5,true),
  ('th','AI HMOOB','เครื่องมือ AI ที่ขับเคลื่อนด้วย HMOOB COIN','Bot','',6,true),
  ('th','HMOOB Games','เกมสนุกที่นำรางวัลและรอยยิ้มมาให้ชุมชน','Gamepad2','',7,true),
  ('th','ตลาดสินเชื่อคริปโต','กู้และให้ยืมคริปโตเพื่อขยายธุรกิจในชีวิตจริง','HandCoins','',8,true)
) AS v(locale,name,description,icon_name,url,sort_order,is_active)
WHERE NOT EXISTS (SELECT 1 FROM public.ecosystem_items LIMIT 1);
