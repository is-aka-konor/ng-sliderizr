import { ElementRef, HostListener, TemplateRef, HostBinding, Input, Injector } from '@angular/core';
import { SzPanelHostComponent } from './../panel-host/panel-host.component';

export abstract class BasePanel {
    public headingRef: TemplateRef<any>;
    public closeContentRef: TemplateRef<any>;
    public headerTemplate: TemplateRef<any>;
    @HostBinding('@panelRouteAnimation') routeAnimation = true;
    @HostBinding('class.active') public isActive = false;
    @HostBinding('class.sz-panel') public readonly hostClass = true;

    @Input() heading: string;
    @Input() closeText = 'close';

    protected _canClose: boolean;

    public get canClose(): boolean {
        return this._canClose;
    }

    protected get nativeElement(): HTMLElement {
        return this._element.nativeElement;
    }

    constructor (
        protected _parent: SzPanelHostComponent,
        protected _element: ElementRef,
        protected _injector: Injector
    ) {

    }

    abstract close(): void;

    @HostListener('click', ['$event'])
    public onPanelClick(args: Event) {
        if (this.isElementChild(<HTMLElement>args.target)) {
            this._parent.setActivePanel(this);
        }
    }

    private isElementChild(target: HTMLElement): boolean {
        while (target && target.tagName !== 'SZ-PANEL') {
            target = target.parentElement;
        }

        return target && target === this._element.nativeElement;
    }

    @HostListener('@panelRouteAnimation.done')
    onAnimationComplete() {
        this.scrollVisible();
    }

    scrollVisible() {
        this._parent.scrollLeft = this.getScrollAmount();
    }


    getOffsetLeft(): number {
        const box = this.nativeElement.getBoundingClientRect();
        return (box.left - this._parent.boundingBox.left) + this._parent.scrollLeft;
    }

    getScrollAmount(): number {
        const scrollLeft = this._parent.scrollLeft;
        const parentWidth = this._parent.outerWidth;
        const panelWidth = this.nativeElement.offsetWidth;

        // Calculate offset left from previous sibling as the current element may be in the wrong position due to animations
        const offsetLeft = this.getOffsetLeft(); // The distance from the edge of the panel host to the start of the panel
        const visibleRight = offsetLeft + panelWidth; // The right most edge of the panel relative to the parent panel

        let scroll: number = scrollLeft;

        if (scrollLeft > offsetLeft) {
            scroll = offsetLeft;
        } else if (scrollLeft < (visibleRight - parentWidth)) {
            // Add an extra 50px on the end so the panel isn't butted up against the side of the browser
            scroll = visibleRight - parentWidth + 50;
        }

        return scroll;
    }
}
