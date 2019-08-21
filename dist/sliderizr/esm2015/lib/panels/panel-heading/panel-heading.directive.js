/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SzAnonymousPanelComponent } from '../anonymous-panel/anonymous-panel.component';
import { SzPanelComponent } from '../panel/panel.component';
import { Directive, TemplateRef, Optional } from '@angular/core';
export class SzPanelHeadingDirective {
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
if (false) {
    /** @type {?} */
    SzPanelHeadingDirective.prototype.templateRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtaGVhZGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1zbGlkZXJpenIvIiwic291cmNlcyI6WyJsaWIvcGFuZWxzL3BhbmVsLWhlYWRpbmcvcGFuZWwtaGVhZGluZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUtqRSxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7SUFHaEMsWUFDSSxXQUE2QixFQUNqQixLQUF1QixFQUN2QixTQUFvQztRQUVoRCxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO0lBQ2xELENBQUM7OztZQVpKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsYUFBYTthQUMxQjs7OztZQUptQixXQUFXO1lBRHRCLGdCQUFnQix1QkFXaEIsUUFBUTtZQVpSLHlCQUF5Qix1QkFhekIsUUFBUTs7OztJQUxiLDhDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN6QW5vbnltb3VzUGFuZWxDb21wb25lbnQgfSBmcm9tICcuLi9hbm9ueW1vdXMtcGFuZWwvYW5vbnltb3VzLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN6UGFuZWxDb21wb25lbnQgfSBmcm9tICcuLi9wYW5lbC9wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tzekhlYWRpbmddJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU3pQYW5lbEhlYWRpbmdEaXJlY3RpdmUge1xyXG4gICAgcHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcclxuICAgICAgICBAT3B0aW9uYWwoKSBwYW5lbDogU3pQYW5lbENvbXBvbmVudCxcclxuICAgICAgICBAT3B0aW9uYWwoKSBhbm9uUGFuZWw6IFN6QW5vbnltb3VzUGFuZWxDb21wb25lbnRcclxuICAgICkge1xyXG4gICAgICAgIChhbm9uUGFuZWwgfHwgcGFuZWwpLmhlYWRpbmdSZWYgPSB0ZW1wbGF0ZVJlZjtcclxuICAgIH1cclxufVxyXG4iXX0=