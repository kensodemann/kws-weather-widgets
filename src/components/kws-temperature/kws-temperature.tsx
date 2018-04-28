import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'kws-temperature',
  styleUrl: 'kws-temperature.css',
  shadow: true
})
export class KwsTemperature {
  @Prop() temperature: number;
  @Prop() scale: string;

  celcius(kelvin: number): string {
    if (kelvin || kelvin === 0) {
      return (kelvin - 273.15).toFixed(0);
    }
  }

  fahrenheit(kelvin: number): string {
    if (kelvin || kelvin === 0) {
      return ((kelvin * 9 / 5) - 459.67).toFixed(0);
    }
  }

  render() {
    return (
      <span>
        {this.scale === 'C'
          ? this.celcius(this.temperature)
          : this.fahrenheit(this.temperature)}{' '}
        {this.scale === 'C' ? '℃' : '℉'}
      </span>
    );
  }
}
