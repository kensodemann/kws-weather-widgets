import { ChangeDetectorRef, ElementRef, NgZone } from '@angular/core';
export declare const proxyInputs: (Cmp: any, inputs: string[]) => void;
export declare const proxyMethods: (Cmp: any, methods: string[]) => void;
export declare const proxyOutputs: (instance: any, el: any, events: string[]) => void;
export declare function ProxyCmp(opts: {
    inputs?: any;
    methods?: any;
}): (cls: any) => any;
import { Components } from 'kws-weather-widgets';
export declare interface KwsCondition extends Components.KwsCondition {
}
export declare class KwsCondition {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface KwsDailyForecast extends Components.KwsDailyForecast {
}
export declare class KwsDailyForecast {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface KwsTemperature extends Components.KwsTemperature {
}
export declare class KwsTemperature {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface KwsUvIndex extends Components.KwsUvIndex {
}
export declare class KwsUvIndex {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
