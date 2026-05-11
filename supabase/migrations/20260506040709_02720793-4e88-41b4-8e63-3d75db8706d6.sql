
UPDATE public.video_translations SET description = CASE
  WHEN video_id = '988b962c-80b2-4144-b2cc-64a29169fb61' AND locale = 'en' THEN 'Learn how to download the Bitget Wallet app and create a new wallet step by step — the first step to entering the HMOOB ecosystem safely.'
  WHEN video_id = '988b962c-80b2-4144-b2cc-64a29169fb61' AND locale = 'hmn' THEN 'Kawm txog yuav ua li cas rub thiab tsim ib lub Bitget Wallet tshiab — kauj ruam thawj uas pib nkag mus rau hauv HMOOB ecosystem kom muaj kev nyab xeeb.'
  WHEN video_id = '988b962c-80b2-4144-b2cc-64a29169fb61' AND locale = 'th' THEN 'เรียนรู้วิธีดาวน์โหลดแอป Bitget Wallet และสร้างกระเป๋าใหม่อย่างละเอียดทีละขั้นตอน — จุดเริ่มต้นสู่ระบบนิเวศ HMOOB อย่างปลอดภัย'

  WHEN video_id = 'a71864de-db9a-4633-971b-f53c29a93807' AND locale = 'en' THEN 'A clear guide to connecting the Danny Mainnet network to your Bitget Wallet and adding the HMOOB COIN token so it appears in your wallet.'
  WHEN video_id = 'a71864de-db9a-4633-971b-f53c29a93807' AND locale = 'hmn' THEN 'Cov lus qhia meej rau kev txuas Danny Mainnet rau koj lub Bitget Wallet thiab ntxiv HMOOB COIN kom tshwm hauv koj lub hnab nyiaj.'
  WHEN video_id = 'a71864de-db9a-4633-971b-f53c29a93807' AND locale = 'th' THEN 'คู่มือการเชื่อมต่อเครือข่าย Danny Mainnet เข้ากับ Bitget Wallet ของคุณ พร้อมวิธีเพิ่มเหรียญ HMOOB COIN ให้แสดงในกระเป๋า'

  WHEN video_id = '6b4f41cb-6796-427d-91b1-88c4d1f0655d' AND locale = 'en' THEN 'Discover how to start mining HMOOB COIN by connecting your wallet to the official DApp — earn rewards directly from your mobile device.'
  WHEN video_id = '6b4f41cb-6796-427d-91b1-88c4d1f0655d' AND locale = 'hmn' THEN 'Nrhiav kev pib khaws HMOOB COIN los ntawm kev txuas koj lub hnab nyiaj rau DApp — tau txais nqi zog ncaj qha los ntawm koj lub xov tooj.'
  WHEN video_id = '6b4f41cb-6796-427d-91b1-88c4d1f0655d' AND locale = 'th' THEN 'ค้นพบวิธีเริ่มขุด HMOOB COIN โดยการเชื่อมต่อกระเป๋าของคุณกับ DApp อย่างเป็นทางการ — รับรางวัลโดยตรงจากมือถือของคุณ'

  ELSE description
END
WHERE video_id IN (
  '988b962c-80b2-4144-b2cc-64a29169fb61',
  'a71864de-db9a-4633-971b-f53c29a93807',
  '6b4f41cb-6796-427d-91b1-88c4d1f0655d'
);
