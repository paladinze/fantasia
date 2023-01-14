import { newSpecPage } from '@stencil/core/testing';
import { FtModal } from '../ft-modal';

describe('ft-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FtModal],
      html: `<ft-modal></ft-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <ft-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ft-modal>
    `);
  });
});
