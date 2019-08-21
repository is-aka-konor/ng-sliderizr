/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class WindowRefService {
    /**
     * @return {?}
     */
    get nativeWindow() {
        return window;
    }
    /**
     * @param {?} element
     * @param {?} to
     * @param {?} duration
     * @return {?}
     */
    scrollTo(element, to, duration) {
        if (this._scrollTimeoutId) {
            window.clearTimeout(this._scrollTimeoutId);
            this._scrollTimeoutId = null;
        }
        if (duration <= 0) {
            return;
        }
        /** @type {?} */
        const difference = to - element.scrollLeft;
        /** @type {?} */
        const perTick = difference / duration * 10;
        this._scrollTimeoutId = window.setTimeout((/**
         * @return {?}
         */
        () => {
            this._scrollTimeoutId = null;
            element.scrollLeft = element.scrollLeft + perTick;
            if (element.scrollLeft === to) {
                return;
            }
            this.scrollTo(element, to, duration - 10);
        }), 10);
    }
}
WindowRefService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    WindowRefService.prototype._scrollTimeoutId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LXJlZi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctc2xpZGVyaXpyLyIsInNvdXJjZXMiOlsibGliL2NvcmUvd2luZG93LXJlZi93aW5kb3ctcmVmLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUd6QixJQUFXLFlBQVk7UUFDbkIsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQzs7Ozs7OztJQUVNLFFBQVEsQ0FBQyxPQUFvQixFQUFFLEVBQVUsRUFBRSxRQUFnQjtRQUM5RCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN2QixNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7U0FDaEM7UUFFRCxJQUFJLFFBQVEsSUFBSSxDQUFDLEVBQUU7WUFDZixPQUFPO1NBQ1Y7O2NBQ0ssVUFBVSxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUMsVUFBVTs7Y0FDcEMsT0FBTyxHQUFHLFVBQVUsR0FBRyxRQUFRLEdBQUcsRUFBRTtRQUUxQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUMzQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7WUFDbEQsSUFBSSxPQUFPLENBQUMsVUFBVSxLQUFLLEVBQUUsRUFBRTtnQkFDM0IsT0FBTzthQUNWO1lBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUM5QyxDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7SUFDWCxDQUFDOzs7WUE3QkosVUFBVTs7Ozs7OztJQUVQLDRDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdpbmRvd1JlZlNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBfc2Nyb2xsVGltZW91dElkOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGdldCBuYXRpdmVXaW5kb3coKTogV2luZG93IHtcclxuICAgICAgICByZXR1cm4gd2luZG93O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzY3JvbGxUbyhlbGVtZW50OiBIVE1MRWxlbWVudCwgdG86IG51bWJlciwgZHVyYXRpb246IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLl9zY3JvbGxUaW1lb3V0SWQpIHtcclxuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLl9zY3JvbGxUaW1lb3V0SWQpO1xyXG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxUaW1lb3V0SWQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGR1cmF0aW9uIDw9IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkaWZmZXJlbmNlID0gdG8gLSBlbGVtZW50LnNjcm9sbExlZnQ7XHJcbiAgICAgICAgY29uc3QgcGVyVGljayA9IGRpZmZlcmVuY2UgLyBkdXJhdGlvbiAqIDEwO1xyXG5cclxuICAgICAgICB0aGlzLl9zY3JvbGxUaW1lb3V0SWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRpbWVvdXRJZCA9IG51bGw7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdCArIHBlclRpY2s7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnNjcm9sbExlZnQgPT09IHRvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8oZWxlbWVudCwgdG8sIGR1cmF0aW9uIC0gMTApO1xyXG4gICAgICAgIH0sIDEwKTtcclxuICAgIH1cclxufVxyXG4iXX0=