-- Update hmoob.io descriptions
UPDATE public.token_platforms SET description = 'Cloud mining platform — boost hash rate, earn daily HMOOB rewards, swap tokens in-app, complete missions, and invite friends via referral program' WHERE name = 'hmoob.io' AND locale = 'en';
UPDATE public.token_platforms SET description = 'Cloud mining platform — nce hash rate, khwv HMOOB rewards txhua hnub, swap tokens hauv app, ua missions, thiab caw phooj ywg los ntawm referral program' WHERE name = 'hmoob.io' AND locale = 'hmn';
UPDATE public.token_platforms SET description = 'แพลตฟอร์มขุดบนคลาวด์ — เพิ่มอัตราแฮช รับรางวัล HMOOB ทุกวัน สลับเหรียญในแอป ทำภารกิจ และเชิญเพื่อนผ่านโปรแกรมแนะนำ' WHERE name = 'hmoob.io' AND locale = 'th';

-- Update DanDEX descriptions (fix name casing too)
UPDATE public.token_platforms SET name = 'DanDEX', description = 'DEX aggregator on Danny Chain — trade any tokens at the best rates, professional charting tools with technical indicators, real-time market data, and secure wallet management' WHERE name = 'DanDEX' AND locale = 'en';
UPDATE public.token_platforms SET name = 'DanDEX', description = 'DEX aggregator ntawm Danny Chain — trade txhua tokens nrog tus nqi zoo tshaj, charting tools nrog technical indicators, real-time market data, thiab kev tswj wallet ruaj ntseg' WHERE name = 'DanDEX' AND locale = 'hmn';
UPDATE public.token_platforms SET name = 'DanDEX', description = 'DEX aggregator บน Danny Chain — เทรดทุกเหรียญในราคาที่ดีที่สุด เครื่องมือวิเคราะห์กราฟพร้อม technical indicators ข้อมูลตลาดเรียลไทม์ และการจัดการกระเป๋าเงินที่ปลอดภัย' WHERE name = 'DanDEX' AND locale = 'th';

-- Also try DanDex.io name
UPDATE public.token_platforms SET name = 'DanDEX', description = 'DEX aggregator on Danny Chain — trade any tokens at the best rates, professional charting tools with technical indicators, real-time market data, and secure wallet management' WHERE name = 'DanDex.io' AND locale = 'en';
UPDATE public.token_platforms SET name = 'DanDEX', description = 'DEX aggregator ntawm Danny Chain — trade txhua tokens nrog tus nqi zoo tshaj, charting tools nrog technical indicators, real-time market data, thiab kev tswj wallet ruaj ntseg' WHERE name = 'DanDex.io' AND locale = 'hmn';
UPDATE public.token_platforms SET name = 'DanDEX', description = 'DEX aggregator บน Danny Chain — เทรดทุกเหรียญในราคาที่ดีที่สุด เครื่องมือวิเคราะห์กราฟพร้อม technical indicators ข้อมูลตลาดเรียลไทม์ และการจัดการกระเป๋าเงินที่ปลอดภัย' WHERE name = 'DanDex.io' AND locale = 'th';

-- Update DanScan descriptions
UPDATE public.token_platforms SET description = 'Danny Mainnet Explorer — track transactions, blocks, validators, wallet balances, DAN price, gas fees (6.9 Gwei), and real-time network statistics with 665K+ blocks and 105K+ addresses' WHERE name = 'DanScan.io' AND locale = 'en';
UPDATE public.token_platforms SET description = 'Danny Mainnet Explorer — nrhiav transactions, blocks, validators, wallet balances, DAN nqi, gas fees (6.9 Gwei), thiab network statistics hauv real-time nrog 665K+ blocks thiab 105K+ addresses' WHERE name = 'DanScan.io' AND locale = 'hmn';
UPDATE public.token_platforms SET description = 'Danny Mainnet Explorer — ติดตามธุรกรรม บล็อก ผู้ตรวจสอบ ยอดเงินในกระเป๋า ราคา DAN ค่าแก๊ส (6.9 Gwei) และสถิติเครือข่ายเรียลไทม์ที่มี 665K+ blocks และ 105K+ addresses' WHERE name = 'DanScan.io' AND locale = 'th';