import { Component, Prop } from '@stencil/core';
import { KwsConditionIconPaths } from './kws-condition-icon-paths';

@Component({
  tag: 'kws-condition',
  styleUrl: 'kws-condition.css',
  shadow: true
})
export class KwsCondition {
  @Prop() iconPaths: KwsConditionIconPaths;
  @Prop() condition: number;

  description(): string {
    if (this.condition >= 200 && this.condition < 230) {
      return 'Thunderstorms';
    }

    if (this.condition >= 230 && this.condition < 300) {
      return 'Scattered Storms';
    }

    if (this.condition >= 300 && this.condition < 400) {
      return 'Rain';
    }

    if (this.condition >= 500 && this.condition < 600) {
      return 'Showers';
    }

    if (
      (this.condition >= 600 && this.condition < 700) ||
      this.condition === 903
    ) {
      return 'Snow';
    }

    if (this.condition >= 701 && this.condition < 772) {
      return 'Fog';
    }

    if (this.condition === 800 || this.condition === 904) {
      return 'Sunny';
    }

    if (this.condition >= 801 && this.condition < 810) {
      return 'Cloudy';
    }

    return 'Unknown';
  }

  imageUrl(): string {
    switch (this.description()) {
      case 'Thunderstorms':
        return this.iconPaths && this.iconPaths.thunderStorm;
      case 'Scattered Storms':
        return this.iconPaths && this.iconPaths.sunnyThunderStorm;
      case 'Rain':
        return this.iconPaths && this.iconPaths.lightRain;
      case 'Showers':
        return this.iconPaths && this.iconPaths.shower;
      case 'Fog':
        return this.iconPaths && this.iconPaths.fog;
      case 'Snow':
        return this.iconPaths && this.iconPaths.snow;
      case 'Sunny':
        return this.iconPaths && this.iconPaths.sunny;
      case 'Cloudy':
        return this.iconPaths && this.iconPaths.cloudy;

      default:
        return this.iconPaths && this.iconPaths.unknown;
    }
  }

  render() {
    const url = this.imageUrl();
    return (
      <div>
        <div class="condition-image">
          {url && <img src={url} />}
        </div>
        <div class="condition-label">{this.description()}</div>
      </div>
    );
  }
}
