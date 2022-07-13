import { Component, h, Element, Prop, Host, State, Watch } from '@stencil/core';
import { MODE } from '../../utils/types';
import { v4 as uuidv4 } from 'uuid';

export type BUTTON_TYPES = 'submit' | 'button' | 'reset';

@Component({
  tag: 'pf-checkbox',
  styleUrls: {
    bs4: 'bs4.scss',
    bs5: 'bs5.scss',
  },
  shadow: true,
})
export class Checkbox {
  @State() ID: string;

  @Element() el: HTMLElement;
  @Prop() class: string = '';
  @Prop({ reflect: true, mutable: true }) mode: MODE;
  @Prop({ reflect: true, mutable: true }) disabled: boolean = false;
  @Prop({ reflect: true, mutable: true }) block: boolean = false;
  @Prop({ reflect: true, mutable: true }) switchable: boolean = false;
  @Prop({ reflect: true, mutable: true }) checked: boolean = false;
  @Prop({ reflect: true, mutable: true }) value: string = '';

  @Watch('mode')
  watchMode(value) {
    console.log('Checkbox', value);
  }

  handleOnChange(e) {
    this.checked = e.target.checked;
    e.preventDefault();
    e.stopPropagation();
    this.el.dispatchEvent(new e.constructor(e.type, e));
  }

  componentWillLoad() {
    this.ID = uuidv4();
    console.log('Checkbox', this.mode);
  }

  render() {
    return (
      <Host
        style={{ width: this.block ? '100%' : 'inherit', display: 'block' }}
      >
        <div
          class={{
            [this.class]: true,
            'form-check': true,
            'form-switch': this.switchable,
          }}
        >
          <input
            class="form-check-input"
            type="checkbox"
            id={this.ID}
            disabled={this.disabled}
            checked={this.checked}
            onChange={this.handleOnChange.bind(this)}
            value={this.value}
          />
          <label class="form-check-label" htmlFor={this.ID}>
            <slot />
          </label>
        </div>
      </Host>
    );
  }
}
