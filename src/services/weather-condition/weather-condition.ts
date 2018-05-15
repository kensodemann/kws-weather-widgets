import { ConditionIconPaths } from '../../models/condition-icon-paths';
import { Forecast } from '../../models/forecast';

export class WeatherCondition {
  private sunny = 1;
  private cloudy = 10;
  private lightRain = 20;
  private shower = 30;
  private fog = 40;
  private sunnyThunderStorm = 50;
  private thunderStorm = 60;
  private snow = 70;

  rank(condition: number): number {
    console.log(`ranking conditition: ${condition}`);
    const cond = condition ? parseInt(condition.toString()) : 0;
    if (cond >= 200 && cond < 230) {
      console.log('Thunderstorm');
      return this.thunderStorm;
    }

    if (cond >= 230 && cond < 300) {
      console.log('partial t-storms');
      return this.sunnyThunderStorm;
    }

    if (cond >= 300 && cond < 400) {
      console.log('light rain');
      return this.lightRain;
    }

    if (cond >= 500 && cond < 600) {
      console.log('shower');
      return this.shower;
    }

    if ((cond >= 600 && cond < 700) || cond === 903) {
      console.log('snow');
      return this.snow;
    }

    if (cond >= 701 && cond < 772) {
      console.log('fog');
      return this.fog;
    }

    if (cond === 800 || cond === 904) {
      console.log('sunny');
      return this.sunny;
    }

    if (cond >= 801 && cond < 810) {
      console.log('cloudy');
      return this.cloudy;
    }

    return 0;
  }

  description(condition: number): string {
    console.log(`getting description for conditition: ${condition}`);
    switch (this.rank(condition)) {
      case this.sunny:
        return 'Sunny';
      case this.cloudy:
        return 'Cloudy';
      case this.lightRain:
        return 'Rain';
      case this.shower:
        return 'Showers';
      case this.fog:
        return 'Fog';
      case this.sunnyThunderStorm:
        return 'Scattered Storms';
      case this.thunderStorm:
        return 'Thunderstorms';
      case this.snow:
        return 'Snow';

      default:
        return 'Unknown';
    }
  }

  imageUrl(condition: number, paths: ConditionIconPaths): string {
    if (!paths) {
      return null;
    }

    switch (this.rank(condition)) {
      case this.sunny:
        return paths.sunny;
      case this.cloudy:
        return paths.cloudy;
      case this.lightRain:
        return paths.lightRain;
      case this.shower:
        return paths.shower;
      case this.fog:
        return paths.fog;
      case this.sunnyThunderStorm:
        return paths.sunnyThunderStorm;
      case this.thunderStorm:
        return paths.thunderStorm;
      case this.snow:
        return paths.snow;

      default:
        return paths.unknown;
    }
  }

  high(forecasts: Array<Forecast>): number {
    let value: number;
    if (forecasts) {
      forecasts.forEach(
        forecast =>
          (value =
            forecast.temperature > (value || 0) ? forecast.temperature : value)
      );
    }
    return value;
  }

  low(forecasts: Array<Forecast>): number {
    let value: number;
    if (forecasts) {
      forecasts.forEach(
        forecast =>
          (value =
            forecast.temperature < value || !value
              ? forecast.temperature
              : value)
      );
    }
    return value;
  }

  mostSeriousCondition(forecasts: Array<Forecast>): number {
    let value: number;
    if (forecasts) {
      forecasts.forEach(
        forecast =>
          (value =
            this.rank(forecast.condition) > this.rank(value)
              ? forecast.condition
              : value)
      );
    }
    return value;
  }
}
