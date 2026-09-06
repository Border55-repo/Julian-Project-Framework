# Julian Project Framework

Et gjenbrukbart rammeverk for web-, mobil- og skrivebordsprosjekter.

## Mål

- sikker og lokal-først datalagring
- automatisk testing og bygging
- semantisk versjonering
- presise release-notater som beskriver faktiske endringer
- validering av GitHub Actions før utrulling
- tydelig prosjektstatus, klikkbar statussjekk og dokumentasjon
- egne branches og pull requests for endringer
- støtte for web, PWA, Android, iOS og skrivebord

## Nytt prosjekt

```bash
node scripts/create-project.mjs mitt-prosjekt --target web
node scripts/create-project.mjs mitt-prosjekt --target mobile
node scripts/create-project.mjs mitt-prosjekt --target desktop
node scripts/create-project.mjs mitt-prosjekt --target all
```

Se [docs/ADOPTION.md](docs/ADOPTION.md) for eksisterende prosjekter og [docs/STATUS_CHECKS.md](docs/STATUS_CHECKS.md) for statusstandarden.

Gjeldende versjon: **1.2.0**.

Laget og vedlikeholdt for Julian Nordlis prosjekter.
