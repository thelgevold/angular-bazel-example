/**
 * Used to launch the application under Bazel production mode.
 */
import {enableProdMode} from '@angular/core';
import {platformBrowser} from '@angular/platform-browser';
import {AppModuleNgFactory} from './app/app.module.ngfactory';

declare const angular: ng.IAngularStatic;

import angularJSApp from './app/angularjs/app';

import {StaticProvider} from '@angular/core';
import {HelloWorldComponent} from './app/hello-world/hello-world.component';
import {downgradeModule, downgradeComponent} from '@angular/upgrade/static';

enableProdMode();

const bootstrapFn = (extraProviders: StaticProvider[]) =>
  platformBrowser(extraProviders).bootstrapModuleFactory(AppModuleNgFactory);

const downgradedModule = downgradeModule(bootstrapFn);

angular.module('app', [angularJSApp, downgradedModule]);
angular.module('app').directive('helloWorld', downgradeComponent({component: HelloWorldComponent}));

angular.bootstrap(document, ['app']);
