# Project Memory

## Core
Dark crypto theme, gold primary (#D4A843), dark navy bg. Space Grotesk headings, DM Sans body.
Supabase connected (ref: oahmqliohtgaehtuhmqp). All content from DB, never hardcode.
Bilingual: English (en) + Hmong (hmn). Translations are frontend-only in src/i18n/translations.ts (NOT in DB).
Admin dashboard at /admin with role-based auth. Admin theme: Soft Navy & Gold.

## Memories
- [Admin Dashboard](mem://features/admin-dashboard) — Auth, roles, CRUD for all content tables (no translations)
- [DB Content Architecture](mem://features/db-content) — DB hooks, content tables with locale column
