/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { WindowRefService } from '../core/window-ref/window-ref.service';
var SzPanelHostComponent = /** @class */ (function () {
    function SzPanelHostComponent(element, _cdr, _windowRef) {
        this.element = element;
        this._cdr = _cdr;
        this._windowRef = _windowRef;
    }
    Object.defineProperty(SzPanelHostComponent.prototype, "boundingBox", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nativeElement.getBoundingClientRect();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SzPanelHostComponent.prototype, "nativeElement", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.element.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SzPanelHostComponent.prototype, "outerWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nativeElement.offsetWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SzPanelHostComponent.prototype, "scrollLeft", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nativeElement.scrollLeft;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._windowRef.scrollTo(this.nativeElement, value, 200);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} panel
     * @param {?=} hasPriority
     * @return {?}
     */
    SzPanelHostComponent.prototype.setActivePanel = /**
     * @param {?} panel
     * @param {?=} hasPriority
     * @return {?}
     */
    function (panel, hasPriority) {
        var _this = this;
        if (hasPriority === void 0) { hasPriority = false; }
        if (hasPriority) {
            this._windowRef.nativeWindow.setTimeout((/**
             * @return {?}
             */
            function () {
                _this.setActivePanel(panel);
                _this._cdr.markForCheck();
            }));
        }
        else {
            if (this._activePanel) {
                this._activePanel.isActive = false;
            }
            this._activePanel = panel;
            this._activePanel.isActive = true;
        }
    };
    SzPanelHostComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sz-panel-host',
                    template: "<ng-content></ng-content>",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["sz-panel-host{white-space:nowrap;position:fixed;top:100px;right:0;bottom:0;left:0;overflow:auto}"]
                }] }
    ];
    /** @nocollapse */
    SzPanelHostComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: WindowRefService }
    ]; };
    return SzPanelHostComponent;
}());
export { SzPanelHostComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SzPanelHostComponent.prototype._activePanel;
    /**
     * @type {?}
     * @private
     */
    SzPanelHostComponent.prototype.element;
    /**
     * @type {?}
     * @private
     */
    SzPanelHostComponent.prototype._cdr;
    /**
     * @type {?}
     * @private
     */
    SzPanelHostComponent.prototype._windowRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtaG9zdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1zbGlkZXJpenIvIiwic291cmNlcyI6WyJsaWIvcGFuZWwtaG9zdC9wYW5lbC1ob3N0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFHekU7SUFTSSw4QkFDWSxPQUFtQixFQUNuQixJQUF1QixFQUN2QixVQUE0QjtRQUY1QixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLFNBQUksR0FBSixJQUFJLENBQW1CO1FBQ3ZCLGVBQVUsR0FBVixVQUFVLENBQWtCO0lBQ3BDLENBQUM7SUFFTCxzQkFBVyw2Q0FBVzs7OztRQUF0QjtZQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ3RELENBQUM7OztPQUFBO0lBRUQsc0JBQVksK0NBQWE7Ozs7O1FBQXpCO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDRDQUFVOzs7O1FBQXJCO1lBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDRDQUFVOzs7O1FBQXJCO1lBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztRQUN6QyxDQUFDOzs7OztRQUVELFVBQXNCLEtBQWE7WUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDN0QsQ0FBQzs7O09BSkE7Ozs7OztJQU1NLDZDQUFjOzs7OztJQUFyQixVQUFzQixLQUFnQixFQUFFLFdBQW1CO1FBQTNELGlCQWNDO1FBZHVDLDRCQUFBLEVBQUEsbUJBQW1CO1FBQ3ZELElBQUksV0FBVyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsVUFBVTs7O1lBQUM7Z0JBQ3BDLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDN0IsQ0FBQyxFQUFDLENBQUM7U0FDTjthQUFNO1lBQ0gsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDdEM7WUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDckM7SUFDTCxDQUFDOztnQkFqREosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxlQUFlO29CQUN6QixxQ0FBMEM7b0JBRTFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDeEM7Ozs7Z0JBVHNDLFVBQVU7Z0JBQXhDLGlCQUFpQjtnQkFDakIsZ0JBQWdCOztJQXFEekIsMkJBQUM7Q0FBQSxBQWxERCxJQWtEQztTQTVDWSxvQkFBb0I7Ozs7OztJQUM3Qiw0Q0FBZ0M7Ozs7O0lBRzVCLHVDQUEyQjs7Ozs7SUFDM0Isb0NBQStCOzs7OztJQUMvQiwwQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXaW5kb3dSZWZTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS93aW5kb3ctcmVmL3dpbmRvdy1yZWYuc2VydmljZSc7XHJcbmltcG9ydCB7IEJhc2VQYW5lbCB9IGZyb20gJy4uL3BhbmVscy9iYXNlLXBhbmVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzei1wYW5lbC1ob3N0JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9wYW5lbC1ob3N0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3BhbmVsLWhvc3QuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIFN6UGFuZWxIb3N0Q29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgX2FjdGl2ZVBhbmVsOiBCYXNlUGFuZWw7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKFxyXG4gICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIF9jZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIHByaXZhdGUgX3dpbmRvd1JlZjogV2luZG93UmVmU2VydmljZVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGJvdW5kaW5nQm94KCk6IENsaWVudFJlY3Qge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQgbmF0aXZlRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgb3V0ZXJXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzY3JvbGxMZWZ0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgc2Nyb2xsTGVmdCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fd2luZG93UmVmLnNjcm9sbFRvKHRoaXMubmF0aXZlRWxlbWVudCwgdmFsdWUsIDIwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEFjdGl2ZVBhbmVsKHBhbmVsOiBCYXNlUGFuZWwsIGhhc1ByaW9yaXR5ID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAoaGFzUHJpb3JpdHkpIHtcclxuICAgICAgICAgICAgdGhpcy5fd2luZG93UmVmLm5hdGl2ZVdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlUGFuZWwocGFuZWwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fYWN0aXZlUGFuZWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FjdGl2ZVBhbmVsLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2FjdGl2ZVBhbmVsID0gcGFuZWw7XHJcbiAgICAgICAgICAgIHRoaXMuX2FjdGl2ZVBhbmVsLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19