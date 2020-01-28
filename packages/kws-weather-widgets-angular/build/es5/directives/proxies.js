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
export var proxyInputs = (/**
 * @param {?} Cmp
 * @param {?} inputs
 * @return {?}
 */
function (Cmp, inputs) {
    /** @type {?} */
    var Prototype = Cmp.prototype;
    inputs.forEach((/**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        Object.defineProperty(Prototype, item, {
            get: /**
             * @return {?}
             */
            function () { return this.el[item]; },
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                var _this = this;
                this.z.runOutsideAngular((/**
                 * @return {?}
                 */
                function () { return (_this.el[item] = val); }));
            }
        });
    }));
});
/** @type {?} */
export var proxyMethods = (/**
 * @param {?} Cmp
 * @param {?} methods
 * @return {?}
 */
function (Cmp, methods) {
    /** @type {?} */
    var Prototype = Cmp.prototype;
    methods.forEach((/**
     * @param {?} methodName
     * @return {?}
     */
    function (methodName) {
        Prototype[methodName] = (/**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var args = arguments;
            return this.z.runOutsideAngular((/**
             * @return {?}
             */
            function () { return _this.el[methodName].apply(_this.el, args); }));
        });
    }));
});
/** @type {?} */
export var proxyOutputs = (/**
 * @param {?} instance
 * @param {?} el
 * @param {?} events
 * @return {?}
 */
function (instance, el, events) {
    events.forEach((/**
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) { return instance[eventName] = fromEvent(el, eventName); }));
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
    var decorator = (/**
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
var KwsCondition = /** @class */ (function () {
    function KwsCondition(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    KwsCondition.decorators = [
        { type: Component, args: [{ selector: 'kws-condition', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['bgColor', 'condition', 'iconPaths'] },] },
    ];
    /** @nocollapse */
    KwsCondition.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    KwsCondition = tslib_1.__decorate([
        ProxyCmp({ inputs: ['bgColor', 'condition', 'iconPaths'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], KwsCondition);
    return KwsCondition;
}());
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
var KwsDailyForecast = /** @class */ (function () {
    function KwsDailyForecast(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    KwsDailyForecast.decorators = [
        { type: Component, args: [{ selector: 'kws-daily-forecast', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['forecasts', 'iconPaths', 'scale'] },] },
    ];
    /** @nocollapse */
    KwsDailyForecast.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    KwsDailyForecast = tslib_1.__decorate([
        ProxyCmp({ inputs: ['forecasts', 'iconPaths', 'scale'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], KwsDailyForecast);
    return KwsDailyForecast;
}());
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
var KwsTemperature = /** @class */ (function () {
    function KwsTemperature(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    KwsTemperature.decorators = [
        { type: Component, args: [{ selector: 'kws-temperature', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['scale', 'temperature'] },] },
    ];
    /** @nocollapse */
    KwsTemperature.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    KwsTemperature = tslib_1.__decorate([
        ProxyCmp({ inputs: ['scale', 'temperature'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], KwsTemperature);
    return KwsTemperature;
}());
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
var KwsUvIndex = /** @class */ (function () {
    function KwsUvIndex(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    KwsUvIndex.decorators = [
        { type: Component, args: [{ selector: 'kws-uv-index', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['uvIndex'] },] },
    ];
    /** @nocollapse */
    KwsUvIndex.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    KwsUvIndex = tslib_1.__decorate([
        ProxyCmp({ inputs: ['uvIndex'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], KwsUvIndex);
    return KwsUvIndex;
}());
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
