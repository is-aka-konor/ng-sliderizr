/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var WindowRefService = /** @class */ (function () {
    function WindowRefService() {
    }
    Object.defineProperty(WindowRefService.prototype, "nativeWindow", {
        get: /**
         * @return {?}
         */
        function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} element
     * @param {?} to
     * @param {?} duration
     * @return {?}
     */
    WindowRefService.prototype.scrollTo = /**
     * @param {?} element
     * @param {?} to
     * @param {?} duration
     * @return {?}
     */
    function (element, to, duration) {
        var _this = this;
        if (this._scrollTimeoutId) {
            window.clearTimeout(this._scrollTimeoutId);
            this._scrollTimeoutId = null;
        }
        if (duration <= 0) {
            return;
        }
        /** @type {?} */
        var difference = to - element.scrollLeft;
        /** @type {?} */
        var perTick = difference / duration * 10;
        this._scrollTimeoutId = window.setTimeout((/**
         * @return {?}
         */
        function () {
            _this._scrollTimeoutId = null;
            element.scrollLeft = element.scrollLeft + perTick;
            if (element.scrollLeft === to) {
                return;
            }
            _this.scrollTo(element, to, duration - 10);
        }), 10);
    };
    WindowRefService.decorators = [
        { type: Injectable }
    ];
    return WindowRefService;
}());
export { WindowRefService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    WindowRefService.prototype._scrollTimeoutId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LXJlZi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctc2xpZGVyaXpyLyIsInNvdXJjZXMiOlsibGliL2NvcmUvd2luZG93LXJlZi93aW5kb3ctcmVmLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFBQTtJQThCQSxDQUFDO0lBMUJHLHNCQUFXLDBDQUFZOzs7O1FBQXZCO1lBQ0ksT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7Ozs7Ozs7SUFFTSxtQ0FBUTs7Ozs7O0lBQWYsVUFBZ0IsT0FBb0IsRUFBRSxFQUFVLEVBQUUsUUFBZ0I7UUFBbEUsaUJBcUJDO1FBcEJHLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3ZCLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztTQUNoQztRQUVELElBQUksUUFBUSxJQUFJLENBQUMsRUFBRTtZQUNmLE9BQU87U0FDVjs7WUFDSyxVQUFVLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVOztZQUNwQyxPQUFPLEdBQUcsVUFBVSxHQUFHLFFBQVEsR0FBRyxFQUFFO1FBRTFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsVUFBVTs7O1FBQUM7WUFDdEMsS0FBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUM3QixPQUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1lBQ2xELElBQUksT0FBTyxDQUFDLFVBQVUsS0FBSyxFQUFFLEVBQUU7Z0JBQzNCLE9BQU87YUFDVjtZQUVELEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDOUMsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7Z0JBN0JKLFVBQVU7O0lBOEJYLHVCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0E3QlksZ0JBQWdCOzs7Ozs7SUFDekIsNENBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2luZG93UmVmU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9zY3JvbGxUaW1lb3V0SWQ6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IG5hdGl2ZVdpbmRvdygpOiBXaW5kb3cge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3c7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNjcm9sbFRvKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0bzogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFRpbWVvdXRJZCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX3Njcm9sbFRpbWVvdXRJZCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRpbWVvdXRJZCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZHVyYXRpb24gPD0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRpZmZlcmVuY2UgPSB0byAtIGVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICAgICAgICBjb25zdCBwZXJUaWNrID0gZGlmZmVyZW5jZSAvIGR1cmF0aW9uICogMTA7XHJcblxyXG4gICAgICAgIHRoaXMuX3Njcm9sbFRpbWVvdXRJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVGltZW91dElkID0gbnVsbDtcclxuICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0ICsgcGVyVGljaztcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuc2Nyb2xsTGVmdCA9PT0gdG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxUbyhlbGVtZW50LCB0bywgZHVyYXRpb24gLSAxMCk7XHJcbiAgICAgICAgfSwgMTApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==