/**
 * Internal
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/**
 * Components
 */
import { PlayerEloComponent } from './components/player-elo/player-elo.component';
import { PlayerPerformanceComponent } from './components/player-performance/player-performance.component';

const routes: Routes = [
  {path: 'player-performance', component: PlayerPerformanceComponent},
  {path: '**', component: PlayerEloComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
