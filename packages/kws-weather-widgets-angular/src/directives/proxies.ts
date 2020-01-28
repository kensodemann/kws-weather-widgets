/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { fromEvent } from 'rxjs';

export const proxyInputs = (Cmp: any, inputs: string[]) => {
  const Prototype = Cmp.prototype;
  inputs.forEach(item => {
    Object.defineProperty(Prototype, item, {
      get() { return this.el[item]; },
      set(val: any) { this.z.runOutsideAngular(() => (this.el[item] = val)); }
    });
  });
};

export const proxyMethods = (Cmp: any, methods: string[]) => {
  const Prototype = Cmp.prototype;
  methods.forEach(methodName => {
    Prototype[methodName] = function () {
      const args = arguments;
      return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
    };
  });
};

export const proxyOutputs = (instance: any, el: any, events: string[]) => {
  events.forEach(eventName => instance[eventName] = fromEvent(el, eventName));
}

// tslint:disable-next-line: only-arrow-functions
export function ProxyCmp(opts: { inputs?: any; methods?: any }) {
  const decorator =  function(cls: any){
    if (opts.inputs) {
      proxyInputs(cls, opts.inputs);
    }
    if (opts.methods) {
      proxyMethods(cls, opts.methods);
    }
    return cls;
  };
  return decorator;
}

import { Components } from 'kws-weather-widgets'

export declare interface KwsCondition extends Components.KwsCondition {}
@ProxyCmp({inputs: ['bgColor', 'condition', 'iconPaths']})
@Component({ selector: 'kws-condition', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['bgColor', 'condition', 'iconPaths'] })
export class KwsCondition {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface KwsDailyForecast extends Components.KwsDailyForecast {}
@ProxyCmp({inputs: ['forecasts', 'iconPaths', 'scale']})
@Component({ selector: 'kws-daily-forecast', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['forecasts', 'iconPaths', 'scale'] })
export class KwsDailyForecast {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface KwsTemperature extends Components.KwsTemperature {}
@ProxyCmp({inputs: ['scale', 'temperature']})
@Component({ selector: 'kws-temperature', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['scale', 'temperature'] })
export class KwsTemperature {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface KwsUvIndex extends Components.KwsUvIndex {}
@ProxyCmp({inputs: ['uvIndex']})
@Component({ selector: 'kws-uv-index', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['uvIndex'] })
export class KwsUvIndex {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
