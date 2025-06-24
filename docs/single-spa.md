# Single-spa általános dokumentáció (magyar)

A **single-spa** keretrendszer lehetővé teszi, hogy egyidejűleg több frontend alkalmazás fusson egy oldalon belül. Minden frontend framework végül egyetlen JavaScript fájlba buildelődik (például Angularnál `main.js`). A single-spa ezeket a végtermékeket használja fel, ezért tetszőleges framework kombinációval működik, amíg a buildelt kimenet egy JS fájl.

## Import map-ek szerepe

A böngészőkben az importálás alapból teljes URL-ek megadásával történik. Az import map-ek segítségével azonban nevet adhatunk ezeknek az URL-eknek, majd a név alapján importálhatjuk a modulokat. Példa:

```javascript
import 'https://cdn.jsdelivr.net/npm/single-spa/esm/single-spa.min.js';
```

a következőre cserélhető:

```javascript
import 'single-spa';
```

Ez nemcsak áttekinthetőbbé teszi a kódot, hanem el is rejti, hogy pontosan melyik URL-ről érkezik az import.

Az alábbi import map példában minden bejegyzés egy külön micro-frontendre mutat:

```json
{
  "imports": {
    "@jump/single-spa-root": "https://app.staging.jumpsoftware.com/single-spa-root/2bcf9cdb/single-spa-root.js",
    "@jump/springboard-client": "https://app.staging.jumpsoftware.com/springboard-client/a0c7d10e/springboard-client.js",
    "@jump/feature toggle": "https://app.staging.jumpsoftware.com/feature toggle/95f5bed1/feature toggle.js",
    "@jump/styleguide": "https://app.staging.jumpsoftware.com/styleguide/0e2959cb/styleguide.js",
    "@jump/dev-tools": "https://app.staging.jumpsoftware.com/dev-tools/89f45b8a/dev-tools.js",
    "@jump/navbar": "https://app.staging.jump software.com/navbar/dabd5bc3/navbar.js",
    "@jump/navigation": "https://app.staging.jump software.com/navigation/64903f4b/navigation.js",
    "@jump/reviews": "https://app.staging.jump software.com/reviews/f98cb266/reviews.js",
    "@jump/messaging": "https://app.staging.jump software.com/messaging/fe1538f1/messaging.js",
    "@jump/location-helper": "https://app.staging.jump software.com/location-helper/f3cb39c8/location-helper.js",
    "@jump/shared-utils": "https://app.staging.jump software.com/shared-utils/729bd567/shared-utils.js",
    "@jump/contacts": "https://app.staging.jumpsoftware.com/contacts/5c979c9b/contacts.js",
    "@jump/feedback-kiosk": "https://app.staging.jumpsoftware.com/feedback-kiosk/4f0a0e1a/feedback-kiosk.js",
    "@jump/review-choice": "https://app.staging.jumpsoftware.com/review-choice/b25502ba/review-choice.js",
    "@jump/legal-docs": "https://app.staging.jumpsoftware.com/legal-docs/e6106ae1/legal-docs.js",
    "@jump/media-gallery": "https://app.staging.jumpsoftware.com/media-gallery/13ddcd59/media-gallery.js",
    "@jump/social-post-modal": "https://app.staging.jumpsoftware.com/social-post-modal/2ae0cd70/social-post-modal.js",
    "@jump/upload-widget": "https://app.staging.jumpsoftware.com/upload-widget/7a492710/upload-widget.js"
  }
}
```

Az import mapek teszik lehetővé, hogy csupán az URL átírásával deployoljunk egy micro-frontendet. Ha például a `@jump/reviews` alkalmazást szeretnénk frissíteni, elegendő feltölteni az új JS fájlt és az import mapet az új URL-re állítani.

Mára már minden modern böngésző támogatja az import mapeket.

## Frameworkek integrálása

A `create-single-spa` CLI segít az adott framework (React vagy Angular) projektjének átalakításában, hogy kompatibilis legyen a single-spa környezettel. A single-spa három exportált függvényt vár: `bootstrap`, `mount` és `unmount`. Ezeket sokszor a CLI generálja, így nem kell kézzel megírnunk, de előfordulhat (pl. angular esetén), hogy a CLI nem jól generálja az alkalmazást, ekkor nekünk kell megírni (ezt részletezni fogom).

### Angular sajátosságok

- Előfordulhat, hogy Windows alatt az `npx create-single-spa --moduleType app-parcel` parancs hibára fut. A megoldás: telepítsük globálisan a CLI-t (`npm install --global create-single-spa`), majd futtassuk `create-single-spa --moduleType app-parcel`. Ha hibaüzenetet kapunk, a generált `generator-single-spa-angular.js` fájlban a `spawnSync` hívásnál adjunk hozzá `shell: true` opciót.
- A `main.ts` állományban exportáljuk a `bootstrap`, `mount` és `unmount` függvényeket az alábbi minta szerint:

```typescript
import { NgZone } from '@angular/core';
import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';
import { appConfig } from './app/app.config';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import 'zone.js';

const lifecycles = singleSpaAngular({
  bootstrapFunction: props => {
    return bootstrapApplication(AppComponent, {
      ...appConfig,
      providers: [
        ...(appConfig.providers ?? []),
        ...getSingleSpaExtraProviders(),
      ],
    });
  },
  template: '<app-root />',
  NgZone: NgZone,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
```

### React sajátosságok

A legújabb React (19.x) még nem kompatibilis a single-spa-val, ezért jelenleg React 18.x verziót használunk.

## Összegzés

A single-spa lehetővé teszi, hogy több önállóan fejlesztett frontend egy közös alkalmazásként működjön. Az import map-ek és a CLI eszközök megkönnyítik a micro-frontendek kezelését, frissítését és üzembe helyezését.

