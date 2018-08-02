import { SzPanelHostComponent } from './../../panel-host/panel-host.component';
import { Component, Injector, ElementRef, Optional, OnInit, ViewEncapsulation } from '@angular/core';
import { BasePanel } from '../base-panel';
import { PANEL_ROUTE_ANIMATION, SzActivePanel } from '../../core';

@Component({
    selector: 'sz-anonymous-panel',
    templateUrl: 'anonymous-panel.component.html',
    styleUrls: ['../panel/panel.component.scss'],
    animations: [PANEL_ROUTE_ANIMATION],
    encapsulation: ViewEncapsulation.None
})
export class SzAnonymousPanelComponent extends BasePanel implements OnInit {

    constructor(
        injector: Injector,
        element: ElementRef,
        @Optional() parent: SzPanelHostComponent,
        @Optional() private _pi: SzActivePanel<any>
    ) {
            super(parent, element, injector);
        this._canClose = true;
    }

    public ngOnInit() {
        this._parent.setActivePanel(this, true);
    }

    public close(): void {
        this._pi.close();
    }
}
