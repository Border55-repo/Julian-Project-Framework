# Julian Project Maintenance

Dette er den offentlige kildebeskrivelsen for vedlikeholdstjenesten som brukes av Julian Project Control Center. Produksjonsutgaven kjører som en Sites Worker med D1.

- `schema.sql` beskriver den varige tilstanden.
- `maintenance-client.js` er referanseklienten for statiske apper.
- API-kontrakten og sikkerhetsreglene er dokumentert i `docs/MAINTENANCE_MODE.md`.

Produksjonshemmeligheten `MAINTENANCE_ADMIN_SECRET` administreres bare som en kryptert Sites-miljøvariabel.
