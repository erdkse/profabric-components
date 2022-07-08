import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfabricComponentsModule } from '@profabric/angular-components';
import { defineCustomElements } from '@profabric/web-components/loader';
defineCustomElements();

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ProfabricComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
