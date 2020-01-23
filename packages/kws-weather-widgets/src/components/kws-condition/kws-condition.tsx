import { Component, h, Prop } from '@stencil/core';
import { ConditionIconPaths } from '../../models/condition-icon-paths';
import { WeatherCondition } from '../../services/weather-condition/weather-condition';

@Component({
  tag: 'kws-condition',
  styleUrl: 'kws-condition.css',
  shadow: true
})
export class KwsCondition {
  @Prop() iconPaths: ConditionIconPaths;
  @Prop() condition: number;
  @Prop() bgColor: string;
  private weatherCondition: WeatherCondition;

  getBackgroundStyle() {
    return this.bgColor && this.bgColor !== 'white' ? { 'background': this.bgColor, '--kws-font-color': 'white' } : {};
  }

  constructor() {
    this.weatherCondition = new WeatherCondition();
  }

  render() {
    const url = this.weatherCondition.imageUrl(this.condition, this.iconPaths);
    return (
      <div style={this.getBackgroundStyle()}>
        <div class="condition-image">{url && <img src={url} />}</div>
        <div class="condition-label">
          {this.weatherCondition.description(this.condition)}
        </div>
      </div>
    );
  }
}
