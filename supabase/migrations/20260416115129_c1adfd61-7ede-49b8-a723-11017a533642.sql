
-- FAQs (Thai)
INSERT INTO public.faqs (question, answer, locale, sort_order, is_active) VALUES
('HMOOB Mining คืออะไร?', 'HMOOB Mining เป็นแพลตฟอร์มขุดคริปโตบนคลาวด์ที่สร้างบน DannyChain Layer 2 blockchain คุณสามารถขุดเหรียญ HMOOB โดยเชื่อมต่อผ่าน Bitget Wallet และซื้อแผน Boost — ไม่ต้องใช้ฮาร์ดแวร์ใดๆ', 'th', 1, true),
('ต้องใช้กระเป๋าเงินอะไร?', 'คุณต้องใช้แอป Bitget Wallet (มีบน Google Play) เป็นกระเป๋า Web3 ที่เชื่อถือได้มีผู้ใช้กว่า 80 ล้านคน มีเบราว์เซอร์ DApp ในตัวเพื่อเข้าถึง hmoob.io อย่างปลอดภัย', 'th', 2, true),
('เริ่มขุดอย่างไร?', 'ดาวน์โหลดแอป Bitget Wallet สร้างหรือนำเข้ากระเป๋าเงิน จากนั้นเปิด hmoob.io ในเบราว์เซอร์ DApp ของกระเป๋า เชื่อมต่อกระเป๋าและซื้อแผน Boost — เริ่มขุดได้ทันที', 'th', 3, true),
('แผน Boost คืออะไร?', 'แผน Boost ช่วยเพิ่มอัตราแฮชในการขุด (GH/s) มี 6 ระดับตั้งแต่ 10 ถึง 1,000 HMOOB แต่ละระดับให้ผลตอบแทน 365% ROI ใน 365 วัน Boost สะสมได้ คุณสามารถซื้อหลายแผนพร้อมกัน', 'th', 4, true),
('โปรแกรมแนะนำเพื่อนทำงานอย่างไร?', 'เชิญเพื่อนผ่านลิงก์แนะนำของคุณและรับโบนัส 20% พร้อมเพิ่มอัตราแฮช GH/s ยิ่งเพื่อนเข้าร่วมและ Boost มากเท่าไหร่ คุณก็ยิ่งได้รับมากขึ้น', 'th', 5, true),
('DannyChain คืออะไร?', 'DannyChain เป็น Layer 2 blockchain แบบกระจายศูนย์ที่รองรับ EVM มีค่าธรรมเนียมต่ำ ความเร็วสูง และความปลอดภัยระดับ Ethereum HMOOB Mining และ DANNY Exchange สร้างบน DannyChain', 'th', 6, true),
('ถอนหรือแลกเปลี่ยนเหรียญ HMOOB ได้อย่างไร?', 'ไปที่ส่วนกระเป๋าเงินเพื่อถอน HMOOB ไปยัง Bitget Wallet หรือใช้ฟีเจอร์ Swap ในตัวเพื่อแลกเปลี่ยน HMOOB เป็นเหรียญอื่นบน DANNY Exchange', 'th', 7, true);

-- Site Features (Thai)
INSERT INTO public.site_features (title, description, icon_name, locale, sort_order, is_active) VALUES
('เพิ่มพลังขุดด้วย Boost', 'เลือกจาก 6 ระดับ Boost (10–1,000 HMOOB) เพื่อเพิ่มอัตราแฮช GH/s และรับผลตอบแทน 365% ROI ใน 365 วัน', 'Zap', 'th', 1, true),
('เชื่อมต่อ Bitget Wallet', 'เชื่อมต่อผ่านแอป Bitget Wallet — กระเป๋า Web3 ที่เชื่อถือได้มีผู้ใช้กว่า 80 ล้านคน มีเบราว์เซอร์ DApp และความปลอดภัย self-custodial', 'Smartphone', 'th', 2, true),
('โปรแกรมแนะนำเพื่อน', 'เชิญเพื่อนและรับโบนัส 20% พร้อมเพิ่มอัตราแฮช GH/s ยิ่งเพื่อนเข้าร่วมมาก ยิ่งขุดเร็วขึ้น', 'Users', 'th', 3, true),
('ภารกิจรายวัน', 'ทำภารกิจและความท้าทายเพื่อรับรางวัล HMOOB เพิ่มเติม มีภารกิจใหม่ให้ทำเป็นประจำ', 'Target', 'th', 4, true),
('แลกเปลี่ยนเหรียญ', 'สลับเหรียญ HMOOB ได้อย่างราบรื่นผ่าน DANNY Exchange ที่รวมอยู่ในแพลตฟอร์ม — ขับเคลื่อนโดย DannyChain Layer 2', 'ArrowRightLeft', 'th', 5, true),
('ความปลอดภัย DannyChain', 'สร้างบน DannyChain — Layer 2 blockchain ที่รองรับ EVM มีความปลอดภัยระดับ Ethereum และค่าธรรมเนียมต่ำ', 'Shield', 'th', 6, true);

-- Boost Plans (Thai)
INSERT INTO public.boost_plans (name, hmoob_amount, usd_price, hash_rate, total_return, locale, sort_order, is_active, is_recommended) VALUES
('Starter', 10, '0.07', '0.12', '46.5', 'th', 1, true, false),
('Advanced', 50, '0.37', '0.58', '232.5', 'th', 2, true, true),
('Elite', 100, '0.75', '1.16', '465', 'th', 3, true, false),
('Elite Plus', 300, '2.24', '3.49', '1,395', 'th', 4, true, false),
('Elite Max', 500, '3.74', '5.81', '2,325', 'th', 5, true, false),
('Ultimate', 1000, '7.48', '11.63', '4,650', 'th', 6, true, false);

-- Boost Benefits (Thai)
INSERT INTO public.boost_benefits (text, locale, sort_order, is_active) VALUES
('ผลตอบแทน 365% ใน 365 วัน', 'th', 1, true),
('Boost สะสมได้ — ซื้อหลาย Boost พร้อมกัน', 'th', 2, true),
('อัตราแฮชสูงขึ้น = ขุด HMOOB ได้เร็วขึ้น', 'th', 3, true),
('ใช้งานได้ตลอด 365 วันเต็ม', 'th', 4, true);

-- How It Works Steps (Thai)
INSERT INTO public.how_it_works_steps (title, description, icon_name, locale, sort_order, is_active) VALUES
('ดาวน์โหลด Bitget Wallet', 'ดาวน์โหลดแอป Bitget Wallet จาก Google Play Store สร้างหรือนำเข้ากระเป๋า Web3 เพื่อเริ่มต้นอย่างปลอดภัย', 'Download', 'th', 1, true),
('เชื่อมต่อกับ hmoob.io', 'เปิด hmoob.io ในเบราว์เซอร์ DApp ของ Bitget Wallet เชื่อมต่อกระเป๋า — ยอดเงิน HMOOB และอัตราแฮชจะซิงค์แบบเรียลไทม์', 'Wallet', 'th', 2, true),
('เลือกแผน Boost', 'ซื้อแผน Boost (10–1,000 HMOOB) เพื่อเพิ่มอัตราแฮชในการขุดและเริ่มรับผลตอบแทน 365% ROI ใน 365 วัน', 'Zap', 'th', 3, true),
('ขุด รับ และแลกเปลี่ยน', 'การขุดทำงานอัตโนมัติ ดูยอด HMOOB เพิ่มขึ้นทุกวัน ทำภารกิจ เชิญเพื่อน และสลับเหรียญผ่าน DANNY Exchange', 'TrendingUp', 'th', 4, true);

-- Security Features (Thai)
INSERT INTO public.security_features (title, description, icon_name, locale, sort_order, is_active) VALUES
('ความปลอดภัย Self-Custodial', 'กุญแจส่วนตัวอยู่ใน Bitget Wallet ของคุณ — คุณเท่านั้นที่ควบคุมเงินทุน ไม่มีความเสี่ยงจากการรวมศูนย์', 'Lock', 'th', 1, true),
('การป้องกัน DannyChain Layer 2', 'สร้างบน DannyChain — Layer 2 blockchain ที่รองรับ EVM สืบทอดโมเดลความปลอดภัยที่ผ่านการทดสอบจาก Ethereum', 'Shield', 'th', 2, true),
('โปร่งใสและตรวจสอบได้', 'ธุรกรรมทั้งหมดตรวจสอบได้สาธารณะบน DanScan explorer ทุกการซื้อ Boost และการแจกรางวัลอยู่บน on-chain', 'Eye', 'th', 3, true),
('โครงสร้างแบบกระจายศูนย์', 'ไม่มีจุดล้มเหลวเดียว การขุดทำงานบน smart contracts แบบกระจายศูนย์ที่ทำงานอัตโนมัติ', 'Server', 'th', 4, true),
('การเชื่อมต่อกระเป๋าปลอดภัย', 'เชื่อมต่อผ่านเบราว์เซอร์ DApp ของ Bitget Wallet ด้วยโปรโตคอล Web3 มาตรฐานอุตสาหกรรม ไม่ต้องแชร์รหัสผ่าน', 'KeyRound', 'th', 5, true),
('Smart Contract ผ่านการตรวจสอบ', 'Smart contracts สำหรับการขุดและแจกรางวัลผ่านการตรวจสอบจากชุมชนและ deploy บน DannyChain blockchain', 'FileCheck', 'th', 6, true);

-- Ecosystem Items (Thai)
INSERT INTO public.ecosystem_items (name, description, url, icon_name, locale, sort_order, is_active) VALUES
('DannyChain', 'Layer 2 blockchain ที่รองรับ EVM มีความปลอดภัยระดับ Ethereum ค่าธรรมเนียมต่ำ และรองรับขนาดใหญ่', 'https://dannychain.com', 'Blocks', 'th', 1, true),
('DANNY Exchange', 'สลับเหรียญ HMOOB และเหรียญ DannyChain อื่นๆ ได้อย่างราบรื่นผ่าน DEX ที่รวมอยู่ในระบบ', 'https://hmoob.io/swap', 'ArrowRightLeft', 'th', 2, true),
('DanMarket', 'ตลาดแบบกระจายศูนย์สำหรับซื้อขายสินทรัพย์ดิจิทัลภายในระบบนิเวศ DannyChain', 'https://danmarket.io', 'ShoppingBag', 'th', 3, true),
('DanScan Explorer', 'ดูธุรกรรม บล็อก และ smart contracts ทั้งหมดบน DannyChain blockchain', 'https://danscan.io', 'Search', 'th', 4, true);

-- Vision Milestones (Thai)
INSERT INTO public.vision_milestones (title, description, icon_name, status, locale, sort_order, is_active) VALUES
('เปิดตัว DannyChain L2', 'เปิดตัว DannyChain Layer 2 blockchain ด้วยเวลาบล็อก 10 วินาทีและค่าแก๊สต่ำ', 'Rocket', 'done', 'th', 1, true),
('HMOOB Mining และ DanScan เปิดใช้งาน', 'เปิดตัวแพลตฟอร์มขุดบนคลาวด์และ blockchain explorer มีนักขุดกว่า 3,300 คน', 'Globe', 'done', 'th', 2, true),
('DanDEX และรองรับหลายกระเป๋า', 'เปิดตัวตลาดแลกเปลี่ยนแบบกระจายศูนย์และขยายการรองรับกระเป๋าเงินไปยัง Bitget, TokenPocket, SafePal', 'Users', 'current', 'th', 3, true),
('DanMarket และ NFT', 'กำลังสร้างตลาดแบบกระจายศูนย์สำหรับสินค้าดิจิทัลและการซื้อขาย NFT บน DannyChain', 'Gem', 'upcoming', 'th', 4, true),
('Cross-Chain Bridge และขยายสู่สากล', 'เปิดใช้การโอนเหรียญข้ามเชนและขยายสู่ตลาดโลกด้วยพันธมิตรเพิ่มเติม', 'Target', 'upcoming', 'th', 5, true);

-- Trust Indicators (Thai)
INSERT INTO public.trust_indicators (text, icon_name, locale, sort_order, is_active) VALUES
('Smart Contract ผ่านการตรวจสอบ', 'Shield', 'th', 1, true),
('กระเป๋า Self-Custodial', 'Lock', 'th', 2, true),
('รองรับ EVM', 'Globe', 'th', 3, true),
('ตรวจสอบโดยชุมชน', 'Verified', 'th', 4, true);

-- Trust Partners (Thai)
INSERT INTO public.trust_partners (name, description, url, locale, sort_order, is_active) VALUES
('Bitget Wallet', 'ผู้ใช้กว่า 80 ล้านคน', 'https://web3.bitget.com', 'th', 1, true),
('DannyChain', 'Layer 2 Blockchain', 'https://dannychain.com', 'th', 2, true),
('DANNY Exchange', 'DEX แบบกระจายศูนย์', 'https://hmoob.io/swap', 'th', 3, true),
('DanMarket', 'ตลาด Web3', 'https://danmarket.io', 'th', 4, true);

-- Site Stats (Thai)
INSERT INTO public.site_stats (value, label, suffix, detail, icon_name, locale, sort_order, is_active) VALUES
(3310, 'นักขุดที่ใช้งาน', '+', 'เพิ่มขึ้นทุกวัน', 'Users', 'th', 1, true),
(6, 'แผน Boost', ' ระดับ', '10–1,000 HMOOB', 'Zap', 'th', 2, true),
(365, 'ROI ต่อปี', '%', 'ตลอด 365 วัน', 'Coins', 'th', 3, true),
(80, 'ผู้ใช้กระเป๋า', 'M+', 'Bitget Wallet', 'Shield', 'th', 4, true);

-- Testimonials (Thai)
INSERT INTO public.testimonials (name, quote, role, initials, gradient, hash_rate, boost_tier, is_verified, locale, sort_order, is_active) VALUES
('Kia Vang', 'HMOOB Mining ทำให้คริปโตเข้าถึงได้สำหรับชุมชนของเรา ผมซื้อ Advanced Boost แล้วยอดเงินเพิ่มขึ้นทุกวัน โปรแกรมแนะนำเพื่อนอย่างเดียวก็ทำให้ผมได้ HMOOB เพิ่มอีก 120 เหรียญ', 'นักขุดที่ใช้งาน · เข้าร่วม ม.ค. 2025', 'KV', 'from-primary/20 to-primary/5', '150 GH/s', 'Advanced', true, 'th', 1, true),
('Mailee Xiong', 'ผมชอบที่แพลตฟอร์มนี้สร้างมาเพื่อชุมชนม้ง ระบบนิเวศ DannyChain รู้สึกเหมือนเป็นของเรา ผมแนะนำเพื่อนไปแล้ว 47 คน — แต่ละคนเพิ่มอัตราแฮชให้ด้วยโบนัสแนะนำ 20%', 'ผู้สร้างชุมชน · แนะนำ 47 คน', 'MX', 'from-secondary/20 to-secondary/5', '320 GH/s', 'Professional', true, 'th', 2, true),
('Tou Lee', 'ROI 365% ต่อปีน่าประทับใจมาก ผมตรวจสอบทุกธุรกรรมบน DanScan — โปร่งใสทั้งหมด การเชื่อมต่อ Bitget Wallet ราบรื่นและรู้สึกปลอดภัยเพราะกุญแจเป็นของผม', 'ผู้สนใจคริปโต · ตั้งแต่ Beta', 'TL', 'from-primary/20 to-secondary/5', '500 GH/s', 'Enterprise', true, 'th', 3, true);
