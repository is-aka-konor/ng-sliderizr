import { Subject } from 'rxjs';
import { Injectable, ReflectiveInjector, ComponentFactoryResolver, Injector, HostBinding, Input, HostListener, Component, ViewEncapsulation, ElementRef, ChangeDetectorRef, Directive, ViewContainerRef, EventEmitter, Optional, ViewChild, Output, TemplateRef, NgModule } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet, RouterModule } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { trigger, transition, style, animate, query } from '@angular/animations';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class SzActivePanel {
    constructor() {
        this._afterClosed = new Subject();
    }
    /**
     * @return {?}
     */
    get componentInstance() {
        return this.componentRef ? this.componentRef.instance : null;
    }
    /**
     * @param {?=} result
     * @return {?}
     */
    close(result) {
        if (this.beforeClose) {
            this.beforeClose().then((/**
             * @return {?}
             */
            () => {
                this.internalClose();
            }));
            return;
        }
        this.internalClose(result);
    }
    /**
     * @private
     * @param {?=} result
     * @return {?}
     */
    internalClose(result) {
        this.componentRef.destroy();
        this._afterClosed.next(result);
        this._afterClosed.complete();
    }
    /**
     * @return {?}
     */
    get afterClosed() {
        return this._afterClosed.asObservable();
    }
}
SzActivePanel.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SzActivePanel.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SzPanelService {
    /**
     * @param {?} _componentFactoryResolver
     * @param {?} _injector
     */
    constructor(_componentFactoryResolver, _injector) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._injector = _injector;
    }
    /**
     * @template T
     * @param {?} content
     * @param {?} host
     * @param {?=} injector
     * @return {?}
     */
    open(content, host, injector) {
        /** @type {?} */
        const afterClosed = new Subject();
        /** @type {?} */
        const activePanel = new SzActivePanel();
        injector = injector ? injector : this._injector;
        /** @type {?} */
        const componentFactory = this._componentFactoryResolver.resolveComponentFactory(content);
        /** @type {?} */
        const modalContentInjector = ReflectiveInjector.resolveAndCreate([{ provide: SzActivePanel, useValue: activePanel }], injector);
        /** @type {?} */
        const viewContainerRef = host.childPanelHost.viewContainerRef;
        viewContainerRef.clear();
        /** @type {?} */
        const componentRef = viewContainerRef.createComponent(componentFactory, null, modalContentInjector);
        activePanel.componentRef = componentRef;
        return activePanel;
    }
}
SzPanelService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SzPanelService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: Injector }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class BasePanel {
    /**
     * @param {?} _parent
     * @param {?} _element
     * @param {?} _injector
     */
    constructor(_parent, _element, _injector) {
        this._parent = _parent;
        this._element = _element;
        this._injector = _injector;
        this.routeAnimation = true;
        this.isActive = false;
        this.hostClass = true;
        this.closeText = 'close';
    }
    /**
     * @return {?}
     */
    get canClose() {
        return this._canClose;
    }
    /**
     * @protected
     * @return {?}
     */
    get nativeElement() {
        return this._element.nativeElement;
    }
    /**
     * @param {?} args
     * @return {?}
     */
    onPanelClick(args) {
        if (this.isElementChild((/** @type {?} */ (args.target)))) {
            this._parent.setActivePanel(this);
            this.scrollVisible();
        }
    }
    /**
     * @private
     * @param {?} target
     * @return {?}
     */
    isElementChild(target) {
        while (target && target.tagName !== 'SZ-PANEL') {
            target = target.parentElement;
        }
        return target && target === this._element.nativeElement;
    }
    /**
     * @return {?}
     */
    onAnimationComplete() {
        // Set scroll in a timeout otherwise the DOM isnt ready and the scroll doesnt work
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.scrollVisible();
        }), 0);
    }
    /**
     * @return {?}
     */
    scrollVisible() {
        this._parent.scrollLeft = this.getScrollAmount();
    }
    /**
     * @private
     * @return {?}
     */
    getOffsetLeft() {
        /** @type {?} */
        const box = this.nativeElement.getBoundingClientRect();
        return (box.left - this._parent.boundingBox.left) + this._parent.scrollLeft;
    }
    /**
     * @private
     * @return {?}
     */
    getScrollAmount() {
        /** @type {?} */
        const scrollLeft = this._parent.scrollLeft;
        /** @type {?} */
        const parentWidth = this._parent.outerWidth;
        /** @type {?} */
        const panelWidth = this.nativeElement.offsetWidth;
        // Calculate offset left from previous sibling as the current element may be in the wrong position due to animations
        /** @type {?} */
        const offsetLeft = this.getOffsetLeft();
        // The distance from the edge of the panel host to the start of the panel
        /** @type {?} */
        const visibleRight = offsetLeft + panelWidth;
        // The right most edge of the panel relative to the parent panel
        /** @type {?} */
        let scroll = scrollLeft;
        if (scrollLeft > offsetLeft) {
            scroll = offsetLeft;
        }
        else if (scrollLeft < (visibleRight - parentWidth)) {
            // Add an extra 50px on the end so the panel isn't butted up against the side of the browser
            scroll = visibleRight - parentWidth + 50;
        }
        return scroll;
    }
}
BasePanel.propDecorators = {
    routeAnimation: [{ type: HostBinding, args: ['@panelRouteAnimation',] }],
    isActive: [{ type: HostBinding, args: ['class.active',] }],
    hostClass: [{ type: HostBinding, args: ['class.sz-panel',] }],
    heading: [{ type: Input }],
    closeText: [{ type: Input }],
    onPanelClick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onAnimationComplete: [{ type: HostListener, args: ['@panelRouteAnimation.done',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WindowRefService {
    /**
     * @return {?}
     */
    get nativeWindow() {
        return window;
    }
    /**
     * @param {?} element
     * @param {?} to
     * @param {?} duration
     * @return {?}
     */
    scrollTo(element, to, duration) {
        if (this._scrollTimeoutId) {
            window.clearTimeout(this._scrollTimeoutId);
            this._scrollTimeoutId = null;
        }
        if (duration <= 0) {
            return;
        }
        /** @type {?} */
        const difference = to - element.scrollLeft;
        /** @type {?} */
        const perTick = difference / duration * 10;
        this._scrollTimeoutId = window.setTimeout((/**
         * @return {?}
         */
        () => {
            this._scrollTimeoutId = null;
            element.scrollLeft = element.scrollLeft + perTick;
            if (element.scrollLeft === to) {
                return;
            }
            this.scrollTo(element, to, duration - 10);
        }), 10);
    }
}
WindowRefService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SzPanelHostComponent {
    /**
     * @param {?} element
     * @param {?} _cdr
     * @param {?} _windowRef
     */
    constructor(element, _cdr, _windowRef) {
        this.element = element;
        this._cdr = _cdr;
        this._windowRef = _windowRef;
    }
    /**
     * @return {?}
     */
    get boundingBox() {
        return this.nativeElement.getBoundingClientRect();
    }
    /**
     * @private
     * @return {?}
     */
    get nativeElement() {
        return this.element.nativeElement;
    }
    /**
     * @return {?}
     */
    get outerWidth() {
        return this.nativeElement.offsetWidth;
    }
    /**
     * @return {?}
     */
    get scrollLeft() {
        return this.nativeElement.scrollLeft;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set scrollLeft(value) {
        this._windowRef.scrollTo(this.nativeElement, value, 200);
    }
    /**
     * @param {?} panel
     * @param {?=} hasPriority
     * @return {?}
     */
    setActivePanel(panel, hasPriority = false) {
        if (hasPriority) {
            this._windowRef.nativeWindow.setTimeout((/**
             * @return {?}
             */
            () => {
                this.setActivePanel(panel);
                this._cdr.markForCheck();
            }));
        }
        else {
            if (this._activePanel) {
                this._activePanel.isActive = false;
            }
            this._activePanel = panel;
            this._activePanel.isActive = true;
        }
    }
}
SzPanelHostComponent.decorators = [
    { type: Component, args: [{
                selector: 'sz-panel-host',
                template: "<ng-content></ng-content>",
                encapsulation: ViewEncapsulation.None,
                styles: ["sz-panel-host{white-space:nowrap;position:fixed;top:100px;right:0;bottom:0;left:0;overflow:auto}"]
            }] }
];
/** @nocollapse */
SzPanelHostComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: WindowRefService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChildPanelHostDirective {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
ChildPanelHostDirective.decorators = [
    { type: Directive, args: [{
                selector: '[szChildPanelHost]'
            },] }
];
/** @nocollapse */
ChildPanelHostDirective.ctorParameters = () => [
    { type: ViewContainerRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PANEL_ROUTE_ANIMATION = trigger('panelRouteAnimation', [
    transition(':enter', [
        style({ transform: 'translateX(-100%)', zIndex: -1 }),
        animate('200ms', style({ transform: 'translateX(0%)', zIndex: -1 }))
    ])
]);
/** @type {?} */
const PANEL_EXIT_ANIMATION = trigger('panelExitAnimation', [
    transition(`:leave`, [
        query('sz-panel', [
            style({ transform: 'translateX(0)', zIndex: -1 }),
            animate('200ms', style({ transform: 'translateX(-100%)', zIndex: -1 }))
        ]),
    ])
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SzPanelComponent extends BasePanel {
    /**
     * @param {?} parent
     * @param {?} _panelService
     * @param {?} injector
     * @param {?} element
     * @param {?} _route
     * @param {?} _router
     */
    constructor(parent, _panelService, injector, element, _route, _router) {
        super(parent, element, injector);
        this._panelService = _panelService;
        this._route = _route;
        this._router = _router;
        this._destroyed$ = new Subject();
        this.afterChildClosed = new EventEmitter();
        this.afterChildOpened = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get childComponent() {
        return this._childOutlet.component;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._canClose = this._route.root !== this._route.parent;
        this._route.params.pipe(takeUntil(this._destroyed$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this._parent.setActivePanel(this, true);
        }));
    }
    /**
     * Open an anonymous panel
     * @template T
     * @param {?} content The component representing the anon panel
     * @return {?}
     */
    openChild(content) {
        if (this._childOutlet.isActivated) {
            this.closeChildRoute();
        }
        this._activeAnon = this._panelService.open(content, this, this._injector);
        this._activeAnon.afterClosed
            .subscribe((/**
         * @return {?}
         */
        () => {
            this._parent.setActivePanel(this);
            this._activeAnon = null;
        }));
        this._parent.setActivePanel(this._activeAnon.componentInstance);
        return this._activeAnon;
    }
    /**
     * Close the panel
     * This routes to the parent panel
     * @return {?}
     */
    close() {
        this._router.navigate(['./'], { relativeTo: this._route.parent });
    }
    /**
     * Closes all child panels
     * Essentially this routes to the current panel
     * @return {?}
     */
    closeChildRoute() {
        this._router.navigate(['./'], { relativeTo: this._route });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed$.next();
    }
    /**
     * Event handler for when the router outlet deactivates
     * @param {?} component The component that was deactivated
     * @return {?}
     */
    onChildDeactivate(component) {
        this._parent.setActivePanel(this);
        this.afterChildClosed.emit(component);
    }
    /**
     * Event handler for when the router outlet activates
     * @param {?} component The component that the outlet was activated with
     * @return {?}
     */
    onChildActivate(component) {
        this.afterChildOpened.emit(component);
        if (this._activeAnon) {
            this._activeAnon.close();
        }
    }
}
SzPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'sz-panel',
                template: "<header class=\"sz-panel__header\">\r\n    <ng-template [szTemplateHost]=\"headerTemplate\"></ng-template>\r\n\r\n    <h1 *ngIf=\"!headerTemplate && !!heading\">\r\n        <ng-template [szTemplateHost]=\"headingRef\"></ng-template>\r\n        {{heading}}\r\n    </h1>\r\n\r\n    <button class=\"sz-panel__close\" (click)=\"close()\" *ngIf=\"!headerTemplate && canClose\">\r\n        <span *ngIf=\"!closeContentRef\">{{closeText}}</span>\r\n        <ng-template [szTemplateHost]=\"closeContentRef\"></ng-template>\r\n    </button>\r\n</header>\r\n\r\n<div class=\"sz-panel__container\">\r\n    <ng-content></ng-content>\r\n</div>\r\n\r\n<div class=\"sz-panel__child\">\r\n    <router-outlet (activate)='onChildActivate($event)' (deactivate)=\"onChildDeactivate($event)\"></router-outlet>\r\n</div>\r\n\r\n<div class=\"sz-panel__child\">\r\n    <ng-template szChildPanelHost></ng-template>\r\n</div>\r\n",
                animations: [
                    PANEL_ROUTE_ANIMATION
                ],
                encapsulation: ViewEncapsulation.None,
                styles: [".sz-panel{display:block;width:600px;height:100%;white-space:nowrap;line-height:0;font-size:0;position:relative;z-index:10}.sz-panel.active>.sz-panel__container,.sz-panel.active>.sz-panel__header{--sz-panel-header__fill:var(--sz-panel-header__fill--active, #ff0000);--sz-panel-content__fill:var(--sz-panel-content__fill--active, #ff0000)}.sz-panel__header{height:var(--sz-panel-header__height,30px);position:absolute;top:0;left:0;right:0;background-color:var(--sz-panel-header__fill,#fff);padding:0 16px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.sz-panel__header h1{margin:0}.sz-panel__close{position:absolute;top:0;right:0}.sz-panel__container{margin-top:var(--sz-panel-header__height,30px);width:600px;display:inline-block;vertical-align:top;height:calc(100% - var(--sz-panel-header__height,30px));line-height:initial;font-size:initial;position:relative;border-left:1px solid #ddd;overflow-y:scroll;background-color:var(--sz-panel-content__fill,#fff);padding:16px;white-space:normal}.sz-panel__child{display:inline-block;height:100%}"]
            }] }
];
/** @nocollapse */
SzPanelComponent.ctorParameters = () => [
    { type: SzPanelHostComponent, decorators: [{ type: Optional }] },
    { type: SzPanelService },
    { type: Injector },
    { type: ElementRef },
    { type: ActivatedRoute },
    { type: Router }
];
SzPanelComponent.propDecorators = {
    childPanelHost: [{ type: ViewChild, args: [ChildPanelHostDirective, { static: true },] }],
    _childOutlet: [{ type: ViewChild, args: [RouterOutlet, { static: true },] }],
    afterChildClosed: [{ type: Output }],
    afterChildOpened: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SzAnonymousPanelComponent extends BasePanel {
    /**
     * @param {?} injector
     * @param {?} element
     * @param {?} parent
     * @param {?} _pi
     */
    constructor(injector, element, parent, _pi) {
        super(parent, element, injector);
        this._pi = _pi;
        this._canClose = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._parent.setActivePanel(this, true);
    }
    /**
     * @return {?}
     */
    close() {
        this._pi.close();
    }
}
SzAnonymousPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'sz-anonymous-panel',
                template: "<!-- <header class=\"sz-panel__header\">\r\n    <ng-template [szTemplateHost]=\"headerTemplate\"></ng-template>\r\n\r\n    <h1 *ngIf=\"!headerTemplate && !!heading\">\r\n        <ng-template [szTemplateHost]=\"headingRef\"></ng-template>\r\n        {{heading}}\r\n    </h1>\r\n    \r\n    <button class=\"sz-panel__close\" (click)=\"close()\" *ngIf=\"!headerTemplate && canClose\">\r\n        <span *ngIf=\"!closeContentRef\">{{closeText}}</span>\r\n        <ng-template [szTemplateHost]=\"closeContentRef\"></ng-template>\r\n    </button>\r\n</header>\r\n\r\n<div class=\"sz-panel__container\">\r\n    <ng-content></ng-content>\r\n</div>\r\n\r\n<div class=\"sz-panel__child\">\r\n    <ng-template szChildPanelHost></ng-template>\r\n</div> -->\r\n",
                animations: [PANEL_ROUTE_ANIMATION],
                encapsulation: ViewEncapsulation.None,
                styles: [".sz-panel{display:block;width:600px;height:100%;white-space:nowrap;line-height:0;font-size:0;position:relative;z-index:10}.sz-panel.active>.sz-panel__container,.sz-panel.active>.sz-panel__header{--sz-panel-header__fill:var(--sz-panel-header__fill--active, #ff0000);--sz-panel-content__fill:var(--sz-panel-content__fill--active, #ff0000)}.sz-panel__header{height:var(--sz-panel-header__height,30px);position:absolute;top:0;left:0;right:0;background-color:var(--sz-panel-header__fill,#fff);padding:0 16px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.sz-panel__header h1{margin:0}.sz-panel__close{position:absolute;top:0;right:0}.sz-panel__container{margin-top:var(--sz-panel-header__height,30px);width:600px;display:inline-block;vertical-align:top;height:calc(100% - var(--sz-panel-header__height,30px));line-height:initial;font-size:initial;position:relative;border-left:1px solid #ddd;overflow-y:scroll;background-color:var(--sz-panel-content__fill,#fff);padding:16px;white-space:normal}.sz-panel__child{display:inline-block;height:100%}"]
            }] }
];
/** @nocollapse */
SzAnonymousPanelComponent.ctorParameters = () => [
    { type: Injector },
    { type: ElementRef },
    { type: SzPanelHostComponent, decorators: [{ type: Optional }] },
    { type: SzActivePanel, decorators: [{ type: Optional }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SzPanelHeadingDirective {
    /**
     * @param {?} templateRef
     * @param {?} panel
     * @param {?} anonPanel
     */
    constructor(templateRef, panel, anonPanel) {
        (anonPanel || panel).headingRef = templateRef;
    }
}
SzPanelHeadingDirective.decorators = [
    { type: Directive, args: [{
                selector: '[szHeading]'
            },] }
];
/** @nocollapse */
SzPanelHeadingDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: SzPanelComponent, decorators: [{ type: Optional }] },
    { type: SzAnonymousPanelComponent, decorators: [{ type: Optional }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TemplateHostDirective {
    /**
     * @param {?} viewRef
     */
    constructor(viewRef) {
        this.viewRef = viewRef;
    }
    /**
     * @param {?} templateRef
     * @return {?}
     */
    set szTemplateHost(templateRef) {
        this._szTemplateHost = templateRef;
        if (templateRef) {
            this.viewRef.createEmbeddedView(templateRef);
        }
    }
    /**
     * @return {?}
     */
    get szTemplateHost() {
        return this._szTemplateHost;
    }
}
TemplateHostDirective.decorators = [
    { type: Directive, args: [{
                selector: '[szTemplateHost]'
            },] }
];
/** @nocollapse */
TemplateHostDirective.ctorParameters = () => [
    { type: ViewContainerRef }
];
TemplateHostDirective.propDecorators = {
    szTemplateHost: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CoreModule {
}
CoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    TemplateHostDirective
                ],
                exports: [
                    TemplateHostDirective
                ],
                providers: [
                    SzPanelService,
                    WindowRefService
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SzHeaderTemplateDirective {
    /**
     * @param {?} templateRef
     * @param {?} panel
     * @param {?} anonPanel
     */
    constructor(templateRef, panel, anonPanel) {
        (anonPanel || panel).headerTemplate = templateRef;
    }
}
SzHeaderTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[szHeaderTemplate]'
            },] }
];
/** @nocollapse */
SzHeaderTemplateDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: SzPanelComponent, decorators: [{ type: Optional }] },
    { type: SzAnonymousPanelComponent, decorators: [{ type: Optional }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Should be used to mark <template> element as a template for tab heading
 */
class SzCloseContentDirective {
    /**
     * @param {?} templateRef
     * @param {?} panel
     * @param {?} anonPanel
     */
    constructor(templateRef, panel, anonPanel) {
        (panel || anonPanel).closeContentRef = templateRef;
    }
}
SzCloseContentDirective.decorators = [
    { type: Directive, args: [{
                selector: '[szCloseContent]'
            },] }
];
/** @nocollapse */
SzCloseContentDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: SzPanelComponent, decorators: [{ type: Optional }] },
    { type: SzAnonymousPanelComponent, decorators: [{ type: Optional }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SliderizrModule {
}
SliderizrModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SzPanelComponent,
                    SzPanelHeadingDirective,
                    SzPanelHostComponent,
                    ChildPanelHostDirective,
                    SzAnonymousPanelComponent,
                    SzCloseContentDirective,
                    SzHeaderTemplateDirective
                ],
                imports: [
                    CommonModule,
                    RouterModule,
                    CoreModule
                ],
                exports: [
                    SzPanelComponent,
                    SzPanelHeadingDirective,
                    SzPanelHostComponent,
                    SzAnonymousPanelComponent,
                    SzCloseContentDirective,
                    SzHeaderTemplateDirective
                ]
            },] }
];

export { SliderizrModule, SzActivePanel, SzAnonymousPanelComponent, SzPanelComponent, SzPanelHeadingDirective, SzPanelHostComponent, SzPanelService, BasePanel as ɵa, WindowRefService as ɵb, PANEL_ROUTE_ANIMATION as ɵc, ChildPanelHostDirective as ɵd, SzCloseContentDirective as ɵe, SzHeaderTemplateDirective as ɵf, CoreModule as ɵg, TemplateHostDirective as ɵh };
//# sourceMappingURL=ng-sliderizr.js.map
