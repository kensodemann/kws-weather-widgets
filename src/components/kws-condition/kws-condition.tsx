import { Component, Prop } from '@stencil/core';
import { ConditionIconPaths } from '../../models/condition-icon-paths';
import { WeatherCondition } from '../../services/weather-condition/weather-condition';

@Component({
  tag: 'kws-condition',
  styleUrl: 'kws-condition.css'
})
export class KwsCondition {
  @Prop() iconPaths: ConditionIconPaths;
  @Prop() condition: number;
  private weatherCondition: WeatherCondition;

  constructor() {
    this.weatherCondition = new WeatherCondition();
  }

  render() {
    const url = this.weatherCondition.imageUrl(this.condition, this.iconPaths);
    return (
      <div>
        <div class="condition-image">{url && <img src={url} />}</div>
        <div class="condition-label">
          {this.weatherCondition.description(this.condition)}
        </div>
      </div>
    );
  }
}
