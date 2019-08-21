/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HostListener, HostBinding, Input } from '@angular/core';
/**
 * @abstract
 */
export class BasePanel {
    /**
     * @param {?} _parent
     * @param {?} _element
     * @param {?} _injector
     */
    constructor(_parent, _element, _injector) {
        this._parent = _parent;
        this._element = _element;
        this._injector = _injector;
        this.routeAnimation = true;
        this.isActive = false;
        this.hostClass = true;
        this.closeText = 'close';
    }
    /**
     * @return {?}
     */
    get canClose() {
        return this._canClose;
    }
    /**
     * @protected
     * @return {?}
     */
    get nativeElement() {
        return this._element.nativeElement;
    }
    /**
     * @param {?} args
     * @return {?}
     */
    onPanelClick(args) {
        if (this.isElementChild((/** @type {?} */ (args.target)))) {
            this._parent.setActivePanel(this);
            this.scrollVisible();
        }
    }
    /**
     * @private
     * @param {?} target
     * @return {?}
     */
    isElementChild(target) {
        while (target && target.tagName !== 'SZ-PANEL') {
            target = target.parentElement;
        }
        return target && target === this._element.nativeElement;
    }
    /**
     * @return {?}
     */
    onAnimationComplete() {
        // Set scroll in a timeout otherwise the DOM isnt ready and the scroll doesnt work
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.scrollVisible();
        }), 0);
    }
    /**
     * @return {?}
     */
    scrollVisible() {
        this._parent.scrollLeft = this.getScrollAmount();
    }
    /**
     * @private
     * @return {?}
     */
    getOffsetLeft() {
        /** @type {?} */
        const box = this.nativeElement.getBoundingClientRect();
        return (box.left - this._parent.boundingBox.left) + this._parent.scrollLeft;
    }
    /**
     * @private
     * @return {?}
     */
    getScrollAmount() {
        /** @type {?} */
        const scrollLeft = this._parent.scrollLeft;
        /** @type {?} */
        const parentWidth = this._parent.outerWidth;
        /** @type {?} */
        const panelWidth = this.nativeElement.offsetWidth;
        // Calculate offset left from previous sibling as the current element may be in the wrong position due to animations
        /** @type {?} */
        const offsetLeft = this.getOffsetLeft();
        // The distance from the edge of the panel host to the start of the panel
        /** @type {?} */
        const visibleRight = offsetLeft + panelWidth;
        // The right most edge of the panel relative to the parent panel
        /** @type {?} */
        let scroll = scrollLeft;
        if (scrollLeft > offsetLeft) {
            scroll = offsetLeft;
        }
        else if (scrollLeft < (visibleRight - parentWidth)) {
            // Add an extra 50px on the end so the panel isn't butted up against the side of the browser
            scroll = visibleRight - parentWidth + 50;
        }
        return scroll;
    }
}
BasePanel.propDecorators = {
    routeAnimation: [{ type: HostBinding, args: ['@panelRouteAnimation',] }],
    isActive: [{ type: HostBinding, args: ['class.active',] }],
    hostClass: [{ type: HostBinding, args: ['class.sz-panel',] }],
    heading: [{ type: Input }],
    closeText: [{ type: Input }],
    onPanelClick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onAnimationComplete: [{ type: HostListener, args: ['@panelRouteAnimation.done',] }]
};
if (false) {
    /** @type {?} */
    BasePanel.prototype.headingRef;
    /** @type {?} */
    BasePanel.prototype.closeContentRef;
    /** @type {?} */
    BasePanel.prototype.headerTemplate;
    /** @type {?} */
    BasePanel.prototype.routeAnimation;
    /** @type {?} */
    BasePanel.prototype.isActive;
    /** @type {?} */
    BasePanel.prototype.hostClass;
    /** @type {?} */
    BasePanel.prototype.heading;
    /** @type {?} */
    BasePanel.prototype.closeText;
    /**
     * @type {?}
     * @protected
     */
    BasePanel.prototype._canClose;
    /**
     * @type {?}
     * @protected
     */
    BasePanel.prototype._parent;
    /**
     * @type {?}
     * @protected
     */
    BasePanel.prototype._element;
    /**
     * @type {?}
     * @protected
     */
    BasePanel.prototype._injector;
    /**
     * @abstract
     * @return {?}
     */
    BasePanel.prototype.close = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1wYW5lbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXNsaWRlcml6ci8iLCJzb3VyY2VzIjpbImxpYi9wYW5lbHMvYmFzZS1wYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFjLFlBQVksRUFBZSxXQUFXLEVBQUUsS0FBSyxFQUFZLE1BQU0sZUFBZSxDQUFDOzs7O0FBR3BHLE1BQU0sT0FBZ0IsU0FBUzs7Ozs7O0lBcUIzQixZQUNjLE9BQTZCLEVBQzdCLFFBQW9CLEVBQ3BCLFNBQW1CO1FBRm5CLFlBQU8sR0FBUCxPQUFPLENBQXNCO1FBQzdCLGFBQVEsR0FBUixRQUFRLENBQVk7UUFDcEIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQXBCSSxtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN2QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ04sY0FBUyxHQUFHLElBQUksQ0FBQztRQUd2RCxjQUFTLEdBQUcsT0FBTyxDQUFDO0lBa0I3QixDQUFDOzs7O0lBZEQsSUFBVyxRQUFRO1FBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsSUFBYyxhQUFhO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFhTSxZQUFZLENBQUMsSUFBVztRQUMzQixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQWEsSUFBSSxDQUFDLE1BQU0sRUFBQSxDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLE1BQW1CO1FBQ3RDLE9BQU8sTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssVUFBVSxFQUFFO1lBQzVDLE1BQU0sR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1NBQ2pDO1FBRUQsT0FBTyxNQUFNLElBQUksTUFBTSxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO0lBQzVELENBQUM7Ozs7SUFHTSxtQkFBbUI7UUFDdEIsa0ZBQWtGO1FBQ2xGLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDOzs7O0lBRU0sYUFBYTtRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFHTyxhQUFhOztjQUNYLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFO1FBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO0lBQ2hGLENBQUM7Ozs7O0lBRU8sZUFBZTs7Y0FDYixVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVOztjQUNwQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVOztjQUNyQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXOzs7Y0FHM0MsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUU7OztjQUNqQyxZQUFZLEdBQUcsVUFBVSxHQUFHLFVBQVU7OztZQUV4QyxNQUFNLEdBQVcsVUFBVTtRQUUvQixJQUFJLFVBQVUsR0FBRyxVQUFVLEVBQUU7WUFDekIsTUFBTSxHQUFHLFVBQVUsQ0FBQztTQUN2QjthQUFNLElBQUksVUFBVSxHQUFHLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxFQUFFO1lBQ2xELDRGQUE0RjtZQUM1RixNQUFNLEdBQUcsWUFBWSxHQUFHLFdBQVcsR0FBRyxFQUFFLENBQUM7U0FDNUM7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDOzs7NkJBaEZBLFdBQVcsU0FBQyxzQkFBc0I7dUJBQ2xDLFdBQVcsU0FBQyxjQUFjO3dCQUMxQixXQUFXLFNBQUMsZ0JBQWdCO3NCQUU1QixLQUFLO3dCQUNMLEtBQUs7MkJBc0JMLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7a0NBZ0JoQyxZQUFZLFNBQUMsMkJBQTJCOzs7O0lBOUN6QywrQkFBb0M7O0lBQ3BDLG9DQUF5Qzs7SUFDekMsbUNBQXdDOztJQUN4QyxtQ0FBMkQ7O0lBQzNELDZCQUFxRDs7SUFDckQsOEJBQWdFOztJQUVoRSw0QkFBeUI7O0lBQ3pCLDhCQUE2Qjs7Ozs7SUFFN0IsOEJBQTZCOzs7OztJQVd6Qiw0QkFBdUM7Ozs7O0lBQ3ZDLDZCQUE4Qjs7Ozs7SUFDOUIsOEJBQTZCOzs7OztJQUtqQyw0Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIFRlbXBsYXRlUmVmLCBIb3N0QmluZGluZywgSW5wdXQsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN6UGFuZWxIb3N0Q29tcG9uZW50IH0gZnJvbSAnLi8uLi9wYW5lbC1ob3N0L3BhbmVsLWhvc3QuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlUGFuZWwge1xyXG4gICAgcHVibGljIGhlYWRpbmdSZWY6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgICBwdWJsaWMgY2xvc2VDb250ZW50UmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gICAgcHVibGljIGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gICAgQEhvc3RCaW5kaW5nKCdAcGFuZWxSb3V0ZUFuaW1hdGlvbicpIHJvdXRlQW5pbWF0aW9uID0gdHJ1ZTtcclxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJykgcHVibGljIGlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN6LXBhbmVsJykgcHVibGljIHJlYWRvbmx5IGhvc3RDbGFzcyA9IHRydWU7XHJcblxyXG4gICAgQElucHV0KCkgaGVhZGluZzogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgY2xvc2VUZXh0ID0gJ2Nsb3NlJztcclxuXHJcbiAgICBwcm90ZWN0ZWQgX2NhbkNsb3NlOiBib29sZWFuO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgY2FuQ2xvc2UoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbkNsb3NlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgbmF0aXZlRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoXHJcbiAgICAgICAgcHJvdGVjdGVkIF9wYXJlbnQ6IFN6UGFuZWxIb3N0Q29tcG9uZW50LFxyXG4gICAgICAgIHByb3RlY3RlZCBfZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgICAgICBwcm90ZWN0ZWQgX2luamVjdG9yOiBJbmplY3RvclxyXG4gICAgKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IGNsb3NlKCk6IHZvaWQ7XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gICAgcHVibGljIG9uUGFuZWxDbGljayhhcmdzOiBFdmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRWxlbWVudENoaWxkKDxIVE1MRWxlbWVudD5hcmdzLnRhcmdldCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fcGFyZW50LnNldEFjdGl2ZVBhbmVsKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpc2libGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc0VsZW1lbnRDaGlsZCh0YXJnZXQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgd2hpbGUgKHRhcmdldCAmJiB0YXJnZXQudGFnTmFtZSAhPT0gJ1NaLVBBTkVMJykge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50RWxlbWVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0ID09PSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignQHBhbmVsUm91dGVBbmltYXRpb24uZG9uZScpXHJcbiAgICBwdWJsaWMgb25BbmltYXRpb25Db21wbGV0ZSgpIHtcclxuICAgICAgICAvLyBTZXQgc2Nyb2xsIGluIGEgdGltZW91dCBvdGhlcndpc2UgdGhlIERPTSBpc250IHJlYWR5IGFuZCB0aGUgc2Nyb2xsIGRvZXNudCB3b3JrXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlzaWJsZSgpO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzY3JvbGxWaXNpYmxlKCkge1xyXG4gICAgICAgIHRoaXMuX3BhcmVudC5zY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxBbW91bnQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBnZXRPZmZzZXRMZWZ0KCk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgYm94ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHJldHVybiAoYm94LmxlZnQgLSB0aGlzLl9wYXJlbnQuYm91bmRpbmdCb3gubGVmdCkgKyB0aGlzLl9wYXJlbnQuc2Nyb2xsTGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFNjcm9sbEFtb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbExlZnQgPSB0aGlzLl9wYXJlbnQuc2Nyb2xsTGVmdDtcclxuICAgICAgICBjb25zdCBwYXJlbnRXaWR0aCA9IHRoaXMuX3BhcmVudC5vdXRlcldpZHRoO1xyXG4gICAgICAgIGNvbnN0IHBhbmVsV2lkdGggPSB0aGlzLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSBvZmZzZXQgbGVmdCBmcm9tIHByZXZpb3VzIHNpYmxpbmcgYXMgdGhlIGN1cnJlbnQgZWxlbWVudCBtYXkgYmUgaW4gdGhlIHdyb25nIHBvc2l0aW9uIGR1ZSB0byBhbmltYXRpb25zXHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0TGVmdCA9IHRoaXMuZ2V0T2Zmc2V0TGVmdCgpOyAvLyBUaGUgZGlzdGFuY2UgZnJvbSB0aGUgZWRnZSBvZiB0aGUgcGFuZWwgaG9zdCB0byB0aGUgc3RhcnQgb2YgdGhlIHBhbmVsXHJcbiAgICAgICAgY29uc3QgdmlzaWJsZVJpZ2h0ID0gb2Zmc2V0TGVmdCArIHBhbmVsV2lkdGg7IC8vIFRoZSByaWdodCBtb3N0IGVkZ2Ugb2YgdGhlIHBhbmVsIHJlbGF0aXZlIHRvIHRoZSBwYXJlbnQgcGFuZWxcclxuXHJcbiAgICAgICAgbGV0IHNjcm9sbDogbnVtYmVyID0gc2Nyb2xsTGVmdDtcclxuXHJcbiAgICAgICAgaWYgKHNjcm9sbExlZnQgPiBvZmZzZXRMZWZ0KSB7XHJcbiAgICAgICAgICAgIHNjcm9sbCA9IG9mZnNldExlZnQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzY3JvbGxMZWZ0IDwgKHZpc2libGVSaWdodCAtIHBhcmVudFdpZHRoKSkge1xyXG4gICAgICAgICAgICAvLyBBZGQgYW4gZXh0cmEgNTBweCBvbiB0aGUgZW5kIHNvIHRoZSBwYW5lbCBpc24ndCBidXR0ZWQgdXAgYWdhaW5zdCB0aGUgc2lkZSBvZiB0aGUgYnJvd3NlclxyXG4gICAgICAgICAgICBzY3JvbGwgPSB2aXNpYmxlUmlnaHQgLSBwYXJlbnRXaWR0aCArIDUwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNjcm9sbDtcclxuICAgIH1cclxufVxyXG4iXX0=