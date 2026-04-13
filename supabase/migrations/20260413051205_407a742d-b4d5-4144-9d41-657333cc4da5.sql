
-- Vision milestones EN
INSERT INTO public.vision_milestones (icon_name, title, description, status, sort_order, locale) VALUES
('Rocket','DannyChain L2 Launch','Launched the DannyChain Layer 2 blockchain with 10s block time and low gas fees','done',1,'en'),
('Globe','HMOOB Mining & DanScan Live','Deployed cloud mining platform and blockchain explorer with 3,300+ active miners','done',2,'en'),
('Users','DanDEX & Multi-Wallet Support','Launched decentralized exchange and expanded wallet support to Bitget, TokenPocket, SafePal','current',3,'en'),
('Gem','DanMarket & NFT Integration','Building a decentralized marketplace for digital goods and NFT trading on DannyChain','upcoming',4,'en'),
('Target','Cross-Chain Bridge & Global Expansion','Enabling cross-chain token transfers and expanding to global markets with more partnerships','upcoming',5,'en');

-- Vision milestones HMN
INSERT INTO public.vision_milestones (icon_name, title, description, status, sort_order, locale) VALUES
('Rocket','DannyChain L2 Tshaj Tawm','Tshaj tawm DannyChain Layer 2 blockchain nrog 10s block time thiab gas fees qis','done',1,'hmn'),
('Globe','HMOOB Mining & DanScan Live','Tsim cloud mining platform thiab blockchain explorer nrog 3,300+ cov neeg khawb','done',2,'hmn'),
('Users','DanDEX & Multi-Wallet Support','Tshaj tawm kev sib pauv crypto thiab txuas ntxiv rau Bitget, TokenPocket, SafePal','current',3,'hmn'),
('Gem','DanMarket & NFT','Tsim khw muag khoom digital thiab NFT trading ntawm DannyChain','upcoming',4,'hmn'),
('Target','Cross-Chain Bridge & Ntiaj Teb','Txuas tokens ntawm ntau chains thiab nthuav tawm rau ntiaj teb nrog kev koom tes ntxiv','upcoming',5,'hmn');

-- Compatible wallets
INSERT INTO public.compatible_wallets (name, description, rating, downloads, logo_url, play_url, is_recommended, sort_order) VALUES
('Bitget Wallet','90M+ users · 130+ chains','4.6','10M+','https://play-lh.googleusercontent.com/QbNP8A9GE_UM1s3RFNF8i599yWm_F37iwL4viYCueD9XhJaIZ2yZjMnEwsegeTaHa7Q=s128-rw','https://play.google.com/store/apps/details?id=com.bitkeep.wallet',true,1),
('TokenPocket','25M+ users · 1,000+ networks','4.4','5M+','https://play-lh.googleusercontent.com/D752bekSu2KR_ERPvFiMve7UoQ-5isqXC7v1SP6eVMUaOhCGHJcgjc1k_o8qf1CH_VeFLecOXylysCA05VnY0Sk=s128-rw','https://play.google.com/store/apps/details?id=vip.mytokenpocket',false,2),
('SafePal','20M+ users · 200+ chains','4.6','5M+','https://play-lh.googleusercontent.com/uT6ByyNvUeLRMDnMKEC91RrbHftl2EBB58r9vZaNbiYf1F5Twa33_Hx0zYvEfCtiG1kE=s128-rw','https://play.google.com/store/apps/details?id=io.safepal.wallet',false,3);

-- Site links
INSERT INTO public.site_links (name, url, category, logo_url, icon_name, description, sort_order, locale) VALUES
-- Hero ecosystem logos
('HMOOB Mining','https://hmoob.io','hero_ecosystem',NULL,'Pickaxe','Mine',1,'en'),
('DanDEX','https://dandex.io','hero_ecosystem',NULL,'ArrowLeftRight','Trade',2,'en'),
('DanScan','https://danscan.io','hero_ecosystem',NULL,'Search','Explore',3,'en'),
-- About partner links
('Bitget Wallet','https://play.google.com/store/apps/details?id=com.bitkeep.wallet','about_partner',NULL,NULL,NULL,1,'en'),
('DannyChain','https://dannychain.com','about_partner',NULL,NULL,NULL,2,'en'),
('DanMarket','https://danmarket.io','about_partner',NULL,NULL,NULL,3,'en'),
('DanDEX','https://dandex.io','about_partner',NULL,NULL,NULL,4,'en'),
('DanScan','https://danscan.io','about_partner',NULL,NULL,NULL,5,'en'),
-- Social links
('WhatsApp','https://wa.me/message/hmoobmining','social',NULL,'WhatsApp',NULL,1,'en'),
('Facebook','https://www.facebook.com/profile.php?id=61575614786498','social',NULL,'Facebook',NULL,2,'en'),
('Telegram','#','social',NULL,'Telegram',NULL,3,'en'),
-- Footer ecosystem links
('DannyChain','https://dannychain.com','footer_ecosystem',NULL,NULL,NULL,1,'en'),
('DanDEX','https://dandex.io','footer_ecosystem',NULL,NULL,NULL,2,'en'),
('DanMarket','https://danmarket.io','footer_ecosystem',NULL,NULL,NULL,3,'en'),
('DanScan','https://danscan.io','footer_ecosystem',NULL,NULL,NULL,4,'en'),
('Bitget Wallet','https://play.google.com/store/apps/details?id=com.bitkeep.wallet','footer_ecosystem',NULL,NULL,NULL,5,'en'),
-- CTA apps
('HMOOB Mining','https://hmoob.io','cta_app',NULL,'Pickaxe','cta.launchApp',1,'en'),
('DanDEX','https://dandex.io','cta_app',NULL,'ArrowLeftRight','cta.tradeDex',2,'en'),
('DanScan','https://danscan.io','cta_app',NULL,'Search','cta.exploreScan',3,'en');

-- Site settings
INSERT INTO public.site_settings (key, value, description) VALUES
('video_url','ecosystem-promo','URL or asset name for the ecosystem video'),
('welcome_title_en','Welcome to Hmong Project','Welcome dialog title in English'),
('welcome_title_hmn','Zoo siab txais tos txhua tus los koom Hmoob kev lag luam','Welcome dialog title in Hmong'),
('welcome_desc_en','Mine HMOOB tokens, trade on DanDEX, explore on DanScan — all on the DannyChain ecosystem.','Welcome dialog description in English'),
('welcome_desc_hmn','Khawb HMOOB tokens, pauv ntawm DanDEX, tshawb nrhiav ntawm DanScan — tag nrho ntawm DannyChain ecosystem.','Welcome dialog description in Hmong'),
('welcome_cta_en','Get Started','Welcome dialog CTA in English'),
('welcome_cta_hmn','Pib Tam Sim','Welcome dialog CTA in Hmong'),
('welcome_stat1_value','3,310+','Welcome stat 1 value'),
('welcome_stat1_label_en','Miners','Welcome stat 1 label EN'),
('welcome_stat1_label_hmn','Neeg Khawb','Welcome stat 1 label HMN'),
('welcome_stat2_value','365%','Welcome stat 2 value'),
('welcome_stat2_label','ROI','Welcome stat 2 label'),
('welcome_stat3_value','3','Welcome stat 3 value'),
('welcome_stat3_label','Platforms','Welcome stat 3 label');
