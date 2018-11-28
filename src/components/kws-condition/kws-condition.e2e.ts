import { newE2EPage } from '@stencil/core/testing';

describe('kws-condition', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<kws-condition></kws-condition>');
    const element = await page.find('kws-condition');
    const label = await page.find('kws-condition >>> .condition-label');
    expect(element).toHaveClass('hydrated');
    expect(label.textContent).toEqual('Unknown');
  });

  it('does not render an image if there is no image map', async () => {
    const page = await newE2EPage();

    await page.setContent('<kws-condition></kws-condition>');
    const element = await page.find('kws-condition');

    element.setProperty('condition', 200);
    await page.waitForChanges();
    const img = await page.find('kws-condition >>> img');
    expect(img).toBeFalsy();
  });

  it('renders the correct icon for the condition', async () => {
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

    const page = await newE2EPage();

    await page.setContent('<kws-condition></kws-condition>');
    const element = await page.find('kws-condition');

    element.setProperty('iconPaths', paths);
    element.setProperty('condition', 200);
    await page.waitForChanges();
    const img = await page.find('kws-condition >>> img');
    expect(img.getAttribute('src')).toEqual(paths.thunderStorm);

    element.setProperty('condition', 229);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.thunderStorm);

    element.setProperty('condition', 230);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.sunnyThunderStorm);

    element.setProperty('condition', 299);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.sunnyThunderStorm);

    element.setProperty('condition', 300);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.lightRain);

    element.setProperty('condition', 399);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.lightRain);

    element.setProperty('condition', 500);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.shower);

    element.setProperty('condition', 599);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.shower);

    element.setProperty('condition', 600);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.snow);

    element.setProperty('condition', 699);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.snow);

    element.setProperty('condition', 701);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.fog);

    element.setProperty('condition', 771);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.fog);

    element.setProperty('condition', 800);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.sunny);

    element.setProperty('condition', 801);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.cloudy);

    element.setProperty('condition', 809);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.cloudy);

    element.setProperty('condition', 810);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.unknown);

    element.setProperty('condition', 903);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.snow);

    element.setProperty('condition', 904);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.sunny);
  });

  it('renders the correct icon for the condition', async () => {
    const page = await newE2EPage();

    await page.setContent('<kws-condition></kws-condition>');
    const element = await page.find('kws-condition');

    element.setProperty('condition', 200);
    await page.waitForChanges();
    const label = await page.find('kws-condition >>> .condition-label');
    expect(label.textContent).toEqual('Thunderstorms');

    element.setProperty('condition', 229);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Thunderstorms');

    element.setProperty('condition', 230);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Scattered Storms');

    element.setProperty('condition', 299);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Scattered Storms');

    element.setProperty('condition', 300);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Rain');

    element.setProperty('condition', 399);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Rain');

    element.setProperty('condition', 500);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Showers');

    element.setProperty('condition', 599);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Showers');

    element.setProperty('condition', 600);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Snow');

    element.setProperty('condition', 699);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Snow');

    element.setProperty('condition', 701);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Fog');

    element.setProperty('condition', 771);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Fog');

    element.setProperty('condition', 800);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Sunny');

    element.setProperty('condition', 801);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Cloudy');

    element.setProperty('condition', 809);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Cloudy');

    element.setProperty('condition', 810);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Unknown');

    element.setProperty('condition', 903);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Snow');

    element.setProperty('condition', 904);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Sunny');
  });
});
