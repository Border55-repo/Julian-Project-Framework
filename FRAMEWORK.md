# Prosjektstandard

## Ufravikelige regler

1. Bruk egne branches og pull requests. `main` skal alltid være byggbar.
2. Enhver release skal ha SemVer-versjon, oppdatert endringslogg og release-notater som beskriver det som faktisk er levert.
3. CI skal kjøre tester og bygging. En workflow uten jobber eller med ugyldige triggere regnes som feil.
4. Brukerdata, bilder, opptak og hemmeligheter skal aldri committes eller lastes opp uten en uttrykkelig funksjon og dokumentert samtykke.
5. Lokal-først er standard. Ved skylagring skal eierskap, levetid, eksport og sletting dokumenteres.
6. Lagring skal testes med oppretting, gjenåpning, oppdatering og sletting.
7. Oppdateringssjekk skal aldri føre til tap av ulagrede data.
8. Tilgjengelighet, mobilvisning, tomtilstand, feiltilstand og frakoblet tilstand skal vurderes.
9. Hemmeligheter skal ligge i miljøvariabler eller GitHub Secrets, aldri i kildekoden.
10. Alle tredjepartsavhengigheter skal ha kjent lisens og låst versjon gjennom en lockfil når pakkesystemet støtter det.
11. Alle brukerrettede apper skal ha en klikkbar statussjekk som skiller lokal funksjon, nettverk, appressurser og eksterne tjenester. Sjekken skal ikke laste opp brukerinnhold.
12. Prosjekter relatert til Røde Kors eller førstehjelp skal bruke det felles URKH-blålystemaet i `docs/RED-CROSS-FIRST-AID-THEME.md` som visuell base.

## Ferdigdefinisjon

En endring er ferdig når funksjonen virker, tester er bestått, byggingen er grønn, dokumentasjonen er oppdatert, data overlever omstart når det er relevant, og release-notatene samsvarer med leveransen.
