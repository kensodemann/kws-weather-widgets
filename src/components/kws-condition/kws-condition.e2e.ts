import { newE2EPage } from '@stencil/core/testing';

describe('kws-condition', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<kws-condition></kws-condition>');
    const element = await page.find('kws-condition');
    expect(element).toHaveClass('hydrated');
  });
});
