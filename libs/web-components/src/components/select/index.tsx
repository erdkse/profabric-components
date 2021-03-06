import { Component, h, Element, Prop, Host, State, Watch } from '@stencil/core';
import { MODE, SIZE } from '../../utils/types';
import { v4 as uuidv4 } from 'uuid';

export type Option = {
  value: string;
  label: string;
};

@Component({
  tag: 'pf-select',
  styleUrls: {
    bs4: 'bs4.scss',
    bs5: 'bs5.scss',
  },
  shadow: true,
})
export class Select {
  @State() ID: string;
  @Element() el: HTMLElement;
  @Prop({ reflect: true, mutable: true }) size: SIZE = 'default';
  @Prop({ reflect: true, mutable: true }) label: string = null;
  @Prop({ reflect: true, mutable: true }) type: string;
  @Prop({ reflect: true, mutable: true }) mode: MODE;
  @Prop({ reflect: true, mutable: true }) disabled: boolean = false;
  @Prop({ reflect: true, mutable: true }) block: boolean = false;
  @Prop({ reflect: true, mutable: true }) options: Array<Option> = [];
  @Prop({ reflect: true, mutable: true }) value: string;

  @Watch('options')
  watchOptions(newValue: Array<Option>, _oldValue: Array<Option>) {
    if (newValue.length === _oldValue.length) {
      return;
    }

    this.options = newValue.map((o: Option) => ({
      ...o,
      value: o.value || '',
    }));
  }

  @Watch('value')
  watchValue(newValue: string, _oldValue: string) {
    if (newValue === '') {
      return;
    }

    if (newValue === this.value) {
      return;
    }

    if (!newValue) {
      this.value = '';
    } else {
      this.value = newValue;
    }
  }

  handleOnChange(e) {
    this.value = e.target.value;
    e.preventDefault();
    e.stopPropagation();
    this.el.dispatchEvent(new e.constructor(e.type, e));
  }

  componentWillLoad() {
    this.ID = uuidv4();
    this.watchOptions(this.options, []);
    this.watchValue(this.value, null);
  }

  render() {
    return (
      <Host
        style={{ width: this.block ? '100%' : 'inherit', display: 'block' }}
        disabled={this.disabled}
        value={this.value}
      >
        <div class={{ 'form-group': true }}>
          <label
            htmlFor={this.ID}
            class={{
              'select-label': true,
            }}
            style={{ fontWeight: '500' }}
          >
            {this.label}
          </label>
          <select
            id={this.ID}
            name={this.ID}
            class={{
              'form-select': this.mode === 'bs5',
              'form-select-sm': this.mode === 'bs5' && this.size === 'small',
              'form-select-lg': this.mode === 'bs5' && this.size === 'large',
              'form-control': this.mode === 'bs4',
              'form-control-sm': this.mode === 'bs4' && this.size === 'small',
              'form-control-lg': this.mode === 'bs4' && this.size === 'large',
              'custom-select': this.type === 'custom',
            }}
            aria-label=".form-select example"
            onChange={this.handleOnChange.bind(this)}
            disabled={this.disabled}
          >
            <option selected={this.value === ''} value="">
              Please pick..
            </option>
            {this.options.map((option: Option) => {
              return (
                <option
                  selected={this.value === option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              );
            })}
          </select>
        </div>
      </Host>
    );
  }
}
