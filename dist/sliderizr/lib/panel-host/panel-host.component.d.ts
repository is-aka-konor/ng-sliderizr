import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { WindowRefService } from '../core/window-ref/window-ref.service';
import { BasePanel } from '../panels/base-panel';
export declare class SzPanelHostComponent {
    private element;
    private _cdr;
    private _windowRef;
    private _activePanel;
    constructor(element: ElementRef, _cdr: ChangeDetectorRef, _windowRef: WindowRefService);
    readonly boundingBox: ClientRect;
    private readonly nativeElement;
    readonly outerWidth: number;
    scrollLeft: number;
    setActivePanel(panel: BasePanel, hasPriority?: boolean): void;
}
