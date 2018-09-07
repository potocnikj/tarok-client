import { Component, OnInit } from '@angular/core';
import { Chart } from '../../models/chart';

@Component({
  selector: 'app-player-performance',
  templateUrl: './player-performance.component.html',
  styleUrls: ['./player-performance.component.css']
})
export class PlayerPerformanceComponent implements OnInit {

  chart: Chart = new Chart({
    title: 'Player performance',
    type: 'AreaChart',
    columnNames: ['player', 'performance'],
    data: [
      ['London', 8136000],
      ['New York', 8538000],
      ['Paris', 2244000],
      ['Berlin', 3470000],
      ['Kairo', 19500000]
    ]
  });

  constructor() { }

  ngOnInit() {
  }

}
