import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

/**
 * Components
 */
import {LoginComponent} from './core/components/login/login.component';
import {RegisterComponent} from './core/components/register/register.component';
import {LoginGuard} from './core/guards/login.guard';
import {AuthGuard} from './core/guards/auth.guard';
import {DashboardComponent} from './core/components/dashboard/dashboard.component';

/**
 * Guards
 */

const routes: Routes = [
  {path: 'register', canActivate: [LoginGuard], component: RegisterComponent},
  {path: 'login', canActivate: [LoginGuard], component: LoginComponent},
  /**
   * Lazy load statistics and game modules.
   */
  {path: 'statistics', canActivate: [AuthGuard], loadChildren: './statistics/statistics.module#StatisticsModule'},
  {path: 'game', canActivate: [AuthGuard], loadChildren: './game/game.module#GameModule'},
  {path: '**', canActivate: [AuthGuard], component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
