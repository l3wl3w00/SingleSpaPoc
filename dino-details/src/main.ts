import { NgZone } from '@angular/core';
import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';
import { appConfig } from './app/app.config';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import {AppComponent} from './app/app.component';

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
