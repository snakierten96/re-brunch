import 'reflect-metadata';
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import { enableProdMode }         from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

declare const __PRODUCTION__ : boolean;
declare const __TEST__ : boolean;

if (__PRODUCTION__) {
  enableProdMode()
} else {
  require('zone.js/dist/long-stack-trace-zone');
}

if (!__TEST__) {
  platformBrowserDynamic().bootstrapModule(AppModule)
}