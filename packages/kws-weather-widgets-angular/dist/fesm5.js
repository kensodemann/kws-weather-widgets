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
var proxyInputs = (/**
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
var proxyMethods = (/**
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
var proxyOutputs = (/**
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
function ProxyCmp(opts) {
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
    KwsCondition = __decorate([
        ProxyCmp({ inputs: ['bgColor', 'condition', 'iconPaths'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], KwsCondition);
    return KwsCondition;
}());
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
    KwsDailyForecast = __decorate([
        ProxyCmp({ inputs: ['forecasts', 'iconPaths', 'scale'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], KwsDailyForecast);
    return KwsDailyForecast;
}());
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
    KwsTemperature = __decorate([
        ProxyCmp({ inputs: ['scale', 'temperature'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], KwsTemperature);
    return KwsTemperature;
}());
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
    KwsUvIndex = __decorate([
        ProxyCmp({ inputs: ['uvIndex'] }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], KwsUvIndex);
    return KwsUvIndex;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: component-library-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
defineCustomElements(window);
/** @type {?} */
var DECLARATIONS = [KwsCondition, KwsDailyForecast, KwsTemperature, KwsUvIndex];
var ComponentLibraryModule = /** @class */ (function () {
    function ComponentLibraryModule() {
    }
    ComponentLibraryModule.decorators = [
        { type: NgModule, args: [{
                    declarations: DECLARATIONS,
                    exports: DECLARATIONS,
                    imports: [],
                    providers: []
                },] },
    ];
    return ComponentLibraryModule;
}());

export { ComponentLibraryModule, KwsCondition, KwsDailyForecast, KwsTemperature, KwsUvIndex, ProxyCmp, proxyInputs, proxyMethods, proxyOutputs };
