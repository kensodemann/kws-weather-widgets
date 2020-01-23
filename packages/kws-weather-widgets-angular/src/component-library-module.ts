import { NgModule } from '@angular/core';
import { defineCustomElements } from 'kws-weather-widgets/loader';

import { KwsCondition, KwsDailyForecast, KwsTemperature, KwsUvIndex } from './directives/proxies';

defineCustomElements(window);

const DECLARATIONS = [KwsCondition, KwsDailyForecast, KwsTemperature, KwsUvIndex];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: []
})
export class ComponentLibraryModule {}
