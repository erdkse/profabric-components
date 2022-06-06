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
  @Prop({ reflect: true, mutable: true }) theme: THEMES | string = 'primary';
  @Prop({ reflect: true, mutable: true }) size: SIZES = 'default';
  @Prop({ reflect: true, mutable: true }) mode: MODES;
  @Prop({ reflect: true, mutable: true }) type: BUTTON_TYPES = 'button';
  @Prop({ reflect: true, mutable: true }) class: string = '';
  @Prop({ reflect: true, mutable: true }) disabled: boolean = false;
  @Prop({ reflect: true, mutable: true }) loading: boolean = false;
  @Prop({ reflect: true, mutable: true }) block: boolean = false;
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
      <Host
        style={{
          width: this.block ? '100%' : 'inherit',
          display: 'block',
          pointerEvents:
            this.disabled || this.loading ? 'none !important' : 'inherit',
          cursor:
            this.disabled || this.loading
              ? 'not-allowed !important'
              : 'inherit',
        }}
      >
        <button
          type={this.type}
          class={{
            btn: true,
            [`btn-${this.theme}`]: true,
            'btn-sm': this.size === 'small',
            'btn-lg': this.size === 'large',
          }}
          disabled={this.disabled || this.loading}
          style={{
            width: this.block ? '100%' : 'inherit',
            pointerEvents:
              this.disabled || this.loading ? 'none !important' : 'inherit',
            cursor:
              this.disabled || this.loading
                ? 'not-allowed !important'
                : 'inherit',
          }}
        >
          {innerTemplate}
        </button>
      </Host>
    );
  }
}
