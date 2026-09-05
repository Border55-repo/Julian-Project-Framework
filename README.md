# Julian Project Framework

Et gjenbrukbart rammeverk for web-, mobil- og skrivebordsprosjekter.

## Mål

Rammeverket gir alle prosjekter samme grunnmur:

- sikker og lokal-først datalagring
- automatisk testing og bygging
- semantisk versjonering
- presise release-notater som beskriver faktiske endringer
- validering av GitHub Actions før utrulling
- tydelig prosjektstatus og dokumentasjon
- egne branches og pull requests for endringer
- støtte for web, PWA, Android, iOS og skrivebord

## Nytt prosjekt

```bash
node scripts/create-project.mjs mitt-prosjekt --target web
node scripts/create-project.mjs mitt-prosjekt --target mobile
node scripts/create-project.mjs mitt-prosjekt --target desktop
node scripts/create-project.mjs mitt-prosjekt --target all
```

Kjør deretter kommandoene som skriptet viser.

## Eksisterende prosjekt

Se [docs/ADOPTION.md](docs/ADOPTION.md). Rammeverket innføres via en egen branch og pull request, med tilpasset CI for prosjektets faktiske teknologi.

## Versjon

Første stabile rammeverksversjon: **1.0.0**.

Laget og vedlikeholdt for Julian Nordlis prosjekter.
