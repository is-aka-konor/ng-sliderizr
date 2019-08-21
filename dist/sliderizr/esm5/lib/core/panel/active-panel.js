/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
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
export { SzActivePanel };
if (false) {
    /** @type {?} */
    SzActivePanel.prototype.componentRef;
    /**
     * @type {?}
     * @private
     */
    SzActivePanel.prototype._afterClosed;
    /** @type {?} */
    SzActivePanel.prototype.beforeClose;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLXBhbmVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctc2xpZGVyaXpyLyIsInNvdXJjZXMiOlsibGliL2NvcmUvcGFuZWwvYWN0aXZlLXBhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sTUFBTSxDQUFDOzs7O0FBRTNDO0lBVUk7UUFQUSxpQkFBWSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBUW5ELENBQUM7SUFMRCxzQkFBVyw0Q0FBaUI7Ozs7UUFBNUI7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakUsQ0FBQzs7O09BQUE7Ozs7O0lBS00sNkJBQUs7Ozs7SUFBWixVQUFhLE1BQVk7UUFBekIsaUJBU0M7UUFSRyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUk7OztZQUFDO2dCQUNyQixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEIsQ0FBQyxFQUFDLENBQUM7WUFDSCxPQUFPO1NBQ1g7UUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7OztJQUVPLHFDQUFhOzs7OztJQUFyQixVQUFzQixNQUFZO1FBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsc0JBQVcsc0NBQVc7Ozs7UUFBdEI7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDNUMsQ0FBQzs7O09BQUE7O2dCQWhDSixVQUFVOzs7O0lBaUNYLG9CQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0FoQ1ksYUFBYTs7O0lBQ3RCLHFDQUFxQzs7Ozs7SUFDckMscUNBQW1EOztJQUNuRCxvQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3pBY3RpdmVQYW5lbDxUPiB7XHJcbiAgICBwdWJsaWMgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8VD47XHJcbiAgICBwcml2YXRlIF9hZnRlckNsb3NlZDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuICAgIGJlZm9yZUNsb3NlOiAoKSA9PiBQcm9taXNlPGFueT47XHJcblxyXG4gICAgcHVibGljIGdldCBjb21wb25lbnRJbnN0YW5jZSgpOiBUIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRSZWYgPyB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlKHJlc3VsdD86IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLmJlZm9yZUNsb3NlKSB7XHJcbiAgICAgICAgICAgICB0aGlzLmJlZm9yZUNsb3NlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmludGVybmFsQ2xvc2UoKTtcclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbnRlcm5hbENsb3NlKHJlc3VsdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbnRlcm5hbENsb3NlKHJlc3VsdD86IGFueSkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLl9hZnRlckNsb3NlZC5uZXh0KHJlc3VsdCk7XHJcbiAgICAgICAgdGhpcy5fYWZ0ZXJDbG9zZWQuY29tcGxldGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGFmdGVyQ2xvc2VkKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FmdGVyQ2xvc2VkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==