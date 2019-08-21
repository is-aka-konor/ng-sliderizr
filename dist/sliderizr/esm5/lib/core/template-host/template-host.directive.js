/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
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
export { TemplateHostDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtaG9zdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1zbGlkZXJpenIvIiwic291cmNlcyI6WyJsaWIvY29yZS90ZW1wbGF0ZS1ob3N0L3RlbXBsYXRlLWhvc3QuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULEtBQUssRUFDTCxXQUFXLEVBQ1gsZ0JBQWdCLEVBQ25CLE1BQU0sZUFBZSxDQUFDO0FBRXZCO0lBcUJJLCtCQUFtQixPQUF5QjtRQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBZEQsc0JBQ1csaURBQWM7Ozs7UUFPekI7WUFDSSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDaEMsQ0FBQzs7Ozs7UUFWRCxVQUMwQixXQUE2QjtZQUNuRCxJQUFJLENBQUMsZUFBZSxHQUFHLFdBQVcsQ0FBQztZQUNuQyxJQUFJLFdBQVcsRUFBRTtnQkFDYixJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ2hEO1FBQ0wsQ0FBQzs7O09BQUE7O2dCQWZKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsa0JBQWtCO2lCQUMvQjs7OztnQkFMRyxnQkFBZ0I7OztpQ0FZZixLQUFLOztJQWVWLDRCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0FyQlkscUJBQXFCOzs7SUFDOUIsd0NBQWlDOzs7OztJQUVqQyx5Q0FBcUM7Ozs7O0lBQ3JDLGdEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBEaXJlY3RpdmUsXHJcbiAgICBJbnB1dCxcclxuICAgIFRlbXBsYXRlUmVmLFxyXG4gICAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tzelRlbXBsYXRlSG9zdF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZUhvc3REaXJlY3RpdmUge1xyXG4gICAgcHVibGljIHZpZXdSZWY6IFZpZXdDb250YWluZXJSZWY7XHJcblxyXG4gICAgcHJvdGVjdGVkIF92aWV3UmVmOiBWaWV3Q29udGFpbmVyUmVmO1xyXG4gICAgcHJvdGVjdGVkIF9zelRlbXBsYXRlSG9zdDogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHVibGljIHNldCBzelRlbXBsYXRlSG9zdCh0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgICAgIHRoaXMuX3N6VGVtcGxhdGVIb3N0ID0gdGVtcGxhdGVSZWY7XHJcbiAgICAgICAgaWYgKHRlbXBsYXRlUmVmKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlld1JlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGVSZWYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHN6VGVtcGxhdGVIb3N0KCk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zelRlbXBsYXRlSG9zdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iodmlld1JlZjogVmlld0NvbnRhaW5lclJlZikge1xyXG4gICAgICAgIHRoaXMudmlld1JlZiA9IHZpZXdSZWY7XHJcbiAgICB9XHJcbn1cclxuIl19