/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@profabric/web-components';




export declare interface PfButton extends Components.PfButton {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['block', 'class', 'disabled', 'loading', 'mode', 'size', 'theme', 'type']
})
@Component({
  selector: 'pf-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['block', 'class', 'disabled', 'loading', 'mode', 'size', 'theme', 'type']
})
export class PfButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PfSelect extends Components.PfSelect {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['block', 'class', 'disabled', 'label', 'mode', 'options', 'size', 'theme', 'type', 'value']
})
@Component({
  selector: 'pf-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['block', 'class', 'disabled', 'label', 'mode', 'options', 'size', 'theme', 'type', 'value']
})
export class PfSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
