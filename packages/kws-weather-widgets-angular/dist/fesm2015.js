import { __decorate, __metadata } from 'tslib';
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, NgZone, NgModule } from '@angular/core';
import { fromEvent } from 'rxjs';
import { defineCustomElements } from 'kws-weather-widgets/loader';

/**
 * @fileoverview added by tsickle
 * Generated from: directives/proxies.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const proxyInputs = (/**
 * @param {?} Cmp
 * @param {?} inputs
 * @return {?}
 */
(Cmp, inputs) => {
    /** @type {?} */
    const Prototype = Cmp.prototype;
    inputs.forEach((/**
     * @param {?} item
     * @return {?}
     */
    item => {
        Object.defineProperty(Prototype, item, {
            /**
             * @return {?}
             */
            get() { return this.el[item]; },
            /**
             * @param {?} val
             * @return {?}
             */
            set(val) { this.z.runOutsideAngular((/**
             * @return {?}
             */
            () => (this.el[item] = val))); }
        });
    }));
});
/** @type {?} */
const proxyMethods = (/**
 * @param {?} Cmp
 * @param {?} methods
 * @return {?}
 */
(Cmp, methods) => {
    /** @type {?} */
    const Prototype = Cmp.prototype;
    methods.forEach((/**
     * @param {?} methodName
     * @return {?}
     */
    methodName => {
        Prototype[methodName] = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            const args = arguments;
            return this.z.runOutsideAngular((/**
             * @return {?}
             */
            () => this.el[methodName].apply(this.el, args)));
        });
    }));
});
/** @type {?} */
const proxyOutputs = (/**
 * @param {?} instance
 * @param {?} el
 * @param {?} events
 * @return {?}
 */
(instance, el, events) => {
    events.forEach((/**
     * @param {?} eventName
     * @return {?}
     */
    eventName => instance[eventName] = fromEvent(el, eventName)));
})
// tslint:disable-next-line: only-arrow-functions
;
// tslint:disable-next-line: only-arrow-functions
/**
 * @param {?} opts
 * @return {?}
 */
function ProxyCmp(opts) {
    /** @type {?} */
    const decorator = (/**
     * @param {?} cls
     * @return {?}
     */
    function (cls) {
        if (opts.inputs) {
            proxyInputs(cls, opts.inputs);
        }
        if (opts.methods) {
            proxyMethods(cls, opts.methods);
        }
        return cls;
    });
    return decorator;
}
let KwsCondition = class KwsCondition {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
KwsCondition.decorators = [
    { type: Component, args: [{ selector: 'kws-condition', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['bgColor', 'condition', 'iconPaths'] },] },
];
/** @nocollapse */
KwsCondition.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
KwsCondition = __decorate([
    ProxyCmp({ inputs: ['bgColor', 'condition', 'iconPaths'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], KwsCondition);
let KwsDailyForecast = class KwsDailyForecast {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
KwsDailyForecast.decorators = [
    { type: Component, args: [{ selector: 'kws-daily-forecast', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['forecasts', 'iconPaths', 'scale'] },] },
];
/** @nocollapse */
KwsDailyForecast.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
KwsDailyForecast = __decorate([
    ProxyCmp({ inputs: ['forecasts', 'iconPaths', 'scale'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], KwsDailyForecast);
let KwsTemperature = class KwsTemperature {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
KwsTemperature.decorators = [
    { type: Component, args: [{ selector: 'kws-temperature', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['scale', 'temperature'] },] },
];
/** @nocollapse */
KwsTemperature.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
KwsTemperature = __decorate([
    ProxyCmp({ inputs: ['scale', 'temperature'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], KwsTemperature);
let KwsUvIndex = class KwsUvIndex {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
KwsUvIndex.decorators = [
    { type: Component, args: [{ selector: 'kws-uv-index', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['uvIndex'] },] },
];
/** @nocollapse */
KwsUvIndex.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
KwsUvIndex = __decorate([
    ProxyCmp({ inputs: ['uvIndex'] }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], KwsUvIndex);

/**
 * @fileoverview added by tsickle
 * Generated from: component-library-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
defineCustomElements(window);
/** @type {?} */
const DECLARATIONS = [KwsCondition, KwsDailyForecast, KwsTemperature, KwsUvIndex];
class ComponentLibraryModule {
}
ComponentLibraryModule.decorators = [
    { type: NgModule, args: [{
                declarations: DECLARATIONS,
                exports: DECLARATIONS,
                imports: [],
                providers: []
            },] },
];

export { ComponentLibraryModule, KwsCondition, KwsDailyForecast, KwsTemperature, KwsUvIndex, ProxyCmp, proxyInputs, proxyMethods, proxyOutputs };
