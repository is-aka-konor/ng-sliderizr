import { ElementRef, Renderer, HostListener, TemplateRef, HostBinding, Input, Injector } from '@angular/core';
import { SzPanelHostComponent } from './../panel-host/panel-host.component';

export abstract class BasePanel {
    public headingRef: TemplateRef<any>;
    public closeContentRef: TemplateRef<any>;
    @HostBinding('@panelRouteAnimation') routeAnimation = true;
    @HostBinding('class.active') public isActive = false;
    @Input() heading: string;
    @Input() closeText = 'close';

    protected _canClose: boolean;

    public get canClose(): boolean {
        return this._canClose;
    }

    protected get nativeElement(): HTMLElement {
        return this._element.nativeElement;
    }
    constructor(
        protected _parent: SzPanelHostComponent,
        protected _element: ElementRef,
        protected _injector: Injector
    ) {

    }

    abstract close(): void;

    @HostListener('click', ['$event'])
    public onPanelClick(args: Event) {
        args.stopPropagation();
        this.scrollVisible();
        this._parent.setActivePanel(this);
    }

    scrollVisible() {
        this._parent.scrollLeft = this.getScrollAmount();
    }


    getOffsetLeft(): number {
        const box = this.nativeElement.getBoundingClientRect();
        return box.left + this._parent.scrollLeft;
    }

    getScrollAmount(): number {
        const scrollLeft = this._parent.scrollLeft;
        const parentWidth = this._parent.outerWidth;
        const panelWidth = this.nativeElement.offsetWidth;
        //let prevSibling = element.prev();

        // Calculate offset left from previous sibling as the current element may be in the wrong position due to animations
        let offsetLeft = this.getOffsetLeft(); // prevSibling.length === 0 ? 0 : (prevSibling.offset().left + prevSibling.outerWidth() - parent.offset().left) + scrollLeft;
        let visibleRight = offsetLeft + panelWidth;

        let scroll: number;

        if (scrollLeft > offsetLeft) {
            scroll = offsetLeft;
        } else if (scrollLeft < (visibleRight - parentWidth)) {
            // Add an extra 50px on the end so the panel isnt butted up against the side of the browser
            scroll = visibleRight - parentWidth + 50;
        } else {
            return;
        }

        return scroll;
    }
}
