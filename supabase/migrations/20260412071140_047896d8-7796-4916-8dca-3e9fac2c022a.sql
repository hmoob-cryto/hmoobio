
-- Add locale column to all content tables
ALTER TABLE public.site_stats ADD COLUMN locale TEXT NOT NULL DEFAULT 'en';
ALTER TABLE public.site_features ADD COLUMN locale TEXT NOT NULL DEFAULT 'en';
ALTER TABLE public.boost_plans ADD COLUMN locale TEXT NOT NULL DEFAULT 'en';
ALTER TABLE public.boost_benefits ADD COLUMN locale TEXT NOT NULL DEFAULT 'en';
ALTER TABLE public.ecosystem_items ADD COLUMN locale TEXT NOT NULL DEFAULT 'en';
ALTER TABLE public.testimonials ADD COLUMN locale TEXT NOT NULL DEFAULT 'en';
ALTER TABLE public.faqs ADD COLUMN locale TEXT NOT NULL DEFAULT 'en';
ALTER TABLE public.how_it_works_steps ADD COLUMN locale TEXT NOT NULL DEFAULT 'en';
ALTER TABLE public.security_features ADD COLUMN locale TEXT NOT NULL DEFAULT 'en';
ALTER TABLE public.trust_partners ADD COLUMN locale TEXT NOT NULL DEFAULT 'en';
ALTER TABLE public.trust_indicators ADD COLUMN locale TEXT NOT NULL DEFAULT 'en';

-- Create indexes for locale filtering
CREATE INDEX idx_site_stats_locale ON public.site_stats(locale);
CREATE INDEX idx_site_features_locale ON public.site_features(locale);
CREATE INDEX idx_boost_plans_locale ON public.boost_plans(locale);
CREATE INDEX idx_boost_benefits_locale ON public.boost_benefits(locale);
CREATE INDEX idx_ecosystem_items_locale ON public.ecosystem_items(locale);
CREATE INDEX idx_testimonials_locale ON public.testimonials(locale);
CREATE INDEX idx_faqs_locale ON public.faqs(locale);
CREATE INDEX idx_how_it_works_steps_locale ON public.how_it_works_steps(locale);
CREATE INDEX idx_security_features_locale ON public.security_features(locale);
CREATE INDEX idx_trust_partners_locale ON public.trust_partners(locale);
CREATE INDEX idx_trust_indicators_locale ON public.trust_indicators(locale);

-- ============================================
-- SEED HMONG (hmn) TRANSLATIONS
-- ============================================

-- site_stats (Hmong)
INSERT INTO public.site_stats (label, value, suffix, icon_name, detail, sort_order, locale) VALUES
('Cov Neeg Khawb', 3310, '+', 'Users', 'Loj tuaj txhua hnub', 1, 'hmn'),
('Cov Boost Plans', 6, ' Qib', 'Zap', '10–1,000 HMOOB', 2, 'hmn'),
('ROI Ib Xyoos', 365, '%', 'Coins', 'Hauv 365 hnub', 3, 'hmn'),
('Cov Neeg Siv Wallet', 80, 'M+', 'Shield', 'Bitget Wallet', 4, 'hmn');

-- site_features (Hmong)
INSERT INTO public.site_features (icon_name, title, description, sort_order, locale) VALUES
('Zap', 'Boost Lub Zog Khawb', 'Xaiv ntawm 6 qib boost (10–1,000 HMOOB) los nce koj tus GH/s hash rate thiab khwv tau 365% ROI hauv 365 hnub.', 1, 'hmn'),
('Smartphone', 'Sib Txuas Bitget Wallet', 'Txuas los ntawm Bitget Wallet app — ib lub Web3 wallet uas muaj 80M+ cov neeg siv, muaj DApp browser, thiab kev ruaj ntseg.', 2, 'hmn'),
('Users', 'Kev Caw Phooj Ywg', 'Caw phooj ywg thiab khwv tau 20% bonus ntxiv rau GH/s hash rate boosts. Caw ntau tshaj, khawb sai tshaj.', 3, 'hmn'),
('Target', 'Txoj Hauj Lwm Txhua Hnub', 'Ua cov missions thiab challenges kom khwv tau HMOOB rewards ntxiv. Muaj missions tshiab tsis tu ncua.', 4, 'hmn'),
('ArrowRightLeft', 'Pauv Token', 'Pauv HMOOB tokens yooj yim los ntawm DANNY Exchange — siv DannyChain Layer 2.', 5, 'hmn'),
('Shield', 'DannyChain Kev Ruaj Ntseg', 'Tsim rau ntawm DannyChain — ib tug EVM-compatible Layer 2 blockchain nrog Ethereum-grade kev ruaj ntseg thiab nqi qis.', 6, 'hmn');

-- boost_plans (Hmong)
INSERT INTO public.boost_plans (name, hmoob_amount, usd_price, hash_rate, total_return, is_recommended, sort_order, locale) VALUES
('Pib', 10, '0.07', '0.12', '46.5', false, 1, 'hmn'),
('Siab Dua', 50, '0.37', '0.58', '232.5', true, 2, 'hmn'),
('Zoo Tshaj', 100, '0.75', '1.16', '465', false, 3, 'hmn'),
('Zoo Tshaj Plus', 300, '2.24', '3.49', '1,395', false, 4, 'hmn'),
('Zoo Tshaj Max', 500, '3.74', '5.81', '2,325', false, 5, 'hmn'),
('Siab Tshaj Plaws', 1000, '7.48', '11.63', '4,650', false, 6, 'hmn');

-- boost_benefits (Hmong)
INSERT INTO public.boost_benefits (text, sort_order, locale) VALUES
('365% ROI hauv 365 hnub', 1, 'hmn'),
('Boosts sib ntxiv — yuav tau ntau tshaj ib qho', 2, 'hmn'),
('Hash rate siab dua = khawb HMOOB sai dua', 3, 'hmn'),
('Siv tau tag nrho 365 hnub', 4, 'hmn');

-- ecosystem_items (Hmong)
INSERT INTO public.ecosystem_items (name, description, url, icon_name, sort_order, locale) VALUES
('DannyChain', 'Layer 2 EVM-compatible blockchain nrog Ethereum kev ruaj ntseg, nqi qis, thiab loj heev.', 'https://dannychain.com', 'Blocks', 1, 'hmn'),
('DANNY Exchange', 'Pauv HMOOB thiab lwm cov DannyChain tokens yooj yim los ntawm DEX.', 'https://hmoob.io/swap', 'ArrowRightLeft', 2, 'hmn'),
('DanMarket', 'Lub khw muag khoom digital hauv DannyChain ecosystem.', 'https://danmarket.io', 'ShoppingBag', 3, 'hmn'),
('DanScan Explorer', 'Saib tag nrho cov transactions, blocks, thiab smart contracts ntawm DannyChain blockchain.', 'https://danscan.io', 'Search', 4, 'hmn');

-- testimonials (Hmong)
INSERT INTO public.testimonials (name, role, quote, initials, gradient, hash_rate, boost_tier, is_verified, sort_order, locale) VALUES
('Kia Vang', 'Neeg Khawb · Koom Jan 2025', 'HMOOB Mining ua rau crypto yooj yim rau peb haiv neeg. Kuv yuav Advanced Boost thiab kuv cov nyiaj loj tuaj txhua hnub. Kev caw phooj ywg ib leeg twb khwv tau 120 HMOOB ntxiv lawm.', 'KV', 'from-primary/20 to-primary/5', '150 GH/s', 'Advanced', true, 1, 'hmn'),
('Mailee Xiong', 'Tsim Zej Zog · 47 Referrals', 'Kuv nyiam tias lub platform no tsim rau haiv Hmoob. DannyChain ecosystem zoo li yog peb li. Kuv twb caw 47 tus phooj ywg lawm — txhua tus nce kuv hash rate nrog 20% referral bonus.', 'MX', 'from-secondary/20 to-secondary/5', '320 GH/s', 'Professional', true, 2, 'hmn'),
('Tou Lee', 'Nyiam Crypto · Txij Thaum Beta', '365% ROI hauv ib xyoos zoo heev. Kuv xyuas txhua txoj kev lag luam ntawm DanScan — pom tseeb tag nrho. Bitget Wallet sib txuas zoo heev thiab kuv paub tias kuv tus yuam sij yog kuv li.', 'TL', 'from-primary/20 to-secondary/5', '500 GH/s', 'Enterprise', true, 3, 'hmn');

-- faqs (Hmong)
INSERT INTO public.faqs (question, answer, sort_order, locale) VALUES
('HMOOB Mining yog dab tsi?', 'HMOOB Mining yog ib lub platform khawb crypto hauv huab cua uas tsim rau ntawm DannyChain Layer 2 blockchain. Koj khawb HMOOB tokens los ntawm kev txuas Bitget Wallet thiab yuav boost plans — tsis xav tau kho vajtse.', 1, 'hmn'),
('Kuv xav tau lub wallet twg?', 'Koj xav tau Bitget Wallet app (muaj hauv Google Play). Nws yog ib lub Web3 wallet uas muaj 80M+ cov neeg siv nrog DApp browser los nkag hmoob.io.', 2, 'hmn'),
('Kuv pib khawb li cas?', 'Download Bitget Wallet app, tsim lossis nkag koj lub wallet, tom qab ntawd qhib hmoob.io hauv wallet lub DApp browser. Txuas koj lub wallet thiab yuav ib qho Boost plan — pib khawb tam sim ntawd.', 3, 'hmn'),
('Boost plans yog dab tsi?', 'Boost plans pab nce koj tus mining hash rate (GH/s). Muaj 6 qib los ntawm 10 txog 1,000 HMOOB, txhua qib muaj 365% ROI hauv 365 hnub. Boosts sib ntxiv tau.', 4, 'hmn'),
('Kev caw phooj ywg ua hauj lwm li cas?', 'Caw phooj ywg siv koj tus referral link thiab khwv tau 20% bonus ntxiv rau GH/s hash rate boosts. Caw ntau tshaj, khwv ntau tshaj.', 5, 'hmn'),
('DannyChain yog dab tsi?', 'DannyChain yog ib tug decentralized Layer 2 blockchain uas yog EVM-compatible, muaj nqi qis, ceev, thiab Ethereum-level kev ruaj ntseg. HMOOB Mining thiab DANNY Exchange tsim rau ntawm DannyChain.', 6, 'hmn'),
('Kuv rho lossis pauv kuv cov HMOOB tokens li cas?', 'Mus rau Wallet section los rho HMOOB rau koj lub Bitget Wallet, lossis siv Swap feature los pauv HMOOB rau lwm cov tokens ntawm DANNY Exchange.', 7, 'hmn');

-- how_it_works_steps (Hmong)
INSERT INTO public.how_it_works_steps (icon_name, title, description, sort_order, locale) VALUES
('Download', 'Download Bitget Wallet', 'Download Bitget Wallet app los ntawm Google Play Store. Tsim lossis nkag koj lub Web3 wallet kom pib.', 1, 'hmn'),
('Wallet', 'Txuas rau hmoob.io', 'Qhib hmoob.io hauv Bitget Wallet lub DApp browser. Txuas koj lub wallet — koj cov HMOOB thiab hash rate sync tam sim.', 2, 'hmn'),
('Zap', 'Xaiv Ib Qho Boost', 'Yuav ib qho Boost plan (10–1,000 HMOOB) los nce koj tus mining hash rate thiab pib khwv 365% ROI hauv 365 hnub.', 3, 'hmn'),
('TrendingUp', 'Khawb, Khwv & Pauv', 'Kev khawb khiav mus ib txhis. Saib koj cov HMOOB loj tuaj txhua hnub. Ua missions, caw phooj ywg, thiab pauv tokens ntawm DANNY Exchange.', 4, 'hmn');

-- security_features (Hmong)
INSERT INTO public.security_features (icon_name, title, description, sort_order, locale) VALUES
('Lock', 'Kev Ruaj Ntseg Self-Custodial', 'Koj cov private keys nyob hauv koj lub Bitget Wallet — tsuas yog koj tswj koj cov nyiaj xwb. Tsis muaj kev pheej hmoo ntawm ib lub chaw.', 1, 'hmn'),
('Shield', 'DannyChain Layer 2 Kev Tiv Thaiv', 'Tsim rau ntawm DannyChain — ib tug EVM-compatible Layer 2 blockchain uas siv Ethereum tus qauv kev ruaj ntseg.', 2, 'hmn'),
('Eye', 'Pom Tseeb & Txheeb Xyuas Tau', 'Txhua txoj kev lag luam pom tseeb ntawm DanScan explorer. Txhua qhov boost thiab reward yog on-chain.', 3, 'hmn'),
('Server', 'Decentralized Infrastructure', 'Tsis muaj ib qho chaw tsis ua hauj lwm. Kev khawb khiav ntawm decentralized smart contracts uas ua hauj lwm ib leeg.', 4, 'hmn'),
('KeyRound', 'Kev Txuas Wallet Ruaj Ntseg', 'Txuas los ntawm Bitget Wallet lub DApp browser nrog Web3 protocols. Tsis tas muab password.', 5, 'hmn'),
('FileCheck', 'Smart Contract Audited', 'Mining thiab reward smart contracts raug tshuaj xyuas los ntawm zej zog thiab deployed rau DannyChain blockchain.', 6, 'hmn');

-- trust_partners (Hmong)
INSERT INTO public.trust_partners (name, description, url, sort_order, locale) VALUES
('Bitget Wallet', '80M+ Neeg Siv', 'https://web3.bitget.com', 1, 'hmn'),
('DannyChain', 'Layer 2 Blockchain', 'https://dannychain.com', 2, 'hmn'),
('DANNY Exchange', 'Decentralized DEX', 'https://hmoob.io/swap', 3, 'hmn'),
('DanMarket', 'Web3 Khw Muag Khoom', 'https://danmarket.io', 4, 'hmn');

-- trust_indicators (Hmong)
INSERT INTO public.trust_indicators (icon_name, text, sort_order, locale) VALUES
('Shield', 'Smart Contract Raug Txheeb', 1, 'hmn'),
('Lock', 'Self-Custodial Wallet', 2, 'hmn'),
('Globe', 'EVM Compatible', 3, 'hmn'),
('Verified', 'Zej Zog Txheeb Xyuas', 4, 'hmn');
