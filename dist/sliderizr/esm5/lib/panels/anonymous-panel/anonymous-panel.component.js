/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SzPanelHostComponent } from './../../panel-host/panel-host.component';
import { Component, Injector, ElementRef, Optional, ViewEncapsulation } from '@angular/core';
import { BasePanel } from '../base-panel';
import { PANEL_ROUTE_ANIMATION } from '../../core/animations/panel-route.animation';
import { SzActivePanel } from '../../core/panel/active-panel';
var SzAnonymousPanelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SzAnonymousPanelComponent, _super);
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
export { SzAnonymousPanelComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SzAnonymousPanelComponent.prototype._pi;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXNsaWRlcml6ci8iLCJzb3VyY2VzIjpbImxpYi9wYW5lbHMvYW5vbnltb3VzLXBhbmVsL2Fub255bW91cy1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTlEO0lBTytDLHFEQUFTO0lBRXBELG1DQUNJLFFBQWtCLEVBQ2xCLE9BQW1CLEVBQ1AsTUFBNEIsRUFDcEIsR0FBdUI7UUFKL0MsWUFNUSxrQkFBTSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxTQUV2QztRQUp1QixTQUFHLEdBQUgsR0FBRyxDQUFvQjtRQUczQyxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzs7SUFDMUIsQ0FBQzs7OztJQUVNLDRDQUFROzs7SUFBZjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRU0seUNBQUs7OztJQUFaO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQixDQUFDOztnQkF6QkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLHV2QkFBNkM7b0JBRTdDLFVBQVUsRUFBRSxDQUFDLHFCQUFxQixDQUFDO29CQUNuQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3hDOzs7O2dCQVhtQixRQUFRO2dCQUFFLFVBQVU7Z0JBRC9CLG9CQUFvQix1QkFrQnBCLFFBQVE7Z0JBZFIsYUFBYSx1QkFlYixRQUFROztJQWFqQixnQ0FBQztDQUFBLEFBMUJELENBTytDLFNBQVMsR0FtQnZEO1NBbkJZLHlCQUF5Qjs7Ozs7O0lBTTlCLHdDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN6UGFuZWxIb3N0Q29tcG9uZW50IH0gZnJvbSAnLi8uLi8uLi9wYW5lbC1ob3N0L3BhbmVsLWhvc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgRWxlbWVudFJlZiwgT3B0aW9uYWwsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmFzZVBhbmVsIH0gZnJvbSAnLi4vYmFzZS1wYW5lbCc7XHJcbmltcG9ydCB7IFBBTkVMX1JPVVRFX0FOSU1BVElPTiB9IGZyb20gJy4uLy4uL2NvcmUvYW5pbWF0aW9ucy9wYW5lbC1yb3V0ZS5hbmltYXRpb24nO1xyXG5pbXBvcnQgeyBTekFjdGl2ZVBhbmVsIH0gZnJvbSAnLi4vLi4vY29yZS9wYW5lbC9hY3RpdmUtcGFuZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3N6LWFub255bW91cy1wYW5lbCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Fub255bW91cy1wYW5lbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi4vcGFuZWwvcGFuZWwuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGFuaW1hdGlvbnM6IFtQQU5FTF9ST1VURV9BTklNQVRJT05dLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3pBbm9ueW1vdXNQYW5lbENvbXBvbmVudCBleHRlbmRzIEJhc2VQYW5lbCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgICAgIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgQE9wdGlvbmFsKCkgcGFyZW50OiBTelBhbmVsSG9zdENvbXBvbmVudCxcclxuICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9waTogU3pBY3RpdmVQYW5lbDxhbnk+XHJcbiAgICApIHtcclxuICAgICAgICAgICAgc3VwZXIocGFyZW50LCBlbGVtZW50LCBpbmplY3Rvcik7XHJcbiAgICAgICAgdGhpcy5fY2FuQ2xvc2UgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9wYXJlbnQuc2V0QWN0aXZlUGFuZWwodGhpcywgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3BpLmNsb3NlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19