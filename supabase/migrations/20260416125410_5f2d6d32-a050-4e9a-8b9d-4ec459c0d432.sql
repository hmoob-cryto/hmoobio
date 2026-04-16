-- Fix Layer 2 → Layer 1 in token_platforms
UPDATE public.token_platforms
SET description = REPLACE(description, 'Layer 2', 'Layer 1')
WHERE description ILIKE '%layer 2%';

-- Fix Layer 2 → Layer 1 in history_timeline  
UPDATE public.history_timeline
SET description = REPLACE(description, 'Layer 2', 'Layer 1')
WHERE description ILIKE '%layer 2%';

UPDATE public.history_timeline
SET title = REPLACE(title, 'Layer 2', 'Layer 1')
WHERE title ILIKE '%layer 2%';

-- Also update DanDEX descriptions to mention liquidity + charts
UPDATE public.token_platforms
SET description = CASE
  WHEN locale = 'en' THEN 'Decentralized exchange on DannyChain — swap HMOOB and other tokens, provide liquidity, and view live price charts'
  WHEN locale = 'hmn' THEN 'Kev sib pauv crypto ntawm DannyChain — swap HMOOB thiab lwm cov tokens, muab liquidity, thiab saib cov charts nqi'
  WHEN locale = 'th' THEN 'ตลาดแลกเปลี่ยนแบบกระจายศูนย์บน DannyChain — สลับ HMOOB และเหรียญอื่น เพิ่มสภาพคล่อง และดูกราฟราคาสด'
  ELSE description
END
WHERE name = 'DanDEX';

-- Update DanScan descriptions to mention gas fees
UPDATE public.token_platforms
SET description = CASE
  WHEN locale = 'en' THEN 'Blockchain explorer for DannyChain — track transactions, blocks, wallet balances, gas fees, and network statistics in real-time'
  WHEN locale = 'hmn' THEN 'Blockchain explorer rau DannyChain — nrhiav transactions, blocks, wallet balances, gas fees, thiab network statistics hauv real-time'
  WHEN locale = 'th' THEN 'สำรวจ Blockchain สำหรับ DannyChain — ติดตามธุรกรรม บล็อก ยอดเงินในกระเป๋า ค่าแก๊ส และสถิติเครือข่ายแบบเรียลไทม์'
  ELSE description
END
WHERE name = 'DanScan';