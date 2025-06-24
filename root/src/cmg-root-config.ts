import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@cmg/dino-list",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "@cmg/dino-list"
    ),
  activeWhen: ["/dino-list"],
});
registerApplication({
  name: "@cmg/dino-details",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "@cmg/dino-details"
    ),
  activeWhen: ["/dino-details"],
});

registerApplication({
  name: "@cmg/navbar",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "@cmg/navbar"
    ),
  activeWhen: (_) => true,
});

registerApplication({
  name: "@cmg/home",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "@cmg/home"
    ),
  activeWhen: (loc) => loc.pathname === "/" || loc.pathname === "/home",
});

registerApplication({
  name: "@cmg/comments",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "@cmg/comments"
    ),
  activeWhen: ["/dino-details"],
});

start({
  urlRerouteOnly: true,
});
