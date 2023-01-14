import { newE2EPage } from '@stencil/core/testing';

describe('ft-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ft-modal></ft-modal>');

    const element = await page.find('ft-modal');
    expect(element).toHaveClass('hydrated');
  });
});
