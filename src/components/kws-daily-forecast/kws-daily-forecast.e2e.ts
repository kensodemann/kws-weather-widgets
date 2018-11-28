import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('kws-daily-forecast', () => {
  describe('without data', () => {
    it('renders', async () => {
      const page = await newE2EPage();

      await page.setContent('<kws-daily-forecast></kws-daily-forecast>');
      const conditionElement = await page.find(
        'kws-daily-forecast >>> kws-condition'
      );
      const label = conditionElement.shadowRoot.querySelector(
        '.condition-label'
      );
      const temperatureElements = await page.findAll(
        'kws-daily-forecast >>> kws-temperature'
      );
      expect(conditionElement).toHaveClass('hydrated');
      expect(temperatureElements.length).toEqual(2);
      expect(temperatureElements[0]).toHaveClass('hydrated');
      expect(temperatureElements[1]).toHaveClass('hydrated');
      expect(label.textContent).toEqual('Unknown');
    });
  });

  describe('with data', () => {
    let paths;
    let forecasts;
    let element: E2EElement;
    let page: E2EPage;

    beforeEach(async () => {
      paths = {
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

      forecasts = [
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
      page = await newE2EPage();
      await page.setContent('<kws-daily-forecast></kws-daily-forecast>');
      element = await page.find('kws-daily-forecast');
      element.setProperty('iconPaths', paths);
      element.setProperty('forecasts', forecasts);
      element.setProperty('scale', 'C');
      await page.waitForChanges();
    });

    it('displays the date', async () => {
      const dateElement = await page.find('kws-daily-forecast >>> .date');
      expect(dateElement.textContent).toEqual('Sun, Jun 17, 2018');
    });

    it('displays the icon for the worst condition', async () => {
      const imgElement = await page.find('kws-daily-forecast >>> img');
      expect(imgElement.getAttribute('src')).toEqual('./imgs/snow.png');
    });

    it('displays the label for the worst condition', async () => {
      const condition = await page.find('kws-daily-forecast >>> kws-condition');
      const label = condition.shadowRoot.querySelector('.condition-label');
      expect(label.textContent).toEqual('Snow');
    });

    it('displays the low temperature', async () => {
      const temperatureElements = await page.findAll('kws-daily-forecast >>> kws-temperature');
      const temp = temperatureElements[0].shadowRoot.querySelector('span');
      expect(temp.textContent).toEqual('-3 ℃');
    });

    it('displays the high temperature',async () => {
      const temperatureElements = await page.findAll('kws-daily-forecast >>> kws-temperature');
      const temp = temperatureElements[1].shadowRoot.querySelector('span');
      expect(temp.textContent).toEqual('24 ℃');
    });
  });
});
