import { newSpecPage } from '@stencil/core/testing';
import { PfPhoneInput } from './index';

describe('pf-phone-input', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [PfPhoneInput],
      html: '<pf-phone-input></pf-phone-input>',
    });
    expect(root).toEqualHtml(`
      <pf-phone-input>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </pf-phone-input>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [PfPhoneInput],
      html: `<pf-phone-input first="Stencil" last="'Don't call me a framework' JS"></pf-phone-input>`,
    });
    expect(root).toEqualHtml(`
      <pf-phone-input first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </pf-phone-input>
    `);
  });
});
