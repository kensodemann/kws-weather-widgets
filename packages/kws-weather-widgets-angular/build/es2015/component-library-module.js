/**
 * @fileoverview added by tsickle
 * Generated from: component-library-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { defineCustomElements } from 'kws-weather-widgets/loader';
import { KwsCondition, KwsDailyForecast, KwsTemperature, KwsUvIndex } from './directives/proxies';
defineCustomElements(window);
/** @type {?} */
const DECLARATIONS = [KwsCondition, KwsDailyForecast, KwsTemperature, KwsUvIndex];
export class ComponentLibraryModule {
}
ComponentLibraryModule.decorators = [
    { type: NgModule, args: [{
                declarations: DECLARATIONS,
                exports: DECLARATIONS,
                imports: [],
                providers: []
            },] },
];
