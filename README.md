# SingleSpaPoc indítási útmutató

Ez a projekt több micro-frontendet tartalmaz, amelyek a [single-spa](https://single-spa.js.org/) keretrendszert használják. Minden modul önállóan fejleszthető és futtatható.

## Alkalmazás áttekintése

Az alkalmazás egy egyszerű „Dinosaur Database", amelyet a következő modulok alkotnak:

- **root** – single-spa **6.0.3** alapú központi konfiguráció (port **9000**)
- **home** – React **18.1.0** kezdőoldal (port **4200**)
- **navbar** – React **18.2.0** navigációs sáv (port **4202**)
- **comments** – React **18.3.1** hozzászólás modul (port **4204**)
- **dino-list** – Angular **20.0.0** dinoszaurusz lista (port **4201**)
- **dino-details** – Angular **19.1.0** részletező oldal (port **4203**)

## Függőségek telepítése

A projekt gyökerében futtasd:

```bash
npm install
```

Ez telepíti az összes workspace modul függőségeit. Emiatt ez a parancs eltarthat egy ideig.

## Fejlesztői futtatás

Az összes micro-frontend egyidejű indításához használd az alábbi parancsot:

```bash
npm run dev
```

Minden modul a fenti porton lesz elérhető. Ha csak egy modult szeretnél futtatni, használd:

```bash
npm --prefix <modul-neve> start
```

A `<modul-neve>` lehet `root`, `home`, `navbar`, `comments`, `dino-list` vagy `dino-details`.