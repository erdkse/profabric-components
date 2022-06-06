import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'profabric-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-app';
  public themes = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'dark',
    'light',
    'link',
  ];
  public components = [
    this.themes.map((t) => ({
      theme: t,
      text: t.charAt(0).toUpperCase() + t.slice(1).toLowerCase(),
      loading: false,
      size: 'default',
    })),
    this.themes.map((t) => ({
      theme: t,
      text: t.charAt(0).toUpperCase() + t.slice(1).toLowerCase(),
      loading: false,
      size: 'small',
    })),
    this.themes.map((t) => ({
      theme: t,
      text: t.charAt(0).toUpperCase() + t.slice(1).toLowerCase(),
      loading: false,
      size: 'large',
    })),
  ];
  public timeoutID: any = null;

  public handleClick(item: any) {
    if (this.timeoutID) {
      clearTimeout(this.timeoutID);
    }

    this.components = this.components.map((chunk) =>
      chunk.map((c) => ({ ...c, loading: _.isEqual(c, item) }))
    );

    this.timeoutID = setTimeout(() => {
      this.components = this.components.map((chunk) =>
        chunk.map((c) => ({ ...c, loading: false }))
      );
    }, 50000);
  }
}
