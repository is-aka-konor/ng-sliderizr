/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
export class TemplateHostDirective {
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
if (false) {
    /** @type {?} */
    TemplateHostDirective.prototype.viewRef;
    /**
     * @type {?}
     * @protected
     */
    TemplateHostDirective.prototype._viewRef;
    /**
     * @type {?}
     * @protected
     */
    TemplateHostDirective.prototype._szTemplateHost;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtaG9zdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1zbGlkZXJpenIvIiwic291cmNlcyI6WyJsaWIvY29yZS90ZW1wbGF0ZS1ob3N0L3RlbXBsYXRlLWhvc3QuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULEtBQUssRUFDTCxXQUFXLEVBQ1gsZ0JBQWdCLEVBQ25CLE1BQU0sZUFBZSxDQUFDO0FBS3ZCLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFrQjlCLFlBQW1CLE9BQXlCO1FBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBZEQsSUFDVyxjQUFjLENBQUMsV0FBNkI7UUFDbkQsSUFBSSxDQUFDLGVBQWUsR0FBRyxXQUFXLENBQUM7UUFDbkMsSUFBSSxXQUFXLEVBQUU7WUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0wsQ0FBQzs7OztJQUVELElBQVcsY0FBYztRQUNyQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDaEMsQ0FBQzs7O1lBbkJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsa0JBQWtCO2FBQy9COzs7O1lBTEcsZ0JBQWdCOzs7NkJBWWYsS0FBSzs7OztJQUxOLHdDQUFpQzs7Ozs7SUFFakMseUNBQXFDOzs7OztJQUNyQyxnREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgRGlyZWN0aXZlLFxyXG4gICAgSW5wdXQsXHJcbiAgICBUZW1wbGF0ZVJlZixcclxuICAgIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbc3pUZW1wbGF0ZUhvc3RdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVIb3N0RGlyZWN0aXZlIHtcclxuICAgIHB1YmxpYyB2aWV3UmVmOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cclxuICAgIHByb3RlY3RlZCBfdmlld1JlZjogVmlld0NvbnRhaW5lclJlZjtcclxuICAgIHByb3RlY3RlZCBfc3pUZW1wbGF0ZUhvc3Q6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBzZXQgc3pUZW1wbGF0ZUhvc3QodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgICAgICB0aGlzLl9zelRlbXBsYXRlSG9zdCA9IHRlbXBsYXRlUmVmO1xyXG4gICAgICAgIGlmICh0ZW1wbGF0ZVJlZikge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXdSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlUmVmKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzelRlbXBsYXRlSG9zdCgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3pUZW1wbGF0ZUhvc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHZpZXdSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcclxuICAgICAgICB0aGlzLnZpZXdSZWYgPSB2aWV3UmVmO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==