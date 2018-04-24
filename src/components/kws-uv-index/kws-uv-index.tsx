import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'kws-uv-index',
  styleUrl: 'kws-uv-index.css',
  shadow: true
})
export class KwsUVIndex {
  @Prop() index: number;

  mainClass(): string {
    const d = this.description();
    switch (d) {
      case 'Low':
        return 'low-risk';

      case 'Moderate':
        return 'moderate-risk';

      case 'High':
        return 'high-risk';

      case 'Very High':
        return 'very-high-risk';

      case 'Extreme':
        return 'extreme-risk';

      default:
        if (d) {
          console.error(
            `kws-uv-index: unknown description ${this.description()}`
          );
        }
        break;
    }
  }

  description(): string {
    if (this.index || this.index === 0) {
      if (this.index < 3) {
        return 'Low';
      }

      if (this.index < 6) {
        return 'Moderate';
      }

      if (this.index < 8) {
        return 'High';
      }

      if (this.index < 11) {
        return 'Very High';
      }

      return 'Extreme';
    }
  }

  render() {
    return (
      <div class={this.mainClass()}>
        <div class="value">
          {this.index || this.index === 0 ? this.index.toFixed(1) : ''}
        </div>
        <div class="description">{this.description()}</div>
      </div>
    );
  }
}
