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
import { MaterialModule } from './material/material.module';
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
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
/**
 * Guards
 */
import { AuthGuard } from './core/guards/auth.guard';
import { LoginGuard } from './core/guards/login.guard';
/**
 * Services
 */
import { HttpService } from './core/services/http.service';
import { ToastService } from './core/services/toast.service';
import { AuthenticationService } from './core/services/authentication.service';
import { LanguageService } from './core/services/language.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent
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
    AuthGuard,
    LoginGuard,
    AuthenticationService,
    LanguageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
