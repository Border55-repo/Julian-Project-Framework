# Tema for Røde Kors- og førstehjelpsprosjekter

Alle prosjekter i Julian Project Framework som handler om Røde Kors eller førstehjelp skal bruke samme visuelle base som URKH-HOVED sitt blålystema.

## Faste designverdier

```css
:root[data-theme="blue"] {
  color: #eef7ff;
  background: #071525;
  --red: #ff334e;
  --blue: #26a8ff;
  --line: #29435d;
  --muted: #a9c3da;
}

:root[data-theme="blue"] body {
  background: radial-gradient(circle at 50% -20%, #123f6d 0, #071525 50%);
}
```

- Header, footer og kort: `#0d2237`
- Sekundære knapper: bakgrunn `#132f49`, ramme `#3c6485`, tekst `#f4faff`
- Sekundær knapp ved hover: `#194263`
- Primære og farlige handlinger: bakgrunn `#d9092b`, ramme `#ff4b65`
- Skjemafelt: bakgrunn `#081827`, ramme `#456784`, hvit tekst
- Kort: 16 px hjørner, 25 px innvendig avstand, ramme i `--line`
- Knapper: 8 px hjørner og minst 44 px berøringshøyde
- Typografi: `system-ui, -apple-system, "Segoe UI", sans-serif`

## Oppbygning

1. Header med merkevare til venstre og tema-/apphandlinger til høyre.
2. En rolig introduksjon uten eget lyst kort.
3. Modul- eller funksjonskort i to kolonner på stor skjerm og én kolonne på mobil.
4. Rød knapp for viktigste neste handling. Blå knapp for sekundær handling.
5. Blålys er standardtema. Et lyst tema kan tilbys som tilgjengelighetsvalg.

Designregelen omfatter uttrykk og komponenter. Innhold, medisinsk faggrunnlag, logo- og merkevarebruk må fortsatt vurderes og dokumenteres for hvert prosjekt.
