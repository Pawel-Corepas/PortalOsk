import { Component, OnInit, Input } from '@angular/core';
import { StatItem } from './stat-item';

@Component({
  selector: 'app-stats-bar-item',
  templateUrl: './stats-bar-item.component.html',
  styleUrls: ['./stats-bar-item.component.scss']
})
export class StatsBarItemComponent implements OnInit {

  @Input() statItem: StatItem
  constructor() { }

  ngOnInit() {

  }

  onResized(event) {
    if(event.target.window.innerWidth< 1000){
    
      } else{
        
      }
  }

}
