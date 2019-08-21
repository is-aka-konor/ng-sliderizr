import { ElementRef, TemplateRef, Injector } from '@angular/core';
import { SzPanelHostComponent } from './../panel-host/panel-host.component';
export declare abstract class BasePanel {
    protected _parent: SzPanelHostComponent;
    protected _element: ElementRef;
    protected _injector: Injector;
    headingRef: TemplateRef<any>;
    closeContentRef: TemplateRef<any>;
    headerTemplate: TemplateRef<any>;
    routeAnimation: boolean;
    isActive: boolean;
    readonly hostClass = true;
    heading: string;
    closeText: string;
    protected _canClose: boolean;
    readonly canClose: boolean;
    protected readonly nativeElement: HTMLElement;
    constructor(_parent: SzPanelHostComponent, _element: ElementRef, _injector: Injector);
    abstract close(): void;
    onPanelClick(args: Event): void;
    private isElementChild;
    onAnimationComplete(): void;
    scrollVisible(): void;
    private getOffsetLeft;
    private getScrollAmount;
}
