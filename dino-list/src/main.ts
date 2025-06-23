import { NgZone } from '@angular/core';
import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

const lifecycles = singleSpaAngular({
  bootstrapFunction: props => {
    return bootstrapApplication(App, {
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
