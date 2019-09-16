import { Component, OnInit, Input } from '@angular/core'; 
import { StatItem } from './stats-bar-item/stat-item';

@Component({
  selector: 'app-stats-bar',
  templateUrl: './stats-bar.component.html',
  styleUrls: ['./stats-bar.component.scss']
})
export class StatsBarComponent implements OnInit {

  @Input() stats:StatItem[]

  constructor() { }

  ngOnInit() {
 
  }

}
