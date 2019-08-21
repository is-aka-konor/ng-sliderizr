/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { WindowRefService } from '../core/window-ref/window-ref.service';
export class SzPanelHostComponent {
    /**
     * @param {?} element
     * @param {?} _cdr
     * @param {?} _windowRef
     */
    constructor(element, _cdr, _windowRef) {
        this.element = element;
        this._cdr = _cdr;
        this._windowRef = _windowRef;
    }
    /**
     * @return {?}
     */
    get boundingBox() {
        return this.nativeElement.getBoundingClientRect();
    }
    /**
     * @private
     * @return {?}
     */
    get nativeElement() {
        return this.element.nativeElement;
    }
    /**
     * @return {?}
     */
    get outerWidth() {
        return this.nativeElement.offsetWidth;
    }
    /**
     * @return {?}
     */
    get scrollLeft() {
        return this.nativeElement.scrollLeft;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set scrollLeft(value) {
        this._windowRef.scrollTo(this.nativeElement, value, 200);
    }
    /**
     * @param {?} panel
     * @param {?=} hasPriority
     * @return {?}
     */
    setActivePanel(panel, hasPriority = false) {
        if (hasPriority) {
            this._windowRef.nativeWindow.setTimeout((/**
             * @return {?}
             */
            () => {
                this.setActivePanel(panel);
                this._cdr.markForCheck();
            }));
        }
        else {
            if (this._activePanel) {
                this._activePanel.isActive = false;
            }
            this._activePanel = panel;
            this._activePanel.isActive = true;
        }
    }
}
SzPanelHostComponent.decorators = [
    { type: Component, args: [{
                selector: 'sz-panel-host',
                template: "<ng-content></ng-content>",
                encapsulation: ViewEncapsulation.None,
                styles: ["sz-panel-host{white-space:nowrap;position:fixed;top:100px;right:0;bottom:0;left:0;overflow:auto}"]
            }] }
];
/** @nocollapse */
SzPanelHostComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: WindowRefService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtaG9zdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1zbGlkZXJpenIvIiwic291cmNlcyI6WyJsaWIvcGFuZWwtaG9zdC9wYW5lbC1ob3N0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFTekUsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBRzdCLFlBQ1ksT0FBbUIsRUFDbkIsSUFBdUIsRUFDdkIsVUFBNEI7UUFGNUIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixTQUFJLEdBQUosSUFBSSxDQUFtQjtRQUN2QixlQUFVLEdBQVYsVUFBVSxDQUFrQjtJQUNwQyxDQUFDOzs7O0lBRUwsSUFBVyxXQUFXO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBRUQsSUFBWSxhQUFhO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELElBQVcsVUFBVTtRQUNqQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCxJQUFXLFVBQVU7UUFDakIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELElBQVcsVUFBVSxDQUFDLEtBQWE7UUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7O0lBRU0sY0FBYyxDQUFDLEtBQWdCLEVBQUUsV0FBVyxHQUFHLEtBQUs7UUFDdkQsSUFBSSxXQUFXLEVBQUU7WUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxVQUFVOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDN0IsQ0FBQyxFQUFDLENBQUM7U0FDTjthQUFNO1lBQ0gsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDdEM7WUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDckM7SUFDTCxDQUFDOzs7WUFqREosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixxQ0FBMEM7Z0JBRTFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN4Qzs7OztZQVRzQyxVQUFVO1lBQXhDLGlCQUFpQjtZQUNqQixnQkFBZ0I7Ozs7Ozs7SUFVckIsNENBQWdDOzs7OztJQUc1Qix1Q0FBMkI7Ozs7O0lBQzNCLG9DQUErQjs7Ozs7SUFDL0IsMENBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2luZG93UmVmU2VydmljZSB9IGZyb20gJy4uL2NvcmUvd2luZG93LXJlZi93aW5kb3ctcmVmLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCYXNlUGFuZWwgfSBmcm9tICcuLi9wYW5lbHMvYmFzZS1wYW5lbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3otcGFuZWwtaG9zdCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGFuZWwtaG9zdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9wYW5lbC1ob3N0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTelBhbmVsSG9zdENvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIF9hY3RpdmVQYW5lbDogQmFzZVBhbmVsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChcclxuICAgICAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICBwcml2YXRlIF93aW5kb3dSZWY6IFdpbmRvd1JlZlNlcnZpY2VcclxuICAgICkgeyB9XHJcblxyXG4gICAgcHVibGljIGdldCBib3VuZGluZ0JveCgpOiBDbGllbnRSZWN0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IG5hdGl2ZUVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG91dGVyV2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc2Nyb2xsTGVmdCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHNjcm9sbExlZnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3dpbmRvd1JlZi5zY3JvbGxUbyh0aGlzLm5hdGl2ZUVsZW1lbnQsIHZhbHVlLCAyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRBY3RpdmVQYW5lbChwYW5lbDogQmFzZVBhbmVsLCBoYXNQcmlvcml0eSA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKGhhc1ByaW9yaXR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dpbmRvd1JlZi5uYXRpdmVXaW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZVBhbmVsKHBhbmVsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZVBhbmVsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hY3RpdmVQYW5lbC5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9hY3RpdmVQYW5lbCA9IHBhbmVsO1xyXG4gICAgICAgICAgICB0aGlzLl9hY3RpdmVQYW5lbC5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==