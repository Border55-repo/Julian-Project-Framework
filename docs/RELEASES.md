# Releaseprosess

1. Kontroller at arbeidsgrenen er oppdatert og at CI er grønn.
2. Velg versjon etter SemVer: patch for feilretting, minor for bakoverkompatibel funksjon og major for brytende endring.
3. Oppdater `VERSION`, pakkefilens versjon og `CHANGELOG.md` samlet.
4. Skriv release-notater fra de faktiske commitene og den ferdige funksjonen.
5. Bygg alle avtalte artefakter, for eksempel webpakke, APK eller skrivebordsinstallatør.
6. Test at artefaktene finnes og kan åpnes før releasen publiseres.
7. Opprett taggen `vX.Y.Z`. Release-workflowen publiserer bare en tag som samsvarer med `VERSION`.
8. Send versjonsvarsel først etter at releasen er tilgjengelig.

En release skal ikke love funksjoner som ikke finnes i den publiserte koden.
