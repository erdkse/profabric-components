import { Component, h, Element, Prop, Host, Listen } from '@stencil/core';
import { MODES, SIZES, THEMES } from '../../utils/types';
import { getGlobalStyles } from '../../utils/utils';

export type BUTTON_TYPES = 'submit' | 'button' | 'reset';

@Component({
  tag: 'pf-button',
  styleUrls: {
    bs4: 'index.scss',
    bs5: 'index.scss',
  },
  shadow: true,
})
export class Button {
  @Element() el: HTMLElement;
  @Prop() theme: THEMES | string = 'primary';
  @Prop() size: SIZES = 'default';
  @Prop({ reflect: true }) mode: MODES;
  @Prop({ reflect: true, mutable: true }) type: BUTTON_TYPES = 'button';
  @Prop() class: string = '';
  @Prop() disabled: boolean = false;
  @Prop() loading: boolean = false;
  @Prop() block: boolean = false;
  @Listen('click', { capture: true })
  onClick(event: Event) {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    const form = this.el.closest('form');
    if (form) {
      event.preventDefault();
      const fakeSubmit = document.createElement('button');
      fakeSubmit.type = 'submit';
      fakeSubmit.style.display = 'none';
      form.appendChild(fakeSubmit);
      fakeSubmit.click();
      fakeSubmit.remove();
    }
  }

  componentWillLoad() {
    this.el.shadowRoot.appendChild(getGlobalStyles());
  }

  render() {
    let innerTemplate = <slot />;

    if (this.loading) {
      innerTemplate = (
        <div class="d-flex justify-content-center align-items-center">
          <span>&nbsp;</span>
          <div class="spinner-border spinner-border-sm" role="status">
            <span
              class={{
                'visually-hidden': this.mode === 'bs5',
                'sr-only': this.mode === 'bs4',
              }}
            >
              Loading...
            </span>
          </div>
        </div>
      );
    }
    return (
      <Host style={{ width: this.block ? '100%' : 'inherit' }}>
        <button
          type={this.type}
          class={{
            btn: true,
            [`btn-${this.theme}`]: true,
            'btn-sm': this.size === 'small',
            'btn-lg': this.size === 'large',
          }}
          disabled={this.disabled || this.loading}
          style={{ width: this.block ? '100%' : 'inherit' }}
        >
          {innerTemplate}
        </button>
      </Host>
    );
  }
}
