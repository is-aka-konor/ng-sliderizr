import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { BasePanel } from '../panels/base-panel';

@Component({
    selector: 'sz-panel-host',
    templateUrl: './panel-host.component.html',
    styleUrls: ['./panel-host.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SzPanelHostComponent implements OnInit {
    private _activePanel: BasePanel;

    constructor(private element: ElementRef) { }

    private get nativeElement(): HTMLElement {
        return this.element.nativeElement;
    }

    public get outerWidth(): number {
        return this.nativeElement.offsetWidth;
    }

    public get scrollLeft(): number {
        return this.nativeElement.scrollLeft;
    }

    public set scrollLeft(value: number) {
        this.nativeElement.scrollLeft = value;
    }

    ngOnInit() {
    }

    public setActivePanel(panel: BasePanel) {
        if (this._activePanel) {
            this._activePanel.isActive = false;
        }
        this._activePanel = panel;
        this._activePanel.isActive = true;
    }
}
