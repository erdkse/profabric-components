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
  public buttons = [
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
  public selects: Array<any> = [
    {
      options: this.themes.map((t) => ({
        label: t.charAt(0).toUpperCase() + t.slice(1).toLowerCase(),
        value: t,
      })),
      label: 'Small',
      size: 'small',
    },
    {
      options: this.themes.map((t) => ({
        label: t.charAt(0).toUpperCase() + t.slice(1).toLowerCase(),
        value: t,
      })),
      label: 'Default',
      size: 'default',
    },
    {
      options: this.themes.map((t) => ({
        label: t.charAt(0).toUpperCase() + t.slice(1).toLowerCase(),
        value: t,
      })),
      label: 'Large',
      size: 'large',
    },
  ];
  public checkboxes: Array<any> = [
    {
      label: 'Checkbox',
      switchable: false,
    },
    {
      label: 'Switch',
      switchable: true,
    },
  ];
  public timeoutID: any = null;

  public handleClick(item: any) {
    if (this.timeoutID) {
      clearTimeout(this.timeoutID);
    }

    this.buttons = this.buttons.map((chunk) =>
      chunk.map((c) => ({ ...c, loading: _.isEqual(c, item) }))
    );

    this.timeoutID = setTimeout(() => {
      this.buttons = this.buttons.map((chunk) =>
        chunk.map((c) => ({ ...c, loading: false }))
      );
    }, 50000);
  }

  public handleOnSelectChange(event: any) {
    console.log(event.target.value);
  }

  public handleOnCheckboxChange(event: any) {
    console.log(event.target.checked);
  }
}
