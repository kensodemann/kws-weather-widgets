import { Component, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'kws-temperature',
  styleUrl: 'kws-temperature.css',
  shadow: true
})
export class KwsTemperature {
  @Prop() temperature: number;
  @Prop() scale: string;

  @Watch('scale')
  logScale(newScale: string, oldScale: string) {
    console.log(`new: ${newScale}, old: ${oldScale}`);
  }

  private celcius(): string {
    return `${(this.temperature - 273.15).toFixed(0)} ℃`;
  }

  private fahrenheit(): string {
    return `${((this.temperature * 9) / 5 - 459.67).toFixed(0)} ℉`;
  }

  render() {
    if (this.temperature || this.temperature === 0) {
      return (
        <span>{this.scale === 'C' ? this.celcius() : this.fahrenheit()} using 0.16.0-6</span>
      );
    }
  }
}
