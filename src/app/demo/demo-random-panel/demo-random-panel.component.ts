import { panelRouteAnimation } from './../../animations/panel-route.animation';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
    selector: 'sz-demo-random-panel',
    templateUrl: './demo-random-panel.component.html',
    styleUrls: ['./demo-random-panel.component.scss']
    //animations: [panelRouteAnimation]
})
export class DemoRandomPanelComponent implements OnInit {
    //@HostBinding('@panelRouteAnimation') panelAnimation = true;
    constructor() { }

    ngOnInit() {
    }
}
