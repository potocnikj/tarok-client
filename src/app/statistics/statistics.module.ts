/**
 * Internal
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * Routing
 */
import { StatisticsRoutingModule } from './statistics-routing.module';
/**
 * Charts
 */
import { GoogleChartsModule } from 'angular-google-charts';
/**
 * Components
 */
import { PlayerEloComponent } from './components/player-elo/player-elo.component';
import { PlayerPerformanceComponent } from './components/player-performance/player-performance.component';

@NgModule({
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    GoogleChartsModule
  ],
  declarations: [
    PlayerEloComponent,
    PlayerPerformanceComponent
  ]
})
export class StatisticsModule { }
