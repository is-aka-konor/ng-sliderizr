import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { BasePanel } from '../panels/base-panel';

@Component({
    selector: 'sz-panel-host',
    templateUrl: './panel-host.component.html',
    styleUrls: ['./panel-host.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SzPanelHostComponent implements OnInit {
    private _activePanelTimeoutId: number;
    private _scrollTimeoutId: number;
    private _incomingPanel: BasePanel;
    private _panelPriority: boolean;

    private _activePanel: BasePanel;

    constructor(private element: ElementRef) { }

    public get boundingBox(): ClientRect {
        return this.nativeElement.getBoundingClientRect();
    }

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
        if (this._scrollTimeoutId) {
            window.clearTimeout(this._scrollTimeoutId);
        }

        this.scrollTo(this.nativeElement, value, 200);
    }

    ngOnInit() {
    }

    public setActivePanel(panel: BasePanel, hasPriority = false) {
        if (!this._activePanelTimeoutId || hasPriority) {
            this._incomingPanel = panel;
            this._panelPriority = hasPriority;
            this.setActivePanelInternal();
        } else {
            this.setActivePanelInternal();
        }
    }

    private setActivePanelInternal() {
        if (this._activePanelTimeoutId) {
            window.clearTimeout(this._activePanelTimeoutId);
        }

        this._activePanelTimeoutId = window.setTimeout(() => {
            if (this._activePanel !== this._incomingPanel) {
                if (this._activePanel) {
                    this._activePanel.isActive = false;
                }
                this._activePanel = this._incomingPanel;
                this._activePanel.isActive = true;

                if (!this._panelPriority) {
                    this._activePanel.scrollVisible();
                }
            }

            this._incomingPanel = null;
            this._activePanelTimeoutId = null;
        }, 50);
    }

    scrollTo(element: HTMLElement, to: number, duration: number) {
        if (duration <= 0) {
            return;
        }
        const difference = to - element.scrollLeft;
        const perTick = difference / duration * 10;

        this._scrollTimeoutId = window.setTimeout(() => {
            this._scrollTimeoutId = null;
            element.scrollLeft = element.scrollLeft + perTick;
            if (element.scrollLeft === to) {
                return;
            }

            this.scrollTo(element, to, duration - 10);
        }, 10);
    }
}
