
-- Seed site_stats
INSERT INTO public.site_stats (label, value, suffix, icon_name, detail, sort_order) VALUES
('Active Miners', 3310, '+', 'Users', 'Growing daily', 1),
('Boost Plans', 6, ' Tiers', 'Zap', '10–1,000 HMOOB', 2),
('Annual ROI', 365, '%', 'Coins', 'Over 365 days', 3),
('Wallet Users', 80, 'M+', 'Shield', 'Bitget Wallet', 4);

-- Seed site_features
INSERT INTO public.site_features (icon_name, title, description, sort_order) VALUES
('Zap', 'Mining Power Boosts', 'Choose from 6 boost tiers (10–1,000 HMOOB) to increase your GH/s hash rate and earn 365% ROI over 365 days.', 1),
('Smartphone', 'Bitget Wallet Integration', 'Connect through the Bitget Wallet app — a trusted Web3 wallet with 80M+ users, built-in DApp browser, and self-custodial security.', 2),
('Users', 'Referral Program', 'Invite friends and earn 20% bonus plus GH/s hash rate boosts. The more friends join, the faster you mine.', 3),
('Target', 'Daily Missions', 'Complete tasks and challenges to earn additional HMOOB rewards. New missions available regularly.', 4),
('ArrowRightLeft', 'Token Swap', 'Swap HMOOB tokens seamlessly via the integrated DANNY Exchange — powered by DannyChain Layer 2.', 5),
('Shield', 'DannyChain Security', 'Built on DannyChain — an EVM-compatible Layer 2 blockchain with Ethereum-grade security and low fees.', 6);

-- Seed boost_plans
INSERT INTO public.boost_plans (name, hmoob_amount, usd_price, hash_rate, total_return, is_recommended, sort_order) VALUES
('Starter', 10, '0.07', '0.12', '46.5', false, 1),
('Advanced', 50, '0.37', '0.58', '232.5', true, 2),
('Elite', 100, '0.75', '1.16', '465', false, 3),
('Elite Plus', 300, '2.24', '3.49', '1,395', false, 4),
('Elite Max', 500, '3.74', '5.81', '2,325', false, 5),
('Ultimate', 1000, '7.48', '11.63', '4,650', false, 6);

-- Seed boost_benefits
INSERT INTO public.boost_benefits (text, sort_order) VALUES
('365% return on investment over 365 days', 1),
('Boosts stack — purchase multiple boosts', 2),
('Higher hash rate = faster HMOOB mining', 3),
('Active for the full 365-day duration', 4);

-- Seed ecosystem_items
INSERT INTO public.ecosystem_items (name, description, url, icon_name, sort_order) VALUES
('DannyChain', 'Layer 2 EVM-compatible blockchain with Ethereum security, low fees, and massive scale.', 'https://dannychain.com', 'Blocks', 1),
('DANNY Exchange', 'Swap HMOOB and other DannyChain tokens seamlessly through the integrated DEX.', 'https://hmoob.io/swap', 'ArrowRightLeft', 2),
('DanMarket', 'Decentralized marketplace for trading digital assets within the DannyChain ecosystem.', 'https://danmarket.io', 'ShoppingBag', 3),
('DanScan Explorer', 'View all transactions, blocks, and smart contracts on the DannyChain blockchain.', 'https://danscan.io', 'Search', 4);

-- Seed testimonials
INSERT INTO public.testimonials (name, role, quote, initials, gradient, hash_rate, boost_tier, is_verified, sort_order) VALUES
('Kia Vang', 'Active Miner · Joined Jan 2025', 'HMOOB Mining made crypto accessible for our community. I bought the Advanced Boost and my balance grows every day. The referral program alone has earned me an extra 120 HMOOB.', 'KV', 'from-primary/20 to-primary/5', '150 GH/s', 'Advanced', true, 1),
('Mailee Xiong', 'Community Builder · 47 Referrals', 'I love that this platform is built for the Hmong community. The DannyChain ecosystem feels like it''s ours. I''ve already referred 47 friends — each one boosts my hash rate with the 20% referral bonus.', 'MX', 'from-secondary/20 to-secondary/5', '320 GH/s', 'Professional', true, 2),
('Tou Lee', 'Crypto Enthusiast · Since Beta', 'The 365% ROI over a year is impressive. I verified every transaction on DanScan — fully transparent. The Bitget Wallet integration is smooth and I feel safe knowing my keys are mine.', 'TL', 'from-primary/20 to-secondary/5', '500 GH/s', 'Enterprise', true, 3);

-- Seed faqs
INSERT INTO public.faqs (question, answer, sort_order) VALUES
('What is HMOOB Mining?', 'HMOOB Mining is a cloud-based mining platform built on the DannyChain Layer 2 blockchain. You mine HMOOB tokens by connecting via Bitget Wallet and purchasing boost plans — no physical hardware needed.', 1),
('What wallet do I need?', 'You need the Bitget Wallet app (available on Google Play). It''s a trusted Web3 wallet with 80M+ users that provides a built-in DApp browser to access hmoob.io securely.', 2),
('How do I start mining?', 'Download the Bitget Wallet app, create or import a wallet, then open hmoob.io in the wallet''s DApp browser. Connect your wallet and purchase a Boost plan — mining starts immediately.', 3),
('What are Boost plans?', 'Boost plans let you increase your mining hash rate (GH/s). There are 6 tiers from 10 to 1,000 HMOOB, each offering 365% ROI over 365 days. Boosts stack, so you can purchase multiple.', 4),
('How does the referral program work?', 'Invite friends using your referral link and earn 20% bonus plus additional GH/s hash rate boosts. The more friends who join and boost, the more you earn.', 5),
('What is DannyChain?', 'DannyChain is a decentralized Layer 2 blockchain that is EVM-compatible, offering low fees, high speed, and Ethereum-level security. HMOOB Mining and the DANNY Exchange are built on DannyChain.', 6),
('How do I withdraw or swap my HMOOB tokens?', 'Go to the Wallet section to withdraw HMOOB to your Bitget Wallet, or use the integrated Swap feature to exchange HMOOB for other tokens on the DANNY Exchange.', 7);

-- Seed how_it_works_steps
INSERT INTO public.how_it_works_steps (icon_name, title, description, sort_order) VALUES
('Download', 'Download Bitget Wallet', 'Download the Bitget Wallet app from Google Play Store. Create or import your Web3 wallet to get started securely.', 1),
('Wallet', 'Connect to hmoob.io', 'Open hmoob.io in the Bitget Wallet''s built-in DApp browser. Connect your wallet — your HMOOB balance and hash rate sync in real time.', 2),
('Zap', 'Choose a Boost', 'Purchase a Boost plan (10–1,000 HMOOB) to increase your mining hash rate and start earning 365% ROI over 365 days.', 3),
('TrendingUp', 'Mine, Earn & Swap', 'Mining runs automatically. Watch your HMOOB grow daily. Complete missions, invite friends, and swap tokens via DANNY Exchange.', 4);

-- Seed security_features
INSERT INTO public.security_features (icon_name, title, description, sort_order) VALUES
('Lock', 'Self-Custodial Security', 'Your private keys stay in your Bitget Wallet — only you control your funds. No centralized custody risk.', 1),
('Shield', 'DannyChain Layer 2 Protection', 'Built on DannyChain — an EVM-compatible Layer 2 blockchain inheriting Ethereum''s battle-tested security model.', 2),
('Eye', 'Transparent & Verifiable', 'All transactions are publicly verifiable on DanScan explorer. Every boost purchase and reward distribution is on-chain.', 3),
('Server', 'Decentralized Infrastructure', 'No single point of failure. Mining operations run on decentralized smart contracts that execute automatically.', 4),
('KeyRound', 'Secure Wallet Connection', 'Connect through Bitget Wallet''s DApp browser with industry-standard Web3 protocols. No password sharing required.', 5),
('FileCheck', 'Smart Contract Audited', 'Mining and reward distribution smart contracts are community-reviewed and deployed on the immutable DannyChain blockchain.', 6);

-- Seed trust_partners
INSERT INTO public.trust_partners (name, description, url, sort_order) VALUES
('Bitget Wallet', '80M+ Users', 'https://web3.bitget.com', 1),
('DannyChain', 'Layer 2 Blockchain', 'https://dannychain.com', 2),
('DANNY Exchange', 'Decentralized DEX', 'https://hmoob.io/swap', 3),
('DanMarket', 'Web3 Marketplace', 'https://danmarket.io', 4);

-- Seed trust_indicators
INSERT INTO public.trust_indicators (icon_name, text, sort_order) VALUES
('Shield', 'Smart Contract Verified', 1),
('Lock', 'Self-Custodial Wallet', 2),
('Globe', 'EVM Compatible', 3),
('Verified', 'Community Audited', 4);
