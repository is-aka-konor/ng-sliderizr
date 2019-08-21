/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HostListener, HostBinding, Input } from '@angular/core';
/**
 * @abstract
 */
var BasePanel = /** @class */ (function () {
    function BasePanel(_parent, _element, _injector) {
        this._parent = _parent;
        this._element = _element;
        this._injector = _injector;
        this.routeAnimation = true;
        this.isActive = false;
        this.hostClass = true;
        this.closeText = 'close';
    }
    Object.defineProperty(BasePanel.prototype, "canClose", {
        get: /**
         * @return {?}
         */
        function () {
            return this._canClose;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasePanel.prototype, "nativeElement", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this._element.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} args
     * @return {?}
     */
    BasePanel.prototype.onPanelClick = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        if (this.isElementChild((/** @type {?} */ (args.target)))) {
            this._parent.setActivePanel(this);
            this.scrollVisible();
        }
    };
    /**
     * @private
     * @param {?} target
     * @return {?}
     */
    BasePanel.prototype.isElementChild = /**
     * @private
     * @param {?} target
     * @return {?}
     */
    function (target) {
        while (target && target.tagName !== 'SZ-PANEL') {
            target = target.parentElement;
        }
        return target && target === this._element.nativeElement;
    };
    /**
     * @return {?}
     */
    BasePanel.prototype.onAnimationComplete = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Set scroll in a timeout otherwise the DOM isnt ready and the scroll doesnt work
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.scrollVisible();
        }), 0);
    };
    /**
     * @return {?}
     */
    BasePanel.prototype.scrollVisible = /**
     * @return {?}
     */
    function () {
        this._parent.scrollLeft = this.getScrollAmount();
    };
    /**
     * @private
     * @return {?}
     */
    BasePanel.prototype.getOffsetLeft = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var box = this.nativeElement.getBoundingClientRect();
        return (box.left - this._parent.boundingBox.left) + this._parent.scrollLeft;
    };
    /**
     * @private
     * @return {?}
     */
    BasePanel.prototype.getScrollAmount = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollLeft = this._parent.scrollLeft;
        /** @type {?} */
        var parentWidth = this._parent.outerWidth;
        /** @type {?} */
        var panelWidth = this.nativeElement.offsetWidth;
        // Calculate offset left from previous sibling as the current element may be in the wrong position due to animations
        /** @type {?} */
        var offsetLeft = this.getOffsetLeft();
        // The distance from the edge of the panel host to the start of the panel
        /** @type {?} */
        var visibleRight = offsetLeft + panelWidth;
        // The right most edge of the panel relative to the parent panel
        /** @type {?} */
        var scroll = scrollLeft;
        if (scrollLeft > offsetLeft) {
            scroll = offsetLeft;
        }
        else if (scrollLeft < (visibleRight - parentWidth)) {
            // Add an extra 50px on the end so the panel isn't butted up against the side of the browser
            scroll = visibleRight - parentWidth + 50;
        }
        return scroll;
    };
    BasePanel.propDecorators = {
        routeAnimation: [{ type: HostBinding, args: ['@panelRouteAnimation',] }],
        isActive: [{ type: HostBinding, args: ['class.active',] }],
        hostClass: [{ type: HostBinding, args: ['class.sz-panel',] }],
        heading: [{ type: Input }],
        closeText: [{ type: Input }],
        onPanelClick: [{ type: HostListener, args: ['click', ['$event'],] }],
        onAnimationComplete: [{ type: HostListener, args: ['@panelRouteAnimation.done',] }]
    };
    return BasePanel;
}());
export { BasePanel };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1wYW5lbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXNsaWRlcml6ci8iLCJzb3VyY2VzIjpbImxpYi9wYW5lbHMvYmFzZS1wYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFjLFlBQVksRUFBZSxXQUFXLEVBQUUsS0FBSyxFQUFZLE1BQU0sZUFBZSxDQUFDOzs7O0FBR3BHO0lBcUJJLG1CQUNjLE9BQTZCLEVBQzdCLFFBQW9CLEVBQ3BCLFNBQW1CO1FBRm5CLFlBQU8sR0FBUCxPQUFPLENBQXNCO1FBQzdCLGFBQVEsR0FBUixRQUFRLENBQVk7UUFDcEIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQXBCSSxtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN2QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ04sY0FBUyxHQUFHLElBQUksQ0FBQztRQUd2RCxjQUFTLEdBQUcsT0FBTyxDQUFDO0lBa0I3QixDQUFDO0lBZEQsc0JBQVcsK0JBQVE7Ozs7UUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBYyxvQ0FBYTs7Ozs7UUFBM0I7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLENBQUM7OztPQUFBOzs7OztJQWFNLGdDQUFZOzs7O0lBRG5CLFVBQ29CLElBQVc7UUFDM0IsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFhLElBQUksQ0FBQyxNQUFNLEVBQUEsQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QjtJQUNMLENBQUM7Ozs7OztJQUVPLGtDQUFjOzs7OztJQUF0QixVQUF1QixNQUFtQjtRQUN0QyxPQUFPLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLFVBQVUsRUFBRTtZQUM1QyxNQUFNLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztTQUNqQztRQUVELE9BQU8sTUFBTSxJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztJQUM1RCxDQUFDOzs7O0lBR00sdUNBQW1COzs7SUFEMUI7UUFBQSxpQkFNQztRQUpHLGtGQUFrRjtRQUNsRixVQUFVOzs7UUFBQztZQUNQLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDOzs7O0lBRU0saUNBQWE7OztJQUFwQjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNyRCxDQUFDOzs7OztJQUdPLGlDQUFhOzs7O0lBQXJCOztZQUNVLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFO1FBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO0lBQ2hGLENBQUM7Ozs7O0lBRU8sbUNBQWU7Ozs7SUFBdkI7O1lBQ1UsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVTs7WUFDcEMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVTs7WUFDckMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVzs7O1lBRzNDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFOzs7WUFDakMsWUFBWSxHQUFHLFVBQVUsR0FBRyxVQUFVOzs7WUFFeEMsTUFBTSxHQUFXLFVBQVU7UUFFL0IsSUFBSSxVQUFVLEdBQUcsVUFBVSxFQUFFO1lBQ3pCLE1BQU0sR0FBRyxVQUFVLENBQUM7U0FDdkI7YUFBTSxJQUFJLFVBQVUsR0FBRyxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUMsRUFBRTtZQUNsRCw0RkFBNEY7WUFDNUYsTUFBTSxHQUFHLFlBQVksR0FBRyxXQUFXLEdBQUcsRUFBRSxDQUFDO1NBQzVDO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQzs7aUNBaEZBLFdBQVcsU0FBQyxzQkFBc0I7MkJBQ2xDLFdBQVcsU0FBQyxjQUFjOzRCQUMxQixXQUFXLFNBQUMsZ0JBQWdCOzBCQUU1QixLQUFLOzRCQUNMLEtBQUs7K0JBc0JMLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7c0NBZ0JoQyxZQUFZLFNBQUMsMkJBQTJCOztJQXNDN0MsZ0JBQUM7Q0FBQSxBQXJGRCxJQXFGQztTQXJGcUIsU0FBUzs7O0lBQzNCLCtCQUFvQzs7SUFDcEMsb0NBQXlDOztJQUN6QyxtQ0FBd0M7O0lBQ3hDLG1DQUEyRDs7SUFDM0QsNkJBQXFEOztJQUNyRCw4QkFBZ0U7O0lBRWhFLDRCQUF5Qjs7SUFDekIsOEJBQTZCOzs7OztJQUU3Qiw4QkFBNkI7Ozs7O0lBV3pCLDRCQUF1Qzs7Ozs7SUFDdkMsNkJBQThCOzs7OztJQUM5Qiw4QkFBNkI7Ozs7O0lBS2pDLDRDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgVGVtcGxhdGVSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3pQYW5lbEhvc3RDb21wb25lbnQgfSBmcm9tICcuLy4uL3BhbmVsLWhvc3QvcGFuZWwtaG9zdC5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VQYW5lbCB7XHJcbiAgICBwdWJsaWMgaGVhZGluZ1JlZjogVGVtcGxhdGVSZWY8YW55PjtcclxuICAgIHB1YmxpYyBjbG9zZUNvbnRlbnRSZWY6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgICBwdWJsaWMgaGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgICBASG9zdEJpbmRpbmcoJ0BwYW5lbFJvdXRlQW5pbWF0aW9uJykgcm91dGVBbmltYXRpb24gPSB0cnVlO1xyXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKSBwdWJsaWMgaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgIEBIb3N0QmluZGluZygnY2xhc3Muc3otcGFuZWwnKSBwdWJsaWMgcmVhZG9ubHkgaG9zdENsYXNzID0gdHJ1ZTtcclxuXHJcbiAgICBASW5wdXQoKSBoZWFkaW5nOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBjbG9zZVRleHQgPSAnY2xvc2UnO1xyXG5cclxuICAgIHByb3RlY3RlZCBfY2FuQ2xvc2U6IGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIGdldCBjYW5DbG9zZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2FuQ2xvc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBuYXRpdmVFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yIChcclxuICAgICAgICBwcm90ZWN0ZWQgX3BhcmVudDogU3pQYW5lbEhvc3RDb21wb25lbnQsXHJcbiAgICAgICAgcHJvdGVjdGVkIF9lbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByb3RlY3RlZCBfaW5qZWN0b3I6IEluamVjdG9yXHJcbiAgICApIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgY2xvc2UoKTogdm9pZDtcclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgICBwdWJsaWMgb25QYW5lbENsaWNrKGFyZ3M6IEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbGVtZW50Q2hpbGQoPEhUTUxFbGVtZW50PmFyZ3MudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQuc2V0QWN0aXZlUGFuZWwodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlzaWJsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzRWxlbWVudENoaWxkKHRhcmdldDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcclxuICAgICAgICB3aGlsZSAodGFyZ2V0ICYmIHRhcmdldC50YWdOYW1lICE9PSAnU1otUEFORUwnKSB7XHJcbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldCAmJiB0YXJnZXQgPT09IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdAcGFuZWxSb3V0ZUFuaW1hdGlvbi5kb25lJylcclxuICAgIHB1YmxpYyBvbkFuaW1hdGlvbkNvbXBsZXRlKCkge1xyXG4gICAgICAgIC8vIFNldCBzY3JvbGwgaW4gYSB0aW1lb3V0IG90aGVyd2lzZSB0aGUgRE9NIGlzbnQgcmVhZHkgYW5kIHRoZSBzY3JvbGwgZG9lc250IHdvcmtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxWaXNpYmxlKCk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNjcm9sbFZpc2libGUoKSB7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50LnNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbEFtb3VudCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGdldE9mZnNldExlZnQoKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBib3ggPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgcmV0dXJuIChib3gubGVmdCAtIHRoaXMuX3BhcmVudC5ib3VuZGluZ0JveC5sZWZ0KSArIHRoaXMuX3BhcmVudC5zY3JvbGxMZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0U2Nyb2xsQW1vdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHRoaXMuX3BhcmVudC5zY3JvbGxMZWZ0O1xyXG4gICAgICAgIGNvbnN0IHBhcmVudFdpZHRoID0gdGhpcy5fcGFyZW50Lm91dGVyV2lkdGg7XHJcbiAgICAgICAgY29uc3QgcGFuZWxXaWR0aCA9IHRoaXMubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIG9mZnNldCBsZWZ0IGZyb20gcHJldmlvdXMgc2libGluZyBhcyB0aGUgY3VycmVudCBlbGVtZW50IG1heSBiZSBpbiB0aGUgd3JvbmcgcG9zaXRpb24gZHVlIHRvIGFuaW1hdGlvbnNcclxuICAgICAgICBjb25zdCBvZmZzZXRMZWZ0ID0gdGhpcy5nZXRPZmZzZXRMZWZ0KCk7IC8vIFRoZSBkaXN0YW5jZSBmcm9tIHRoZSBlZGdlIG9mIHRoZSBwYW5lbCBob3N0IHRvIHRoZSBzdGFydCBvZiB0aGUgcGFuZWxcclxuICAgICAgICBjb25zdCB2aXNpYmxlUmlnaHQgPSBvZmZzZXRMZWZ0ICsgcGFuZWxXaWR0aDsgLy8gVGhlIHJpZ2h0IG1vc3QgZWRnZSBvZiB0aGUgcGFuZWwgcmVsYXRpdmUgdG8gdGhlIHBhcmVudCBwYW5lbFxyXG5cclxuICAgICAgICBsZXQgc2Nyb2xsOiBudW1iZXIgPSBzY3JvbGxMZWZ0O1xyXG5cclxuICAgICAgICBpZiAoc2Nyb2xsTGVmdCA+IG9mZnNldExlZnQpIHtcclxuICAgICAgICAgICAgc2Nyb2xsID0gb2Zmc2V0TGVmdDtcclxuICAgICAgICB9IGVsc2UgaWYgKHNjcm9sbExlZnQgPCAodmlzaWJsZVJpZ2h0IC0gcGFyZW50V2lkdGgpKSB7XHJcbiAgICAgICAgICAgIC8vIEFkZCBhbiBleHRyYSA1MHB4IG9uIHRoZSBlbmQgc28gdGhlIHBhbmVsIGlzbid0IGJ1dHRlZCB1cCBhZ2FpbnN0IHRoZSBzaWRlIG9mIHRoZSBicm93c2VyXHJcbiAgICAgICAgICAgIHNjcm9sbCA9IHZpc2libGVSaWdodCAtIHBhcmVudFdpZHRoICsgNTA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2Nyb2xsO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==