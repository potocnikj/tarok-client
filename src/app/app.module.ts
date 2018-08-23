/**
 * Internal
 */
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
/**
 * Material
 */
import { MaterialModule } from "./material/material.module";
/**
 * Routing
 */
import { AppRoutingModule } from './app-routing.module';
/**
 * Components
 */
import { AppComponent } from './app.component';
import { RegisterComponent } from './core/components/register/register.component';
import { LoginComponent } from './core/components/login/login.component';
/**
 * Services
 */
import { HttpService } from "./core/services/http.service";
import { ToastService } from "./core/services/toast.service";
import { AuthenticationService } from "./core/services/authentication.service";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
    ToastService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
