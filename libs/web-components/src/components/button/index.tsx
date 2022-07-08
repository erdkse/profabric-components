import {
  Component,
  h,
  Element,
  Prop,
  Host,
  Listen,
  Watch,
  State,
} from '@stencil/core';
import { MODES, SIZES, THEMES } from '../../utils/types';

export type BUTTON_TYPES = 'submit' | 'button' | 'reset';

@Component({
  tag: 'pf-button',
  styleUrls: {
    bs4: 'bs4.scss',
    bs5: 'bs5.scss',
  },
  shadow: true,
})
export class Button {
  @State() tempDisabled: boolean = false;
  @Element() el: HTMLElement;
  @Prop({ reflect: true, mutable: true }) theme: THEMES | string = 'primary';
  @Prop({ reflect: true, mutable: true }) size: SIZES = 'default';
  @Prop({ reflect: true, mutable: true }) mode: MODES;
  @Prop({ reflect: true, mutable: true }) type: BUTTON_TYPES = 'button';
  @Prop({ reflect: true, mutable: true }) class: string = '';
  @Prop({ reflect: true, mutable: true }) loading: boolean = false;
  @Prop({ reflect: true, mutable: true }) disabled: boolean = false;
  @Prop({ reflect: true, mutable: true }) block: boolean = false;

  @Watch('loading')
  watchLoading(currentValue: boolean) {
    if (currentValue) {
      this.tempDisabled = this.disabled;
      this.disabled = true;
    } else {
      this.disabled = this.tempDisabled;
    }
  }

  @Listen('click', { capture: true })
  onClick(event: Event) {
    if (this.disabled) {
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
    if (this.loading) {
      this.tempDisabled = this.disabled;
      this.disabled = true;
    } else {
      this.disabled = this.tempDisabled;
    }
  }

  render() {
    let innerTemplate = <slot />;

    if (this.loading) {
      innerTemplate = (
        <div
          class="center-items"
          style={{ padding: this.size === 'large' ? '3px 0' : '0' }}
        >
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
        style={{ width: this.block ? '100%' : 'inherit', display: 'block' }}
      >
        <button
          type={this.type}
          class={{
            btn: true,
            [`btn-${this.theme}`]: true,
            'btn-sm': this.size === 'small',
            'btn-lg': this.size === 'large',
            disabled: this.disabled,
          }}
          style={{ width: this.block ? '100%' : 'inherit' }}
          disabled={this.disabled}
        >
          {innerTemplate}
        </button>
      </Host>
    );
  }
}
