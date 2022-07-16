import { newE2EPage } from '@stencil/core/testing';

describe('pf-phone-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<pf-phone-input></pf-phone-input>');
    const element = await page.find('pf-phone-input');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<pf-phone-input></pf-phone-input>');
    const component = await page.find('pf-phone-input');
    const element = await page.find('pf-phone-input >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
