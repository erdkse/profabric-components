import { newSpecPage } from '@stencil/core/testing';
import { PfDropdown } from './index';

describe('pf-dropdown', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [PfDropdown],
      html: '<pf-dropdown></pf-dropdown>',
    });
    expect(root).toEqualHtml(`
      <pf-dropdown>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </pf-dropdown>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [PfDropdown],
      html: `<pf-dropdown first="Stencil" last="'Don't call me a framework' JS"></pf-dropdown>`,
    });
    expect(root).toEqualHtml(`
      <pf-dropdown first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </pf-dropdown>
    `);
  });
});
