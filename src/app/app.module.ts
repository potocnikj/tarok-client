/**
 * Internal
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/**
 * Material
 */
import { MaterialModule } from "./material/material.module";
/**
 * Components
 */
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
