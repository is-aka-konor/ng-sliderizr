/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
/**
 * @template T
 */
export class SzActivePanel {
    constructor() {
        this._afterClosed = new Subject();
    }
    /**
     * @return {?}
     */
    get componentInstance() {
        return this.componentRef ? this.componentRef.instance : null;
    }
    /**
     * @param {?=} result
     * @return {?}
     */
    close(result) {
        if (this.beforeClose) {
            this.beforeClose().then((/**
             * @return {?}
             */
            () => {
                this.internalClose();
            }));
            return;
        }
        this.internalClose(result);
    }
    /**
     * @private
     * @param {?=} result
     * @return {?}
     */
    internalClose(result) {
        this.componentRef.destroy();
        this._afterClosed.next(result);
        this._afterClosed.complete();
    }
    /**
     * @return {?}
     */
    get afterClosed() {
        return this._afterClosed.asObservable();
    }
}
SzActivePanel.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SzActivePanel.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLXBhbmVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctc2xpZGVyaXpyLyIsInNvdXJjZXMiOlsibGliL2NvcmUvcGFuZWwvYWN0aXZlLXBhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sTUFBTSxDQUFDOzs7O0FBRzNDLE1BQU0sT0FBTyxhQUFhO0lBU3RCO1FBUFEsaUJBQVksR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQVFuRCxDQUFDOzs7O0lBTEQsSUFBVyxpQkFBaUI7UUFDeEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2pFLENBQUM7Ozs7O0lBS00sS0FBSyxDQUFDLE1BQVk7UUFDckIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN4QixDQUFDLEVBQUMsQ0FBQztZQUNILE9BQU87U0FDWDtRQUVELElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLE1BQVk7UUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCxJQUFXLFdBQVc7UUFDbEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVDLENBQUM7OztZQWhDSixVQUFVOzs7Ozs7SUFFUCxxQ0FBcUM7Ozs7O0lBQ3JDLHFDQUFtRDs7SUFDbkQsb0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgQ29tcG9uZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN6QWN0aXZlUGFuZWw8VD4ge1xyXG4gICAgcHVibGljIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFQ+O1xyXG4gICAgcHJpdmF0ZSBfYWZ0ZXJDbG9zZWQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgICBiZWZvcmVDbG9zZTogKCkgPT4gUHJvbWlzZTxhbnk+O1xyXG5cclxuICAgIHB1YmxpYyBnZXQgY29tcG9uZW50SW5zdGFuY2UoKTogVCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50UmVmID8gdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZShyZXN1bHQ/OiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5iZWZvcmVDbG9zZSkge1xyXG4gICAgICAgICAgICAgdGhpcy5iZWZvcmVDbG9zZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcm5hbENsb3NlKCk7XHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaW50ZXJuYWxDbG9zZShyZXN1bHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW50ZXJuYWxDbG9zZShyZXN1bHQ/OiBhbnkpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5fYWZ0ZXJDbG9zZWQubmV4dChyZXN1bHQpO1xyXG4gICAgICAgIHRoaXMuX2FmdGVyQ2xvc2VkLmNvbXBsZXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBhZnRlckNsb3NlZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hZnRlckNsb3NlZC5hc09ic2VydmFibGUoKTtcclxuICAgIH1cclxufVxyXG4iXX0=