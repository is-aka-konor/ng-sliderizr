/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BasePanel } from '../base-panel';
import { SzPanelHostComponent } from './../../panel-host/panel-host.component';
import { ChildPanelHostDirective } from './../../child-panel-host/child-panel-host.directive';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Component, ElementRef, EventEmitter, Injector, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PANEL_ROUTE_ANIMATION } from '../../core/animations/panel-route.animation';
import { SzPanelService } from '../../core/panel/panel.service';
export class SzPanelComponent extends BasePanel {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctc2xpZGVyaXpyLyIsInNvdXJjZXMiOlsibGliL3BhbmVscy9wYW5lbC9wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDOUYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkUsT0FBTyxFQUNILFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFFBQVEsRUFHUixRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDcEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFcEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBWWhFLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxTQUFTOzs7Ozs7Ozs7SUFZM0MsWUFDZ0IsTUFBNEIsRUFDaEMsYUFBNkIsRUFDckMsUUFBa0IsRUFDbEIsT0FBbUIsRUFDWCxNQUFzQixFQUN0QixPQUFlO1FBRXZCLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBTnpCLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQUc3QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBaEJuQixnQkFBVyxHQUFpQixJ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LE1BQU07Ozs2QkFnQzFCLFNBQVMsU0FBQyx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MkJBQ25ELFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOytCQUN4QyxNQUFNOytCQUNOLE1BQU07Ozs7Ozs7SUFMUCx1Q0FBd0M7Ozs7O0lBQ3hDLHVDQUF1RDs7SUFDdkQsMENBQThGOzs7OztJQUM5Rix3Q0FBOEU7O0lBQzlFLDRDQUFxRDs7SUFDckQsNENBQXFEOzs7OztJQVFqRCx5Q0FBcUM7Ozs7O0lBR3JDLGtDQUE4Qjs7Ozs7SUFDOUIsbUNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZVBhbmVsIH0gZnJvbSAnLi4vYmFzZS1wYW5lbCc7XHJcbmltcG9ydCB7IFN6UGFuZWxIb3N0Q29tcG9uZW50IH0gZnJvbSAnLi8uLi8uLi9wYW5lbC1ob3N0L3BhbmVsLWhvc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hpbGRQYW5lbEhvc3REaXJlY3RpdmUgfSBmcm9tICcuLy4uLy4uL2NoaWxkLXBhbmVsLWhvc3QvY2hpbGQtcGFuZWwtaG9zdC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyLCBSb3V0ZXJPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIEluamVjdG9yLFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgT25Jbml0LFxyXG4gICAgT3B0aW9uYWwsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBWaWV3Q2hpbGQsXHJcbiAgICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgUEFORUxfUk9VVEVfQU5JTUFUSU9OIH0gZnJvbSAnLi4vLi4vY29yZS9hbmltYXRpb25zL3BhbmVsLXJvdXRlLmFuaW1hdGlvbic7XHJcbmltcG9ydCB7IFN6QWN0aXZlUGFuZWwgfSBmcm9tICcuLi8uLi9jb3JlL3BhbmVsL2FjdGl2ZS1wYW5lbCc7XHJcbmltcG9ydCB7IFN6UGFuZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9wYW5lbC9wYW5lbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJy4uLy4uL2NvcmUvZ2VuZXJpYy1jb21wb25lbnQtdHlwZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3otcGFuZWwnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3BhbmVsLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3BhbmVsLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBhbmltYXRpb25zOiBbXHJcbiAgICAgICAgUEFORUxfUk9VVEVfQU5JTUFUSU9OXHJcbiAgICBdLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3pQYW5lbENvbXBvbmVudCBleHRlbmRzIEJhc2VQYW5lbCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIHByaXZhdGUgX2FjdGl2ZUFub246IFN6QWN0aXZlUGFuZWw8YW55PjtcclxuICAgIHByaXZhdGUgX2Rlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICAgIEBWaWV3Q2hpbGQoQ2hpbGRQYW5lbEhvc3REaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIGNoaWxkUGFuZWxIb3N0OiBDaGlsZFBhbmVsSG9zdERpcmVjdGl2ZTtcclxuICAgIEBWaWV3Q2hpbGQoUm91dGVyT3V0bGV0LCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIF9jaGlsZE91dGxldDogUm91dGVyT3V0bGV0O1xyXG4gICAgQE91dHB1dCgpIGFmdGVyQ2hpbGRDbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBhZnRlckNoaWxkT3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gICAgcHVibGljIGdldCBjaGlsZENvbXBvbmVudCgpOiBPYmplY3Qge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jaGlsZE91dGxldC5jb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IgKFxyXG4gICAgICAgIEBPcHRpb25hbCgpIHBhcmVudDogU3pQYW5lbEhvc3RDb21wb25lbnQsXHJcbiAgICAgICAgcHJpdmF0ZSBfcGFuZWxTZXJ2aWNlOiBTelBhbmVsU2VydmljZSxcclxuICAgICAgICBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICAgICAgZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXJcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKHBhcmVudCwgZWxlbWVudCwgaW5qZWN0b3IpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9jYW5DbG9zZSA9IHRoaXMuX3JvdXRlLnJvb3QgIT09IHRoaXMuX3JvdXRlLnBhcmVudDtcclxuXHJcbiAgICAgICAgdGhpcy5fcm91dGUucGFyYW1zLnBpcGUoXHJcbiAgICAgICAgICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkJClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5zZXRBY3RpdmVQYW5lbCh0aGlzLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPcGVuIGFuIGFub255bW91cyBwYW5lbFxyXG4gICAgICogQHBhcmFtIGNvbnRlbnQgVGhlIGNvbXBvbmVudCByZXByZXNlbnRpbmcgdGhlIGFub24gcGFuZWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9wZW5DaGlsZDxUPihjb250ZW50OiBDb21wb25lbnRUeXBlPFQ+KTogU3pBY3RpdmVQYW5lbDxUPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NoaWxkT3V0bGV0LmlzQWN0aXZhdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VDaGlsZFJvdXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9hY3RpdmVBbm9uID0gdGhpcy5fcGFuZWxTZXJ2aWNlLm9wZW48VD4oY29udGVudCwgdGhpcywgdGhpcy5faW5qZWN0b3IpO1xyXG5cclxuICAgICAgICB0aGlzLl9hY3RpdmVBbm9uLmFmdGVyQ2xvc2VkXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50LnNldEFjdGl2ZVBhbmVsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aXZlQW5vbiA9IG51bGw7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9wYXJlbnQuc2V0QWN0aXZlUGFuZWwodGhpcy5fYWN0aXZlQW5vbi5jb21wb25lbnRJbnN0YW5jZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmVBbm9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xvc2UgdGhlIHBhbmVsXHJcbiAgICAgKiBUaGlzIHJvdXRlcyB0byB0aGUgcGFyZW50IHBhbmVsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbG9zZSgpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycuLyddLCB7IHJlbGF0aXZlVG86IHRoaXMuX3JvdXRlLnBhcmVudCB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsb3NlcyBhbGwgY2hpbGQgcGFuZWxzXHJcbiAgICAgKiBFc3NlbnRpYWxseSB0aGlzIHJvdXRlcyB0byB0aGUgY3VycmVudCBwYW5lbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xvc2VDaGlsZFJvdXRlKCkge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy4vJ10sIHsgcmVsYXRpdmVUbzogdGhpcy5fcm91dGUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3llZCQubmV4dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3Igd2hlbiB0aGUgcm91dGVyIG91dGxldCBkZWFjdGl2YXRlc1xyXG4gICAgICogQHBhcmFtIGNvbXBvbmVudCBUaGUgY29tcG9uZW50IHRoYXQgd2FzIGRlYWN0aXZhdGVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbkNoaWxkRGVhY3RpdmF0ZShjb21wb25lbnQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3BhcmVudC5zZXRBY3RpdmVQYW5lbCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFmdGVyQ2hpbGRDbG9zZWQuZW1pdChjb21wb25lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3Igd2hlbiB0aGUgcm91dGVyIG91dGxldCBhY3RpdmF0ZXNcclxuICAgICAqIEBwYXJhbSBjb21wb25lbnQgVGhlIGNvbXBvbmVudCB0aGF0IHRoZSBvdXRsZXQgd2FzIGFjdGl2YXRlZCB3aXRoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbkNoaWxkQWN0aXZhdGUoY29tcG9uZW50OiBhbnkpIHtcclxuICAgICAgICB0aGlzLmFmdGVyQ2hpbGRPcGVuZWQuZW1pdChjb21wb25lbnQpO1xyXG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmVBbm9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FjdGl2ZUFub24uY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19