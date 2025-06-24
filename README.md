# SingleSpaPoc indítási útmutató

Ez a projekt több micro-frontendet tartalmaz, amelyek a [single-spa](https://single-spa.js.org/) keretrendszert használják. Minden micro-frontend önállóan fejleszthető és futtatható.

## Alkalmazás áttekintése

Az alkalmazás témája egy egyszerű „Dinosaur Database", amely bemutatja, hogyan dolgozhat együtt több különböző frameworkből származó micro-frontend. A root konfiguráció tölti be a modulokat, amelyek az alábbi feladatokat látják el:

- **root** – single-spa **6.0.3** alapú központi konfiguráció (port: **9000**), amely az import mapet kezeli és elindítja a többi modult.
- **home** – React **18.1.0** kezdőoldal (port: **4200**), amely üdvözli a látogatót és linkeket kínál a többi oldalhoz.
- **navbar** – React **18.2.0** navigációs sáv (port: **4202**), amely a főbb modulokra mutató menüt jelenít meg.
- **comments** – React **18.3.1** modul (port: **4204**), ahol hozzászólásokat fűzhetünk a dinoszauruszokhoz.
- **dino-list** – Angular **20.0.0** lista (port: **4201**) a dinoszauruszokról, kártyás megjelenítéssel.
- **dino-details** – Angular **19.1.0** részletező oldal (port: **4203**), ahol a kiválasztott dinoszaurusz adatai olvashatók.

## Micro-frontendek indítása manuálisan

1. Nyiss egy terminált, majd lépj be a projekt gyökerébe.
2. Minden modulnál telepítsd a függőségeket és indítsd el a fejlesztői szervert:

```bash
cd <modul-neve>
npm install --force
npm start
```

3. Ismételd meg a fenti lépéseket a következő mappákban: `root`, `home`, `navbar`, `comments`, `dino-list`, `dino-details`.
4. A modulok a fenti portokon lesznek elérhetők, a root-konfiguráció pedig a `http://localhost:9000` címen tölti be őket.

## Indítás automatizálása

A projekt tartalmaz egy `startup.ps1` PowerShell szkriptet, amely egymás után elindítja a fenti micro-frontendeket. A szkript minden mappában végrehajtja az `npm start` parancsot, így nem szükséges külön terminálablakokat nyitni.

A szkript futtatása Windows alatt (powershell-ből):

```powershell
./startup.ps1
```

Ezzel a módszerrel egy lépésben elindítható a teljes alkalmazás.