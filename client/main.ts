/// <reference path="../node_modules/@types/core-js/index.d.ts" />
///<reference path="../typings/jquery/jquery.d.ts"/>

import { enableProdMode } from "@angular/core";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

//enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);