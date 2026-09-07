# Sentral vedlikeholdsmodus

Kontrollpanelet styrer en offentlig, skrivebeskyttet status som alle brukerrettede apper kan lese. Skriveendepunktet krever en hemmelig servernøkkel som bare finnes i Sites-miljøet til kontrollpanelet og vedlikeholdstjenesten.

## Sikkerhetsregler

- Kontrollpanelet holdes alltid tilgjengelig, slik at modusen kan slås av igjen.
- En aktivering må ha utløpstid, og tjenesten godtar maksimalt 24 timer.
- Appene feiler åpent: nettverksfeil i statuskontrollen skal aldri sperre en app.
- Private prosjekter bruker ugjenkjennelige prosjektkoder i det offentlige statusobjektet.
- Ingen hemmeligheter lagres i GitHub, klientkode eller nettleseren.

## Offentlig kontrakt

`GET /api/maintenance` returnerer versjon, global status, aktive prosjektkoder, melding, utløpstid og oppdateringstid. Klientene viser en tilgjengelig vedlikeholdsskjerm når enten `all` er sann eller deres egen prosjektkode finnes i `projects`.

Den kanoniske klientimplementasjonen ligger i `services/maintenance/maintenance-client.js`.
