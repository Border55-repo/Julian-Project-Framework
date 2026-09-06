# Standard for klikkbar statussjekk

Alle nye brukerrettede web-, mobil- og skrivebordsapper skal ha en synlig **Sjekk status**-handling.

## Minimumskrav

- Kontroller lokal lagring uten å overskrive brukerdata.
- Kontroller nødvendige appressurser eller installasjonsfiler.
- Vis nettverk som en egen kontroll.
- Kontroller relevante API-er med en trygg, skrivebeskyttet forespørsel.
- Skill mellom grønn (alt virker), gul (delvis/offline) og rød (appen kan ikke fungere).
- Bruk `role="status"` eller tilsvarende tilgjengelighetsmekanisme.
- Forklar resultatet i vanlig språk og la brukeren prøve igjen.
- Ikke last opp dokumenter, bilder, opptak, tokens eller annet brukerinnhold.

## Plattformtilpasning

| Plattform | Typiske kontroller |
|---|---|
| Web/PWA | nettverk, localStorage/IndexedDB, service worker, manifest, API |
| Mobil | nettverk, sikker lagring, tillatelser, API, appversjon |
| Skrivebord | skriveadgang i appmappe, nettverk, lokal database, oppdateringskilde |

En statusknapp er diagnostikk, ikke overvåking. Den skal beskrive det som faktisk ble kontrollert og aldri love at hele tjenesten er frisk uten en reell tjenestesjekk.
