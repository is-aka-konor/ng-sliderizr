import { SzPanelHostComponent } from './../../panel-host/panel-host.component';
import { Injector, ElementRef, OnInit } from '@angular/core';
import { BasePanel } from '../base-panel';
import { SzActivePanel } from '../../core/panel/active-panel';
export declare class SzAnonymousPanelComponent extends BasePanel implements OnInit {
    private _pi;
    constructor(injector: Injector, element: ElementRef, parent: SzPanelHostComponent, _pi: SzActivePanel<any>);
    ngOnInit(): void;
    close(): void;
}
