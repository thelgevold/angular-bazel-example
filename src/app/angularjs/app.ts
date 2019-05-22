/// <reference types="angular" />
import {GreetingComponent} from './greeting/greeting.component';

declare const angular: ng.IAngularStatic;

export default angular.module('old-angularjs-app', [])
    .component('greeting', new GreetingComponent())
    .name;
