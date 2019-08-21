/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BasePanel } from '../base-panel';
import { SzPanelHostComponent } from './../../panel-host/panel-host.component';
import { ChildPanelHostDirective } from './../../child-panel-host/child-panel-host.directive';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Component, ElementRef, EventEmitter, Injector, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PANEL_ROUTE_ANIMATION } from '../../core/animations/panel-route.animation';
import { SzPanelService } from '../../core/panel/panel.service';
var SzPanelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SzPanelComponent, _super);
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
export { SzPanelComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SzPanelComponent.prototype._activeAnon;
    /**
     * @type {?}
     * @private
     */
    SzPanelComponent.prototype._destroyed$;
    /** @type {?} */
    SzPanelComponent.prototype.childPanelHost;
    /**
     * @type {?}
     * @private
     */
    SzPanelComponent.prototype._childOutlet;
    /** @type {?} */
    SzPanelComponent.prototype.afterChildClosed;
    /** @type {?} */
    SzPanelComponent.prototype.afterChildOpened;
    /**
     * @type {?}
     * @private
     */
    SzPanelComponent.prototype._panelService;
    /**
     * @type {?}
     * @private
     */
    SzPanelComponent.prototype._route;
    /**
     * @type {?}
     * @private
     */
    SzPanelComponent.prototype._router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctc2xpZGVyaXpyLyIsInNvdXJjZXMiOlsibGliL3BhbmVscy9wYW5lbC9wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZFLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixRQUFRLEVBR1IsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRXBGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUdoRTtJQVNzQyw0Q0FBUztJQVkzQywwQkFDZ0IsTUFBNEIsRUFDaEMsYUFBNkIsRUFDckMsUUFBa0IsRUFDbEIsT0FBbUIsRUFDWCxNQUFzQixFQUN0QixPQUFlO1FBTjNCLFlBUUksa0JBQU0sTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsU0FDbkM7UUFQVyxtQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7UUFHN0IsWUFBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsYUFBTyxHQUFQLE9BQU8sQ0FBUTtRQWhCbkIsaUJBQVcsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztR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UixxQkFBcUI7cUJBQ3hCO29CQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDeEM7Ozs7Z0JBOUJRLG9CQUFvQix1QkE0Q3BCLFFBQVE7Z0JBekJSLGNBQWM7Z0JBWm5CLFFBQVE7Z0JBRlIsVUFBVTtnQkFITCxjQUFjO2dCQUFFLE1BQU07OztpQ0FnQzFCLFNBQVMsU0FBQyx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7K0JBQ25ELFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO21DQUN4QyxNQUFNO21DQUNOLE1BQU07O0lBMEZYLHVCQUFDO0NBQUEsQUF6R0QsQ0FTc0MsU0FBUyxHQWdHOUM7U0FoR1ksZ0JBQWdCOzs7Ozs7SUFDekIsdUNBQXdDOzs7OztJQUN4Qyx1Q0FBdUQ7O0lBQ3ZELDBDQUE4Rjs7Ozs7SUFDOUYsd0NBQThFOztJQUM5RSw0Q0FBcUQ7O0lBQ3JELDRDQUFxRDs7Ozs7SUFRakQseUNBQXFDOzs7OztJQUdyQyxrQ0FBOEI7Ozs7O0lBQzlCLG1DQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VQYW5lbCB9IGZyb20gJy4uL2Jhc2UtcGFuZWwnO1xyXG5pbXBvcnQgeyBTelBhbmVsSG9zdENvbXBvbmVudCB9IGZyb20gJy4vLi4vLi4vcGFuZWwtaG9zdC9wYW5lbC1ob3N0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoaWxkUGFuZWxIb3N0RGlyZWN0aXZlIH0gZnJvbSAnLi8uLi8uLi9jaGlsZC1wYW5lbC1ob3N0L2NoaWxkLXBhbmVsLWhvc3QuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciwgUm91dGVyT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBJbmplY3RvcixcclxuICAgIE9uRGVzdHJveSxcclxuICAgIE9uSW5pdCxcclxuICAgIE9wdGlvbmFsLFxyXG4gICAgT3V0cHV0LFxyXG4gICAgVmlld0NoaWxkLFxyXG4gICAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFBBTkVMX1JPVVRFX0FOSU1BVElPTiB9IGZyb20gJy4uLy4uL2NvcmUvYW5pbWF0aW9ucy9wYW5lbC1yb3V0ZS5hbmltYXRpb24nO1xyXG5pbXBvcnQgeyBTekFjdGl2ZVBhbmVsIH0gZnJvbSAnLi4vLi4vY29yZS9wYW5lbC9hY3RpdmUtcGFuZWwnO1xyXG5pbXBvcnQgeyBTelBhbmVsU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvcGFuZWwvcGFuZWwuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICcuLi8uLi9jb3JlL2dlbmVyaWMtY29tcG9uZW50LXR5cGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3N6LXBhbmVsJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9wYW5lbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9wYW5lbC5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgYW5pbWF0aW9uczogW1xyXG4gICAgICAgIFBBTkVMX1JPVVRFX0FOSU1BVElPTlxyXG4gICAgXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIFN6UGFuZWxDb21wb25lbnQgZXh0ZW5kcyBCYXNlUGFuZWwgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIF9hY3RpdmVBbm9uOiBTekFjdGl2ZVBhbmVsPGFueT47XHJcbiAgICBwcml2YXRlIF9kZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgICBAVmlld0NoaWxkKENoaWxkUGFuZWxIb3N0RGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSBjaGlsZFBhbmVsSG9zdDogQ2hpbGRQYW5lbEhvc3REaXJlY3RpdmU7XHJcbiAgICBAVmlld0NoaWxkKFJvdXRlck91dGxldCwgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBfY2hpbGRPdXRsZXQ6IFJvdXRlck91dGxldDtcclxuICAgIEBPdXRwdXQoKSBhZnRlckNoaWxkQ2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgYWZ0ZXJDaGlsZE9wZW5lZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgY2hpbGRDb21wb25lbnQoKTogT2JqZWN0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGRPdXRsZXQuY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yIChcclxuICAgICAgICBAT3B0aW9uYWwoKSBwYXJlbnQ6IFN6UGFuZWxIb3N0Q29tcG9uZW50LFxyXG4gICAgICAgIHByaXZhdGUgX3BhbmVsU2VydmljZTogU3pQYW5lbFNlcnZpY2UsXHJcbiAgICAgICAgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgICAgIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihwYXJlbnQsIGVsZW1lbnQsIGluamVjdG9yKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5fY2FuQ2xvc2UgPSB0aGlzLl9yb3V0ZS5yb290ICE9PSB0aGlzLl9yb3V0ZS5wYXJlbnQ7XHJcblxyXG4gICAgICAgIHRoaXMuX3JvdXRlLnBhcmFtcy5waXBlKFxyXG4gICAgICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCQpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQuc2V0QWN0aXZlUGFuZWwodGhpcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3BlbiBhbiBhbm9ueW1vdXMgcGFuZWxcclxuICAgICAqIEBwYXJhbSBjb250ZW50IFRoZSBjb21wb25lbnQgcmVwcmVzZW50aW5nIHRoZSBhbm9uIHBhbmVsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvcGVuQ2hpbGQ8VD4oY29udGVudDogQ29tcG9uZW50VHlwZTxUPik6IFN6QWN0aXZlUGFuZWw8VD4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9jaGlsZE91dGxldC5pc0FjdGl2YXRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlQ2hpbGRSb3V0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fYWN0aXZlQW5vbiA9IHRoaXMuX3BhbmVsU2VydmljZS5vcGVuPFQ+KGNvbnRlbnQsIHRoaXMsIHRoaXMuX2luamVjdG9yKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYWN0aXZlQW5vbi5hZnRlckNsb3NlZFxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5zZXRBY3RpdmVQYW5lbCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FjdGl2ZUFub24gPSBudWxsO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5fcGFyZW50LnNldEFjdGl2ZVBhbmVsKHRoaXMuX2FjdGl2ZUFub24uY29tcG9uZW50SW5zdGFuY2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlQW5vbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsb3NlIHRoZSBwYW5lbFxyXG4gICAgICogVGhpcyByb3V0ZXMgdG8gdGhlIHBhcmVudCBwYW5lbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnLi8nXSwgeyByZWxhdGl2ZVRvOiB0aGlzLl9yb3V0ZS5wYXJlbnQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9zZXMgYWxsIGNoaWxkIHBhbmVsc1xyXG4gICAgICogRXNzZW50aWFsbHkgdGhpcyByb3V0ZXMgdG8gdGhlIGN1cnJlbnQgcGFuZWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNsb3NlQ2hpbGRSb3V0ZSgpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycuLyddLCB7IHJlbGF0aXZlVG86IHRoaXMuX3JvdXRlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLl9kZXN0cm95ZWQkLm5leHQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIHdoZW4gdGhlIHJvdXRlciBvdXRsZXQgZGVhY3RpdmF0ZXNcclxuICAgICAqIEBwYXJhbSBjb21wb25lbnQgVGhlIGNvbXBvbmVudCB0aGF0IHdhcyBkZWFjdGl2YXRlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25DaGlsZERlYWN0aXZhdGUoY29tcG9uZW50OiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9wYXJlbnQuc2V0QWN0aXZlUGFuZWwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hZnRlckNoaWxkQ2xvc2VkLmVtaXQoY29tcG9uZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIHdoZW4gdGhlIHJvdXRlciBvdXRsZXQgYWN0aXZhdGVzXHJcbiAgICAgKiBAcGFyYW0gY29tcG9uZW50IFRoZSBjb21wb25lbnQgdGhhdCB0aGUgb3V0bGV0IHdhcyBhY3RpdmF0ZWQgd2l0aFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25DaGlsZEFjdGl2YXRlKGNvbXBvbmVudDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5hZnRlckNoaWxkT3BlbmVkLmVtaXQoY29tcG9uZW50KTtcclxuICAgICAgICBpZiAodGhpcy5fYWN0aXZlQW5vbikge1xyXG4gICAgICAgICAgICB0aGlzLl9hY3RpdmVBbm9uLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==