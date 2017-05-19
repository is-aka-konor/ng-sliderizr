import { SzPanelComponent } from './../../panels/panel/panel.component';
import { AnonPanelComponent } from './../anon-panel/anon-panel.component';
import { panelRouteAnimation } from './../../animations/panel-route.animation';
import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';

@Component({
    selector: 'tm-demo-dashboard',
    templateUrl: './demo-dashboard.component.html',
    styleUrls: ['./demo-dashboard.component.scss']
    //animations: [panelRouteAnimation]
})
export class DemoDashboardComponent implements OnInit {
    @ViewChild(SzPanelComponent) panel: SzPanelComponent;
    //@HostBinding('@panelRouteAnimation') panelAnimation = true;

    constructor() { }

    ngOnInit() {
    }

    openChild() {
        let ref = this.panel.openChild(AnonPanelComponent);
        ref.componentInstance.title = 'aa';
    }
}
