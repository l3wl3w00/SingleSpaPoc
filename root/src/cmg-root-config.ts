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

start({
  urlRerouteOnly: true,
});
