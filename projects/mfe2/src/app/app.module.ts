import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EnrichComponent } from './enrich.component';
import { DeviceComponent } from './device.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    EnrichComponent,
    DeviceComponent
  ],
  providers: [],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
