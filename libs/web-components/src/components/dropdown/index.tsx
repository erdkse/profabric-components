import {
  Component,
  h,
  Host,
  Element,
  Prop,
  Listen,
  Watch,
  State,
} from '@stencil/core';
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
  private dropdownMenu?: HTMLElement;
  @State() fixedStyles: { left: string; right: string } = {
    left: 'inherit',
    right: `0px`,
  };
  @Prop({ reflect: true, mutable: true }) class: string;
  @Prop({ reflect: true, mutable: true }) isOpen: boolean = false;
  @Prop({ reflect: true, mutable: true }) mode: MODE;
  @Prop({ reflect: true, mutable: true }) hideArrow: boolean = false;

  @Listen('click', { target: 'window' })
  listenDocumentClick(event: Event) {
    const target: HTMLElement = event.target as HTMLElement;
    if (this.el !== target && !this.el.contains(target)) {
      this.isOpen = false;
    }
  }

  @Listen('resize', { target: 'window' })
  listenBodyResize() {
    this.calculateFixedStyles();
  }

  @Watch('class')
  watchClass(value) {
    if (!value.includes('dropdown')) {
      this.class = `dropdown ${value}`;
    }
  }

  calculateFixedStyles() {
    if (this.dropdownMenu) {
      const windowWidth = document.body.offsetWidth;
      const offsetLeft = this.dropdownMenu.getBoundingClientRect().left;
      const offsetWidth = this.dropdownMenu.offsetWidth;
      const visiblePart = windowWidth - offsetLeft;

      if (offsetLeft < 0) {
        this.fixedStyles = {
          left: 'inherit',
          right: `${offsetLeft - 5}px`,
        };
        return;
      } else if (visiblePart < offsetWidth) {
        this.fixedStyles = { left: 'inherit', right: `0px` };
        return;
      }
      this.fixedStyles = { left: 'inherit', right: `0px` };
      return;
    }
    this.fixedStyles = { left: 'inherit', right: `0px` };
    return;
  }

  componentWillLoad() {
    this.calculateFixedStyles();
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  render() {
    return (
      <Host>
        <div class="dropdown-head" onClick={this.toggleDropdown.bind(this)}>
          <slot name="button"></slot>
          {!this.hideArrow && (
            <i
              class={{ arrow: true, down: !this.isOpen, up: this.isOpen }}
              style={{ margin: this.isOpen ? '3px 3px 0 0' : '0 3px 3px 0' }}
            ></i>
          )}
        </div>
        <div
          ref={(el) => (this.dropdownMenu = el)}
          class={{
            'dropdown-menu': true,
            show: this.isOpen,
          }}
          style={{ ...this.fixedStyles }}
        >
          <slot name="menu"></slot>
        </div>
      </Host>
    );
  }
}
