/**
 * @fileoverview added by tsickle
 * Generated from: directives/proxies.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { fromEvent } from 'rxjs';
/** @type {?} */
export const proxyInputs = (/**
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
export const proxyMethods = (/**
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
export const proxyOutputs = (/**
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
export function ProxyCmp(opts) {
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
KwsCondition = tslib_1.__decorate([
    ProxyCmp({ inputs: ['bgColor', 'condition', 'iconPaths'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], KwsCondition);
export { KwsCondition };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    KwsCondition.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    KwsCondition.prototype.z;
}
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
KwsDailyForecast = tslib_1.__decorate([
    ProxyCmp({ inputs: ['forecasts', 'iconPaths', 'scale'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], KwsDailyForecast);
export { KwsDailyForecast };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    KwsDailyForecast.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    KwsDailyForecast.prototype.z;
}
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
KwsTemperature = tslib_1.__decorate([
    ProxyCmp({ inputs: ['scale', 'temperature'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], KwsTemperature);
export { KwsTemperature };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    KwsTemperature.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    KwsTemperature.prototype.z;
}
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
KwsUvIndex = tslib_1.__decorate([
    ProxyCmp({ inputs: ['uvIndex'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], KwsUvIndex);
export { KwsUvIndex };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    KwsUvIndex.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    KwsUvIndex.prototype.z;
}
