import { Subject } from 'rxjs';
import { Injectable, ReflectiveInjector, ComponentFactoryResolver, Injector, HostBinding, Input, HostListener, Component, ViewEncapsulation, ElementRef, ChangeDetectorRef, Directive, ViewContainerRef, EventEmitter, Optional, ViewChild, Output, TemplateRef, NgModule } from '@angular/core';
import { __extends } from 'tslib';
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
var SzActivePanel = /** @class */ (function () {
    function SzActivePanel() {
        this._afterClosed = new Subject();
    }
    Object.defineProperty(SzActivePanel.prototype, "componentInstance", {
        get: /**
         * @return {?}
         */
        function () {
            return this.componentRef ? this.componentRef.instance : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} result
     * @return {?}
     */
    SzActivePanel.prototype.close = /**
     * @param {?=} result
     * @return {?}
     */
    function (result) {
        var _this = this;
        if (this.beforeClose) {
            this.beforeClose().then((/**
             * @return {?}
             */
            function () {
                _this.internalClose();
            }));
            return;
        }
        this.internalClose(result);
    };
    /**
     * @private
     * @param {?=} result
     * @return {?}
     */
    SzActivePanel.prototype.internalClose = /**
     * @private
     * @param {?=} result
     * @return {?}
     */
    function (result) {
        this.componentRef.destroy();
        this._afterClosed.next(result);
        this._afterClosed.complete();
    };
    Object.defineProperty(SzActivePanel.prototype, "afterClosed", {
        get: /**
         * @return {?}
         */
        function () {
            return this._afterClosed.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    SzActivePanel.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SzActivePanel.ctorParameters = function () { return []; };
    return SzActivePanel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SzPanelService = /** @class */ (function () {
    function SzPanelService(_componentFactoryResolver, _injector) {
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
    SzPanelService.prototype.open = /**
     * @template T
     * @param {?} content
     * @param {?} host
     * @param {?=} injector
     * @return {?}
     */
    function (content, host, injector) {
        /** @type {?} */
        var afterClosed = new Subject();
        /** @type {?} */
        var activePanel = new SzActivePanel();
        injector = injector ? injector : this._injector;
        /** @type {?} */
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(content);
        /** @type {?} */
        var modalContentInjector = ReflectiveInjector.resolveAndCreate([{ provide: SzActivePanel, useValue: activePanel }], injector);
        /** @type {?} */
        var viewContainerRef = host.childPanelHost.viewContainerRef;
        viewContainerRef.clear();
        /** @type {?} */
        var componentRef = viewContainerRef.createComponent(componentFactory, null, modalContentInjector);
        activePanel.componentRef = componentRef;
        return activePanel;
    };
    SzPanelService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SzPanelService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: Injector }
    ]; };
    return SzPanelService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var BasePanel = /** @class */ (function () {
    function BasePanel(_parent, _element, _injector) {
        this._parent = _parent;
        this._element = _element;
        this._injector = _injector;
        this.routeAnimation = true;
        this.isActive = false;
        this.hostClass = true;
        this.closeText = 'close';
    }
    Object.defineProperty(BasePanel.prototype, "canClose", {
        get: /**
         * @return {?}
         */
        function () {
            return this._canClose;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasePanel.prototype, "nativeElement", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this._element.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} args
     * @return {?}
     */
    BasePanel.prototype.onPanelClick = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        if (this.isElementChild((/** @type {?} */ (args.target)))) {
            this._parent.setActivePanel(this);
            this.scrollVisible();
        }
    };
    /**
     * @private
     * @param {?} target
     * @return {?}
     */
    BasePanel.prototype.isElementChild = /**
     * @private
     * @param {?} target
     * @return {?}
     */
    function (target) {
        while (target && target.tagName !== 'SZ-PANEL') {
            target = target.parentElement;
        }
        return target && target === this._element.nativeElement;
    };
    /**
     * @return {?}
     */
    BasePanel.prototype.onAnimationComplete = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Set scroll in a timeout otherwise the DOM isnt ready and the scroll doesnt work
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.scrollVisible();
        }), 0);
    };
    /**
     * @return {?}
     */
    BasePanel.prototype.scrollVisible = /**
     * @return {?}
     */
    function () {
        this._parent.scrollLeft = this.getScrollAmount();
    };
    /**
     * @private
     * @return {?}
     */
    BasePanel.prototype.getOffsetLeft = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var box = this.nativeElement.getBoundingClientRect();
        return (box.left - this._parent.boundingBox.left) + this._parent.scrollLeft;
    };
    /**
     * @private
     * @return {?}
     */
    BasePanel.prototype.getScrollAmount = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollLeft = this._parent.scrollLeft;
        /** @type {?} */
        var parentWidth = this._parent.outerWidth;
        /** @type {?} */
        var panelWidth = this.nativeElement.offsetWidth;
        // Calculate offset left from previous sibling as the current element may be in the wrong position due to animations
        /** @type {?} */
        var offsetLeft = this.getOffsetLeft();
        // The distance from the edge of the panel host to the start of the panel
        /** @type {?} */
        var visibleRight = offsetLeft + panelWidth;
        // The right most edge of the panel relative to the parent panel
        /** @type {?} */
        var scroll = scrollLeft;
        if (scrollLeft > offsetLeft) {
            scroll = offsetLeft;
        }
        else if (scrollLeft < (visibleRight - parentWidth)) {
            // Add an extra 50px on the end so the panel isn't butted up against the side of the browser
            scroll = visibleRight - parentWidth + 50;
        }
        return scroll;
    };
    BasePanel.propDecorators = {
        routeAnimation: [{ type: HostBinding, args: ['@panelRouteAnimation',] }],
        isActive: [{ type: HostBinding, args: ['class.active',] }],
        hostClass: [{ type: HostBinding, args: ['class.sz-panel',] }],
        heading: [{ type: Input }],
        closeText: [{ type: Input }],
        onPanelClick: [{ type: HostListener, args: ['click', ['$event'],] }],
        onAnimationComplete: [{ type: HostListener, args: ['@panelRouteAnimation.done',] }]
    };
    return BasePanel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WindowRefService = /** @class */ (function () {
    function WindowRefService() {
    }
    Object.defineProperty(WindowRefService.prototype, "nativeWindow", {
        get: /**
         * @return {?}
         */
        function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} element
     * @param {?} to
     * @param {?} duration
     * @return {?}
     */
    WindowRefService.prototype.scrollTo = /**
     * @param {?} element
     * @param {?} to
     * @param {?} duration
     * @return {?}
     */
    function (element, to, duration) {
        var _this = this;
        if (this._scrollTimeoutId) {
            window.clearTimeout(this._scrollTimeoutId);
            this._scrollTimeoutId = null;
        }
        if (duration <= 0) {
            return;
        }
        /** @type {?} */
        var difference = to - element.scrollLeft;
        /** @type {?} */
        var perTick = difference / duration * 10;
        this._scrollTimeoutId = window.setTimeout((/**
         * @return {?}
         */
        function () {
            _this._scrollTimeoutId = null;
            element.scrollLeft = element.scrollLeft + perTick;
            if (element.scrollLeft === to) {
                return;
            }
            _this.scrollTo(element, to, duration - 10);
        }), 10);
    };
    WindowRefService.decorators = [
        { type: Injectable }
    ];
    return WindowRefService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SzPanelHostComponent = /** @class */ (function () {
    function SzPanelHostComponent(element, _cdr, _windowRef) {
        this.element = element;
        this._cdr = _cdr;
        this._windowRef = _windowRef;
    }
    Object.defineProperty(SzPanelHostComponent.prototype, "boundingBox", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nativeElement.getBoundingClientRect();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SzPanelHostComponent.prototype, "nativeElement", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.element.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SzPanelHostComponent.prototype, "outerWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nativeElement.offsetWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SzPanelHostComponent.prototype, "scrollLeft", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nativeElement.scrollLeft;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._windowRef.scrollTo(this.nativeElement, value, 200);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} panel
     * @param {?=} hasPriority
     * @return {?}
     */
    SzPanelHostComponent.prototype.setActivePanel = /**
     * @param {?} panel
     * @param {?=} hasPriority
     * @return {?}
     */
    function (panel, hasPriority) {
        var _this = this;
        if (hasPriority === void 0) { hasPriority = false; }
        if (hasPriority) {
            this._windowRef.nativeWindow.setTimeout((/**
             * @return {?}
             */
            function () {
                _this.setActivePanel(panel);
                _this._cdr.markForCheck();
            }));
        }
        else {
            if (this._activePanel) {
                this._activePanel.isActive = false;
            }
            this._activePanel = panel;
            this._activePanel.isActive = true;
        }
    };
    SzPanelHostComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sz-panel-host',
                    template: "<ng-content></ng-content>",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["sz-panel-host{white-space:nowrap;position:fixed;top:100px;right:0;bottom:0;left:0;overflow:auto}"]
                }] }
    ];
    /** @nocollapse */
    SzPanelHostComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: WindowRefService }
    ]; };
    return SzPanelHostComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ChildPanelHostDirective = /** @class */ (function () {
    function ChildPanelHostDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    ChildPanelHostDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[szChildPanelHost]'
                },] }
    ];
    /** @nocollapse */
    ChildPanelHostDirective.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    return ChildPanelHostDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PANEL_ROUTE_ANIMATION = trigger('panelRouteAnimation', [
    transition(':enter', [
        style({ transform: 'translateX(-100%)', zIndex: -1 }),
        animate('200ms', style({ transform: 'translateX(0%)', zIndex: -1 }))
    ])
]);
/** @type {?} */
var PANEL_EXIT_ANIMATION = trigger('panelExitAnimation', [
    transition(":leave", [
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
var SzPanelComponent = /** @class */ (function (_super) {
    __extends(SzPanelComponent, _super);
    function SzPanelComponent(parent, _panelService, injector, element, _route, _router) {
        var _this = _super.call(this, parent, element, injector) || this;
        _this._panelService = _panelService;
        _this._route = _route;
        _this._router = _router;
        _this._destroyed$ = new Subject();
        _this.afterChildClosed = new EventEmitter();
        _this.afterChildOpened = new EventEmitter();
        return _this;
    }
    Object.defineProperty(SzPanelComponent.prototype, "childComponent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._childOutlet.component;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SzPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._canClose = this._route.root !== this._route.parent;
        this._route.params.pipe(takeUntil(this._destroyed$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this._parent.setActivePanel(_this, true);
        }));
    };
    /**
     * Open an anonymous panel
     * @param content The component representing the anon panel
     */
    /**
     * Open an anonymous panel
     * @template T
     * @param {?} content The component representing the anon panel
     * @return {?}
     */
    SzPanelComponent.prototype.openChild = /**
     * Open an anonymous panel
     * @template T
     * @param {?} content The component representing the anon panel
     * @return {?}
     */
    function (content) {
        var _this = this;
        if (this._childOutlet.isActivated) {
            this.closeChildRoute();
        }
        this._activeAnon = this._panelService.open(content, this, this._injector);
        this._activeAnon.afterClosed
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this._parent.setActivePanel(_this);
            _this._activeAnon = null;
        }));
        this._parent.setActivePanel(this._activeAnon.componentInstance);
        return this._activeAnon;
    };
    /**
     * Close the panel
     * This routes to the parent panel
     */
    /**
     * Close the panel
     * This routes to the parent panel
     * @return {?}
     */
    SzPanelComponent.prototype.close = /**
     * Close the panel
     * This routes to the parent panel
     * @return {?}
     */
    function () {
        this._router.navigate(['./'], { relativeTo: this._route.parent });
    };
    /**
     * Closes all child panels
     * Essentially this routes to the current panel
     */
    /**
     * Closes all child panels
     * Essentially this routes to the current panel
     * @return {?}
     */
    SzPanelComponent.prototype.closeChildRoute = /**
     * Closes all child panels
     * Essentially this routes to the current panel
     * @return {?}
     */
    function () {
        this._router.navigate(['./'], { relativeTo: this._route });
    };
    /**
     * @return {?}
     */
    SzPanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed$.next();
    };
    /**
     * Event handler for when the router outlet deactivates
     * @param component The component that was deactivated
     */
    /**
     * Event handler for when the router outlet deactivates
     * @param {?} component The component that was deactivated
     * @return {?}
     */
    SzPanelComponent.prototype.onChildDeactivate = /**
     * Event handler for when the router outlet deactivates
     * @param {?} component The component that was deactivated
     * @return {?}
     */
    function (component) {
        this._parent.setActivePanel(this);
        this.afterChildClosed.emit(component);
    };
    /**
     * Event handler for when the router outlet activates
     * @param component The component that the outlet was activated with
     */
    /**
     * Event handler for when the router outlet activates
     * @param {?} component The component that the outlet was activated with
     * @return {?}
     */
    SzPanelComponent.prototype.onChildActivate = /**
     * Event handler for when the router outlet activates
     * @param {?} component The component that the outlet was activated with
     * @return {?}
     */
    function (component) {
        this.afterChildOpened.emit(component);
        if (this._activeAnon) {
            this._activeAnon.close();
        }
    };
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
    SzPanelComponent.ctorParameters = function () { return [
        { type: SzPanelHostComponent, decorators: [{ type: Optional }] },
        { type: SzPanelService },
        { type: Injector },
        { type: ElementRef },
        { type: ActivatedRoute },
        { type: Router }
    ]; };
    SzPanelComponent.propDecorators = {
        childPanelHost: [{ type: ViewChild, args: [ChildPanelHostDirective, { static: true },] }],
        _childOutlet: [{ type: ViewChild, args: [RouterOutlet, { static: true },] }],
        afterChildClosed: [{ type: Output }],
        afterChildOpened: [{ type: Output }]
    };
    return SzPanelComponent;
}(BasePanel));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SzAnonymousPanelComponent = /** @class */ (function (_super) {
    __extends(SzAnonymousPanelComponent, _super);
    function SzAnonymousPanelComponent(injector, element, parent, _pi) {
        var _this = _super.call(this, parent, element, injector) || this;
        _this._pi = _pi;
        _this._canClose = true;
        return _this;
    }
    /**
     * @return {?}
     */
    SzAnonymousPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._parent.setActivePanel(this, true);
    };
    /**
     * @return {?}
     */
    SzAnonymousPanelComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this._pi.close();
    };
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
    SzAnonymousPanelComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: ElementRef },
        { type: SzPanelHostComponent, decorators: [{ type: Optional }] },
        { type: SzActivePanel, decorators: [{ type: Optional }] }
    ]; };
    return SzAnonymousPanelComponent;
}(BasePanel));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SzPanelHeadingDirective = /** @class */ (function () {
    function SzPanelHeadingDirective(templateRef, panel, anonPanel) {
        (anonPanel || panel).headingRef = templateRef;
    }
    SzPanelHeadingDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[szHeading]'
                },] }
    ];
    /** @nocollapse */
    SzPanelHeadingDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: SzPanelComponent, decorators: [{ type: Optional }] },
        { type: SzAnonymousPanelComponent, decorators: [{ type: Optional }] }
    ]; };
    return SzPanelHeadingDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TemplateHostDirective = /** @class */ (function () {
    function TemplateHostDirective(viewRef) {
        this.viewRef = viewRef;
    }
    Object.defineProperty(TemplateHostDirective.prototype, "szTemplateHost", {
        get: /**
         * @return {?}
         */
        function () {
            return this._szTemplateHost;
        },
        set: /**
         * @param {?} templateRef
         * @return {?}
         */
        function (templateRef) {
            this._szTemplateHost = templateRef;
            if (templateRef) {
                this.viewRef.createEmbeddedView(templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    TemplateHostDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[szTemplateHost]'
                },] }
    ];
    /** @nocollapse */
    TemplateHostDirective.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    TemplateHostDirective.propDecorators = {
        szTemplateHost: [{ type: Input }]
    };
    return TemplateHostDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CoreModule = /** @class */ (function () {
    function CoreModule() {
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
    return CoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SzHeaderTemplateDirective = /** @class */ (function () {
    function SzHeaderTemplateDirective(templateRef, panel, anonPanel) {
        (anonPanel || panel).headerTemplate = templateRef;
    }
    SzHeaderTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[szHeaderTemplate]'
                },] }
    ];
    /** @nocollapse */
    SzHeaderTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: SzPanelComponent, decorators: [{ type: Optional }] },
        { type: SzAnonymousPanelComponent, decorators: [{ type: Optional }] }
    ]; };
    return SzHeaderTemplateDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Should be used to mark <template> element as a template for tab heading
 */
var SzCloseContentDirective = /** @class */ (function () {
    function SzCloseContentDirective(templateRef, panel, anonPanel) {
        (panel || anonPanel).closeContentRef = templateRef;
    }
    SzCloseContentDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[szCloseContent]'
                },] }
    ];
    /** @nocollapse */
    SzCloseContentDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: SzPanelComponent, decorators: [{ type: Optional }] },
        { type: SzAnonymousPanelComponent, decorators: [{ type: Optional }] }
    ]; };
    return SzCloseContentDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SliderizrModule = /** @class */ (function () {
    function SliderizrModule() {
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
    return SliderizrModule;
}());

export { SliderizrModule, SzActivePanel, SzAnonymousPanelComponent, SzPanelComponent, SzPanelHeadingDirective, SzPanelHostComponent, SzPanelService, BasePanel as ɵa, WindowRefService as ɵb, PANEL_ROUTE_ANIMATION as ɵc, ChildPanelHostDirective as ɵd, SzCloseContentDirective as ɵe, SzHeaderTemplateDirective as ɵf, CoreModule as ɵg, TemplateHostDirective as ɵh };
//# sourceMappingURL=ng-sliderizr.js.map
