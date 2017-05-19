import { panelRouteAnimation } from './../../animations/panel-route.animation';
import { SzActivePanel } from './../../anonymous-panel/active-panel';
import { SzPanelHostComponent } from './../../panel-host/panel-host.component';
import { Component, Injector, ElementRef, Optional, OnInit } from '@angular/core';
import { BasePanel } from '../base-panel';

@Component({
    selector: 'sz-anonymous-panel',
    templateUrl: 'anonymous-panel.component.html',
    styleUrls: ['../panel/panel.component.scss'],
    animations: [panelRouteAnimation]
})
export class SzAnonymousPanelComponent extends BasePanel implements OnInit {

    constructor(
        injector: Injector,
        element: ElementRef,
        @Optional() parent: SzPanelHostComponent,
        @Optional() private _pi: SzActivePanel<any>) {
            super(parent, element, injector);
        this._canClose = true;
    }

    public ngOnInit() {
        this._parent.setActivePanel(this);
    }

    public close(): void {
        this._pi.close();
    }
}
