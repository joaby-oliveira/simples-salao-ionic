declare var module: any

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { hmrBootstrap } from './hmr';
import { AppModule } from './app/app.module';

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

hmrBootstrap(module, bootstrap);
