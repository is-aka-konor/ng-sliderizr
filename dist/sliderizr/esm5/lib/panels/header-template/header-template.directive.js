/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SzAnonymousPanelComponent } from '../anonymous-panel/anonymous-panel.component';
import { SzPanelComponent } from '../panel/panel.component';
import { Directive, TemplateRef, Optional } from '@angular/core';
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
export { SzHeaderTemplateDirective };
if (false) {
    /** @type {?} */
    SzHeaderTemplateDirective.prototype.templateRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXRlbXBsYXRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXNsaWRlcml6ci8iLCJzb3VyY2VzIjpbImxpYi9wYW5lbHMvaGVhZGVyLXRlbXBsYXRlL2hlYWRlci10ZW1wbGF0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRTtJQU1JLG1DQUNJLFdBQTZCLEVBQ2pCLEtBQXVCLEVBQ3ZCLFNBQW9DO1FBRWhELENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxDQUFDLGNBQWMsR0FBRyxXQUFXLENBQUM7SUFDdEQsQ0FBQzs7Z0JBWkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxvQkFBb0I7aUJBQ2pDOzs7O2dCQUptQixXQUFXO2dCQUR0QixnQkFBZ0IsdUJBV2hCLFFBQVE7Z0JBWlIseUJBQXlCLHVCQWF6QixRQUFROztJQUlqQixnQ0FBQztDQUFBLEFBYkQsSUFhQztTQVZZLHlCQUF5Qjs7O0lBQ2xDLGdEQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN6QW5vbnltb3VzUGFuZWxDb21wb25lbnQgfSBmcm9tICcuLi9hbm9ueW1vdXMtcGFuZWwvYW5vbnltb3VzLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN6UGFuZWxDb21wb25lbnQgfSBmcm9tICcuLi9wYW5lbC9wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tzekhlYWRlclRlbXBsYXRlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFN6SGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUge1xyXG4gICAgcHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcclxuICAgICAgICBAT3B0aW9uYWwoKSBwYW5lbDogU3pQYW5lbENvbXBvbmVudCxcclxuICAgICAgICBAT3B0aW9uYWwoKSBhbm9uUGFuZWw6IFN6QW5vbnltb3VzUGFuZWxDb21wb25lbnRcclxuICAgICkge1xyXG4gICAgICAgIChhbm9uUGFuZWwgfHwgcGFuZWwpLmhlYWRlclRlbXBsYXRlID0gdGVtcGxhdGVSZWY7XHJcbiAgICB9XHJcbn1cclxuIl19