import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgxParallaxScrollModule } from 'ngx-parallax-scroll';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, NgxParallaxScrollModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
