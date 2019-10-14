/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  ConditionIconPaths,
} from './models/condition-icon-paths';
import {
  Forecast,
} from './models/forecast';

export namespace Components {
  interface KwsCondition {
    'bgColor': string;
    'condition': number;
    'iconPaths': ConditionIconPaths;
  }
  interface KwsDailyForecast {
    'forecasts': Array<Forecast>;
    'iconPaths': ConditionIconPaths;
    'scale': string;
  }
  interface KwsTemperature {
    'scale': string;
    'temperature': number;
  }
  interface KwsUvIndex {
    'uvIndex': number;
  }
}

declare global {


  interface HTMLKwsConditionElement extends Components.KwsCondition, HTMLStencilElement {}
  var HTMLKwsConditionElement: {
    prototype: HTMLKwsConditionElement;
    new (): HTMLKwsConditionElement;
  };

  interface HTMLKwsDailyForecastElement extends Components.KwsDailyForecast, HTMLStencilElement {}
  var HTMLKwsDailyForecastElement: {
    prototype: HTMLKwsDailyForecastElement;
    new (): HTMLKwsDailyForecastElement;
  };

  interface HTMLKwsTemperatureElement extends Components.KwsTemperature, HTMLStencilElement {}
  var HTMLKwsTemperatureElement: {
    prototype: HTMLKwsTemperatureElement;
    new (): HTMLKwsTemperatureElement;
  };

  interface HTMLKwsUvIndexElement extends Components.KwsUvIndex, HTMLStencilElement {}
  var HTMLKwsUvIndexElement: {
    prototype: HTMLKwsUvIndexElement;
    new (): HTMLKwsUvIndexElement;
  };
  interface HTMLElementTagNameMap {
    'kws-condition': HTMLKwsConditionElement;
    'kws-daily-forecast': HTMLKwsDailyForecastElement;
    'kws-temperature': HTMLKwsTemperatureElement;
    'kws-uv-index': HTMLKwsUvIndexElement;
  }
}

declare namespace LocalJSX {
  interface KwsCondition {
    'bgColor'?: string;
    'condition'?: number;
    'iconPaths'?: ConditionIconPaths;
  }
  interface KwsDailyForecast {
    'forecasts'?: Array<Forecast>;
    'iconPaths'?: ConditionIconPaths;
    'scale'?: string;
  }
  interface KwsTemperature {
    'scale'?: string;
    'temperature'?: number;
  }
  interface KwsUvIndex {
    'uvIndex'?: number;
  }

  interface IntrinsicElements {
    'kws-condition': KwsCondition;
    'kws-daily-forecast': KwsDailyForecast;
    'kws-temperature': KwsTemperature;
    'kws-uv-index': KwsUvIndex;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'kws-condition': LocalJSX.KwsCondition & JSXBase.HTMLAttributes<HTMLKwsConditionElement>;
      'kws-daily-forecast': LocalJSX.KwsDailyForecast & JSXBase.HTMLAttributes<HTMLKwsDailyForecastElement>;
      'kws-temperature': LocalJSX.KwsTemperature & JSXBase.HTMLAttributes<HTMLKwsTemperatureElement>;
      'kws-uv-index': LocalJSX.KwsUvIndex & JSXBase.HTMLAttributes<HTMLKwsUvIndexElement>;
    }
  }
}


