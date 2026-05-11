
UPDATE public.translations SET value = REPLACE(REPLACE(REPLACE(value,'danscan.io','dannyscan.com'),'DanScan','DannyScan'),'0xD84b7c96c23BAb37b585Bac98DFE6651D30F6c11','0x1c2cD5d8f44C2aa37c87676Ac4200c2329AB019d')
WHERE value ILIKE '%danscan%' OR value ILIKE '%0xD84b7c96%';

UPDATE public.site_links SET
  name = REPLACE(name,'DanScan','DannyScan'),
  url = REPLACE(REPLACE(url,'danscan.io','dannyscan.com'),'DanScan','DannyScan'),
  description = REPLACE(REPLACE(description,'danscan.io','dannyscan.com'),'DanScan','DannyScan'),
  logo_url = REPLACE(REPLACE(logo_url,'danscan.io','dannyscan.com'),'DanScan','DannyScan')
WHERE name ILIKE '%danscan%' OR url ILIKE '%danscan%' OR COALESCE(description,'') ILIKE '%danscan%' OR COALESCE(logo_url,'') ILIKE '%danscan%';

UPDATE public.site_settings SET value = REPLACE(REPLACE(REPLACE(value,'danscan.io','dannyscan.com'),'DanScan','DannyScan'),'0xD84b7c96c23BAb37b585Bac98DFE6651D30F6c11','0x1c2cD5d8f44C2aa37c87676Ac4200c2329AB019d')
WHERE value ILIKE '%danscan%' OR value ILIKE '%0xD84b7c96%';

UPDATE public.ecosystem_items SET
  name = REPLACE(name,'DanScan','DannyScan'),
  url = REPLACE(REPLACE(url,'danscan.io','dannyscan.com'),'DanScan','DannyScan'),
  description = REPLACE(REPLACE(description,'danscan.io','dannyscan.com'),'DanScan','DannyScan')
WHERE name ILIKE '%danscan%' OR url ILIKE '%danscan%' OR COALESCE(description,'') ILIKE '%danscan%';

UPDATE public.vision_section SET value = REPLACE(REPLACE(REPLACE(value,'danscan.io','dannyscan.com'),'DanScan','DannyScan'),'0xD84b7c96c23BAb37b585Bac98DFE6651D30F6c11','0x1c2cD5d8f44C2aa37c87676Ac4200c2329AB019d')
WHERE value ILIKE '%danscan%' OR value ILIKE '%0xD84b7c96%';

UPDATE public.token_platforms SET
  name = REPLACE(name,'DanScan','DannyScan'),
  url = REPLACE(REPLACE(url,'danscan.io','dannyscan.com'),'DanScan','DannyScan'),
  description = REPLACE(REPLACE(description,'danscan.io','dannyscan.com'),'DanScan','DannyScan')
WHERE name ILIKE '%danscan%' OR url ILIKE '%danscan%' OR COALESCE(description,'') ILIKE '%danscan%';

UPDATE public.testimonials SET quote = REPLACE(REPLACE(quote,'danscan.io','dannyscan.com'),'DanScan','DannyScan')
WHERE quote ILIKE '%danscan%';

UPDATE public.security_features SET
  title = REPLACE(title,'DanScan','DannyScan'),
  description = REPLACE(REPLACE(description,'danscan.io','dannyscan.com'),'DanScan','DannyScan')
WHERE title ILIKE '%danscan%' OR description ILIKE '%danscan%';

UPDATE public.faqs SET
  question = REPLACE(REPLACE(question,'danscan.io','dannyscan.com'),'DanScan','DannyScan'),
  answer = REPLACE(REPLACE(REPLACE(answer,'danscan.io','dannyscan.com'),'DanScan','DannyScan'),'0xD84b7c96c23BAb37b585Bac98DFE6651D30F6c11','0x1c2cD5d8f44C2aa37c87676Ac4200c2329AB019d')
WHERE question ILIKE '%danscan%' OR answer ILIKE '%danscan%' OR answer ILIKE '%0xD84b7c96%';

UPDATE public.how_it_works_steps SET
  title = REPLACE(title,'DanScan','DannyScan'),
  description = REPLACE(REPLACE(description,'danscan.io','dannyscan.com'),'DanScan','DannyScan')
WHERE title ILIKE '%danscan%' OR description ILIKE '%danscan%';

UPDATE public.site_features SET
  title = REPLACE(title,'DanScan','DannyScan'),
  description = REPLACE(REPLACE(description,'danscan.io','dannyscan.com'),'DanScan','DannyScan')
WHERE title ILIKE '%danscan%' OR description ILIKE '%danscan%';

UPDATE public.trust_partners SET
  name = REPLACE(name,'DanScan','DannyScan'),
  url = REPLACE(REPLACE(url,'danscan.io','dannyscan.com'),'DanScan','DannyScan'),
  description = REPLACE(REPLACE(description,'danscan.io','dannyscan.com'),'DanScan','DannyScan')
WHERE name ILIKE '%danscan%' OR COALESCE(url,'') ILIKE '%danscan%' OR COALESCE(description,'') ILIKE '%danscan%';
