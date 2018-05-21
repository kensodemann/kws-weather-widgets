import { TestWindow } from '@stencil/core/testing';
import { KwsCondition } from '../kws-condition/kws-condition';
import { KwsDailyForecast } from './kws-daily-forecast';
import { KwsTemperature } from '../kws-temperature/kws-temperature';

describe('kws-condition', () => {
  it('should build', () => {
    expect(new KwsDailyForecast()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLKwsDailyForecastElement;
    let window: TestWindow;
    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [KwsCondition, KwsDailyForecast, KwsTemperature],
        html: '<kws-daily-forecast></kws-daily-forecast>'
      });
    });

    it('works without parameters', () => {
      const condEls = element.getElementsByTagName('kws-condition');
      expect(condEls.length).toEqual(1);
      const tempEls = element.getElementsByTagName('kws-temperature');
      expect(tempEls.length).toEqual(2);
    });

    describe('with parameters', () => {
      beforeEach(async () => {
        const paths = {
          sunny: './imgs/sunny.png',
          cloudy: './imgs/cloudy.png',
          lightRain: './imgs/rain.png',
          shower: './imgs/shower.png',
          sunnyThunderStorm: './imgs/partial-tstorm.png',
          thunderStorm: './imgs/tstorm.png',
          fog: './imgs/fog.png',
          snow: './imgs/snow.png',
          unknown: './imgs/unknown.png'
        };
        const forecasts = [
          {
            date: new Date(2018, 5, 17, 10, 0, 0),
            condition: 800,
            temperature: 287.15
          },
          {
            date: new Date(2018, 5, 17, 11, 0, 0),
            condition: 800,
            temperature: 286.65
          },
          {
            date: new Date(2018, 5, 17, 13, 0, 0),
            condition: 801,
            temperature: 289.65
          },
          {
            date: new Date(2018, 5, 17, 14, 45, 0),
            condition: 801,
            temperature: 290.65
          },
          {
            date: new Date(2018, 5, 17, 15, 0, 0),
            condition: 801,
            temperature: 295.15
          },
          {
            date: new Date(2018, 5, 17, 17, 0, 0),
            condition: 305,
            temperature: 297.15
          },
          {
            date: new Date(2018, 5, 17, 19, 0, 0),
            condition: 600,
            temperature: 270.0
          },
          {
            date: new Date(2018, 5, 17, 20, 0, 0),
            condition: 800,
            temperature: 293.65
          },
          {
            date: new Date(2018, 5, 17, 23, 0, 0),
            condition: 800,
            temperature: 288.65
          }
        ];
        element.iconPaths = paths;
        element.forecasts = forecasts;
        element.scale = 'C';
        await window.flush();
      });

      it('displays the icon for the worst condition', () => {
        const els = element.getElementsByClassName('icon');
        const imgs = els[0].getElementsByTagName('img');
        expect(imgs[0].src).toEqual('http://testwindow.stenciljs.com/imgs/snow.png');
      });

      it('displays the date', () => {
        const els = element.getElementsByClassName('date');
        expect(els[0].textContent).toEqual('Sun, Jun 17, 2018');
      });

      it('displays the label for the worst condition', () => {
        const els = element.getElementsByTagName('kws-condition');
        expect(els[0].textContent).toEqual('Snow');
      });

      it('displays the low temperature', () => {
        const els = element.getElementsByTagName('kws-temperature');
        expect(els[0].textContent).toEqual('-3 ℃');
      });

      it('displays the high temperature', () => {
        const els = element.getElementsByTagName('kws-temperature');
        expect(els[1].textContent).toEqual('24 ℃');
      });
    });
  });
});
