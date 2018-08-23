import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Components
 */
import { LoginComponent } from './core/components/login/login.component';
import { RegisterComponent } from './core/components/register/register.component';
import { LoginGuard } from './core/guards/login.guard';
import { AuthGuard } from './core/guards/auth.guard';
/**
 * Guards
 */

const routes: Routes = [
  { path: 'register', canActivate: [], component: RegisterComponent},
  { path: 'login', canActivate: [], component: LoginComponent},
  /**
   * Lazy load statistics and game modules.
   */
  { path: 'statistics', loadChildren: './statistics/statistics.module#StatisticsModule' },
  { path: 'game', loadChildren: './game/game.module#GameModule' },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
