/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SzAnonymousPanelComponent } from '../anonymous-panel/anonymous-panel.component';
import { SzPanelComponent } from '../panel/panel.component';
import { Directive, TemplateRef, Optional } from '@angular/core';
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
export { SzCloseContentDirective };
if (false) {
    /** @type {?} */
    SzCloseContentDirective.prototype.templateRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UtY29udGVudC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1zbGlkZXJpenIvIiwic291cmNlcyI6WyJsaWIvcGFuZWxzL2Nsb3NlLWNvbnRlbnQvY2xvc2UtY29udGVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUdqRTtJQU1JLGlDQUNJLFdBQTZCLEVBQ2pCLEtBQXVCLEVBQ3ZCLFNBQW9DO1FBRWhELENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxDQUFDLGVBQWUsR0FBRyxXQUFXLENBQUM7SUFDdkQsQ0FBQzs7Z0JBWkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxrQkFBa0I7aUJBQy9COzs7O2dCQUxtQixXQUFXO2dCQUR0QixnQkFBZ0IsdUJBWWhCLFFBQVE7Z0JBYlIseUJBQXlCLHVCQWN6QixRQUFROztJQUlqQiw4QkFBQztDQUFBLEFBYkQsSUFhQztTQVZZLHVCQUF1Qjs7O0lBQ2hDLDhDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN6QW5vbnltb3VzUGFuZWxDb21wb25lbnQgfSBmcm9tICcuLi9hbm9ueW1vdXMtcGFuZWwvYW5vbnltb3VzLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN6UGFuZWxDb21wb25lbnQgfSBmcm9tICcuLi9wYW5lbC9wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqIFNob3VsZCBiZSB1c2VkIHRvIG1hcmsgPHRlbXBsYXRlPiBlbGVtZW50IGFzIGEgdGVtcGxhdGUgZm9yIHRhYiBoZWFkaW5nICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbc3pDbG9zZUNvbnRlbnRdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU3pDbG9zZUNvbnRlbnREaXJlY3RpdmUge1xyXG4gICAgcHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcclxuICAgICAgICBAT3B0aW9uYWwoKSBwYW5lbDogU3pQYW5lbENvbXBvbmVudCxcclxuICAgICAgICBAT3B0aW9uYWwoKSBhbm9uUGFuZWw6IFN6QW5vbnltb3VzUGFuZWxDb21wb25lbnRcclxuICAgICkge1xyXG4gICAgICAgIChwYW5lbCB8fCBhbm9uUGFuZWwpLmNsb3NlQ29udGVudFJlZiA9IHRlbXBsYXRlUmVmO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==