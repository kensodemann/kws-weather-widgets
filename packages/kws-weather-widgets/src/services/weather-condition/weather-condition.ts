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
    if (condition >= 200 && condition < 230) {
      return this.thunderStorm;
    }

    if (condition >= 230 && condition < 300) {
      return this.sunnyThunderStorm;
    }

    if (condition >= 300 && condition < 400) {
      return this.lightRain;
    }

    if (condition >= 500 && condition < 600) {
      return this.shower;
    }

    if ((condition >= 600 && condition < 700) || condition === 903) {
      return this.snow;
    }

    if (condition >= 701 && condition < 772) {
      return this.fog;
    }

    if (condition === 800 || condition === 904) {
      return this.sunny;
    }

    if (condition >= 801 && condition < 810) {
      return this.cloudy;
    }

    return 0;
  }

  description(condition: number): string {
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
