import { Component, Prop, Watch } from '@stencil/core';
import { ConditionIconPaths } from '../../models/condition-icon-paths';
import { Forecast } from '../../models/forecast';
import { WeatherCondition } from '../../services/weather-condition/weather-condition';

@Component({
  tag: 'kws-daily-forecast',
  styleUrl: 'kws-daily-forecast.css',
  shadow: true
})
export class KwsDailyForecast {
  @Prop() forecasts: Array<Forecast>;
  @Prop() iconPaths: ConditionIconPaths;
  @Prop() scale: string;

  private condition: number;
  private iconUrl: string;
  private weatherCondition: WeatherCondition;

  constructor() {
    this.weatherCondition = new WeatherCondition();
  }

  @Watch('forecasts')
  handleForcastsChange() {
    this.setCondition();
    this.setIconUrl();
  }

  private setCondition() {
    this.condition =
      this.forecasts &&
      this.weatherCondition.mostSeriousCondition(this.forecasts);
  }
  private setIconUrl() {
    this.iconUrl =
      this.condition &&
      this.iconPaths &&
      this.weatherCondition.imageUrl(this.condition, this.iconPaths);
  }

  render() {
    return (
      <div class="container">
        {this.iconUrl && (
          <div class="icon">
            <img src={this.iconUrl} />
          </div>
        )}
        <div class="description">
          <kws-condition condition={this.condition} />
          <div>
            Low:{' '}
            <kws-temperature
              temperature={this.weatherCondition.low(this.forecasts)}
              scale={this.scale}
            />
          </div>
          <div>
            High:{' '}
            <kws-temperature
              temperature={this.weatherCondition.high(this.forecasts)}
              scale={this.scale}
            />
          </div>
        </div>
      </div>
    );
  }
}
