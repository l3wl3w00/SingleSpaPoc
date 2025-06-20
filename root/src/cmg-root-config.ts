import { registerApplication, start, LifeCycles } from "single-spa";

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
  activeWhen: () => true,
});

start({
  urlRerouteOnly: true,
});
