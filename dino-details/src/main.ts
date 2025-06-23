import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


const lifecycles = singleSpaAngular({
  bootstrapFunction: props => {
    return bootstrapApplication(App, {
      ...appConfig,
      providers: [
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
