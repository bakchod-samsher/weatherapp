import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowWeatherDataComponent } from './show-weather-data/show-weather-data.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShowWeatherDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
   HttpClientModule
  ],
  providers: [ HttpClient,],
  bootstrap: [AppComponent]
})
export class AppModule { }
