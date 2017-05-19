import { panelRouteAnimation } from './../../animations/panel-route.animation';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'tm-demo-results',
  templateUrl: './demo-results.component.html',
  styleUrls: ['./demo-results.component.scss']
  //animations: [panelRouteAnimation]
})
export class DemoResultsComponent implements OnInit {
  //@HostBinding('@panelRouteAnimation') panelAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
