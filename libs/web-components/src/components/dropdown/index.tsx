import { Component, h, Host, Element, Prop, Listen } from '@stencil/core';
import { MODE } from '../../utils/types';

@Component({
  tag: 'pf-dropdown',
  styleUrls: {
    bs4: 'bs4.scss',
    bs5: 'bs5.scss',
  },
  shadow: true,
})
export class PfDropdown {
  @Element() el: HTMLElement;
  @Prop({ reflect: true, mutable: true }) isOpen: boolean = false;
  @Prop({ reflect: true, mutable: true }) size: string = 'md';
  @Prop({ reflect: true, mutable: true }) mode: MODE;

  @Listen('click', { target: 'window' })
  listenDocumentClick(event: Event) {
    const target: HTMLElement = event.target as HTMLElement;
    if (this.el !== target && !this.el.contains(target)) {
      this.isOpen = false;
    }
  }

  componentWillLoad() {}

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  render() {
    return (
      <Host class={{ 'nav-item': true }}>
        <div class={{ dropdown: true }}>
          <button
            class="nav-link dropdown-toggle"
            type="button"
            onClick={this.toggleDropdown.bind(this)}
          >
            <slot name="button"></slot>
          </button>
          {this.isOpen && (
            <div class="dropdown-menu show">
              <slot name="menu"></slot>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
