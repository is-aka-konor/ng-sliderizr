import { WindowRefService } from '../core/window-ref/window-ref.service';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { BasePanel } from '../panels/base-panel';

@Component({
    selector: 'sz-panel-host',
    templateUrl: './panel-host.component.html',
    styleUrls: ['./panel-host.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SzPanelHostComponent {
    private _activePanelTimeoutId: number;
    private _scrollTimeoutId: number;
    private _incomingPanel: BasePanel;
    private _panelPriority: boolean;

    private _activePanel: BasePanel;

    constructor (
        private element: ElementRef,
        private _cdr: ChangeDetectorRef,
        private _windowRef: WindowRefService
    ) { }

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
            this._windowRef.nativeWindow.clearTimeout(this._scrollTimeoutId);
        }

        this._windowRef.scrollTo(this.nativeElement, value, 200);
    }

    public setActivePanel(panel: BasePanel, hasPriority = false) {
        if (hasPriority) {
            this._windowRef.nativeWindow.setTimeout(() => {
                this.setActivePanel(panel);
                this._cdr.markForCheck();
            });
        } else {
            if (this._activePanel) {
                this._activePanel.isActive = false;
            }

            this._activePanel = panel;
            this._activePanel.isActive = true;
        }
    }
}
