-- Revert all "Layer 1" references back to "Layer 2" in history_timeline and token_platforms
UPDATE public.history_timeline SET description = REPLACE(description, 'Layer 1', 'Layer 2') WHERE description LIKE '%Layer 1%';
UPDATE public.history_timeline SET title = REPLACE(title, 'Layer 1', 'Layer 2') WHERE title LIKE '%Layer 1%';
UPDATE public.token_platforms SET description = REPLACE(description, 'Layer 1', 'Layer 2') WHERE description LIKE '%Layer 1%';
UPDATE public.token_platforms SET name = REPLACE(name, 'Layer 1', 'Layer 2') WHERE name LIKE '%Layer 1%';