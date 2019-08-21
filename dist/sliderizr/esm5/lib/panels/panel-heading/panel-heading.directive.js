/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SzAnonymousPanelComponent } from '../anonymous-panel/anonymous-panel.component';
import { SzPanelComponent } from '../panel/panel.component';
import { Directive, TemplateRef, Optional } from '@angular/core';
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
export { SzPanelHeadingDirective };
if (false) {
    /** @type {?} */
    SzPanelHeadingDirective.prototype.templateRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtaGVhZGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1zbGlkZXJpenIvIiwic291cmNlcyI6WyJsaWIvcGFuZWxzL3BhbmVsLWhlYWRpbmcvcGFuZWwtaGVhZGluZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRTtJQU1JLGlDQUNJLFdBQTZCLEVBQ2pCLEtBQXVCLEVBQ3ZCLFNBQW9DO1FBRWhELENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7SUFDbEQsQ0FBQzs7Z0JBWkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxhQUFhO2lCQUMxQjs7OztnQkFKbUIsV0FBVztnQkFEdEIsZ0JBQWdCLHVCQVdoQixRQUFRO2dCQVpSLHlCQUF5Qix1QkFhekIsUUFBUTs7SUFJakIsOEJBQUM7Q0FBQSxBQWJELElBYUM7U0FWWSx1QkFBdUI7OztJQUNoQyw4Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTekFub255bW91c1BhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi4vYW5vbnltb3VzLXBhbmVsL2Fub255bW91cy1wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTelBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi4vcGFuZWwvcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbc3pIZWFkaW5nXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFN6UGFuZWxIZWFkaW5nRGlyZWN0aXZlIHtcclxuICAgIHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICAgICAgQE9wdGlvbmFsKCkgcGFuZWw6IFN6UGFuZWxDb21wb25lbnQsXHJcbiAgICAgICAgQE9wdGlvbmFsKCkgYW5vblBhbmVsOiBTekFub255bW91c1BhbmVsQ29tcG9uZW50XHJcbiAgICApIHtcclxuICAgICAgICAoYW5vblBhbmVsIHx8IHBhbmVsKS5oZWFkaW5nUmVmID0gdGVtcGxhdGVSZWY7XHJcbiAgICB9XHJcbn1cclxuIl19