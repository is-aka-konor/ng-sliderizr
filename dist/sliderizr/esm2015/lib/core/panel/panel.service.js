/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { SzActivePanel } from './active-panel';
import { Injectable, ComponentFactoryResolver, Injector, ReflectiveInjector } from '@angular/core';
export class SzPanelService {
    /**
     * @param {?} _componentFactoryResolver
     * @param {?} _injector
     */
    constructor(_componentFactoryResolver, _injector) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._injector = _injector;
    }
    /**
     * @template T
     * @param {?} content
     * @param {?} host
     * @param {?=} injector
     * @return {?}
     */
    open(content, host, injector) {
        /** @type {?} */
        const afterClosed = new Subject();
        /** @type {?} */
        const activePanel = new SzActivePanel();
        injector = injector ? injector : this._injector;
        /** @type {?} */
        const componentFactory = this._componentFactoryResolver.resolveComponentFactory(content);
        /** @type {?} */
        const modalContentInjector = ReflectiveInjector.resolveAndCreate([{ provide: SzActivePanel, useValue: activePanel }], injector);
        /** @type {?} */
        const viewContainerRef = host.childPanelHost.viewContainerRef;
        viewContainerRef.clear();
        /** @type {?} */
        const componentRef = viewContainerRef.createComponent(componentFactory, null, modalContentInjector);
        activePanel.componentRef = componentRef;
        return activePanel;
    }
}
SzPanelService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SzPanelService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: Injector }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SzPanelService.prototype._componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    SzPanelService.prototype._injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXNsaWRlcml6ci8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL3BhbmVsL3BhbmVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9DLE9BQU8sRUFDSCxVQUFVLEVBQ1Ysd0JBQXdCLEVBQ3hCLFFBQVEsRUFDUixrQkFBa0IsRUFDckIsTUFBTSxlQUFlLENBQUM7QUFHdkIsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBQ3ZCLFlBQ1kseUJBQW1ELEVBQ25ELFNBQW1CO1FBRG5CLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMEI7UUFDbkQsY0FBUyxHQUFULFNBQVMsQ0FBVTtJQUUvQixDQUFDOzs7Ozs7OztJQUVELElBQUksQ0FBSSxPQUF5QixFQUFFLElBQXNCLEVBQUUsUUFBbUI7O2NBQ3BFLFdBQVcsR0FBRyxJQUFJLE9BQU8sRUFBRTs7Y0FDM0IsV0FBVyxHQUFHLElBQUksYUFBYSxFQUFLO1FBQzFDLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Y0FFMUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLHVCQUF1QixDQUFJLE9BQU8sQ0FBQzs7Y0FDckYsb0JBQW9CLEdBQUcsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDOztjQUV6SCxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQjtRQUM3RCxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Y0FDbkIsWUFBWSxHQUFHLGdCQUFnQixDQUFDLGVBQWUsQ0FBSSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLENBQUM7UUFFdEcsV0FBVyxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFFeEMsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQzs7O1lBdkJKLFVBQVU7Ozs7WUFMUCx3QkFBd0I7WUFDeEIsUUFBUTs7Ozs7OztJQU9KLG1EQUEyRDs7Ozs7SUFDM0QsbUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3pQYW5lbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL3BhbmVscy9wYW5lbC9wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAnLi4vZ2VuZXJpYy1jb21wb25lbnQtdHlwZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU3pBY3RpdmVQYW5lbCB9IGZyb20gJy4vYWN0aXZlLXBhbmVsJztcclxuaW1wb3J0IHtcclxuICAgIEluamVjdGFibGUsXHJcbiAgICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBJbmplY3RvcixcclxuICAgIFJlZmxlY3RpdmVJbmplY3RvclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3pQYW5lbFNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuPFQ+KGNvbnRlbnQ6IENvbXBvbmVudFR5cGU8VD4sIGhvc3Q6IFN6UGFuZWxDb21wb25lbnQsIGluamVjdG9yPzogSW5qZWN0b3IpOiBTekFjdGl2ZVBhbmVsPFQ+IHtcclxuICAgICAgICBjb25zdCBhZnRlckNsb3NlZCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlUGFuZWwgPSBuZXcgU3pBY3RpdmVQYW5lbDxUPigpO1xyXG4gICAgICAgIGluamVjdG9yID0gaW5qZWN0b3IgPyBpbmplY3RvciA6IHRoaXMuX2luamVjdG9yO1xyXG5cclxuICAgICAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PFQ+KGNvbnRlbnQpO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsQ29udGVudEluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmVBbmRDcmVhdGUoW3sgcHJvdmlkZTogU3pBY3RpdmVQYW5lbCwgdXNlVmFsdWU6IGFjdGl2ZVBhbmVsIH1dLCBpbmplY3Rvcik7XHJcblxyXG4gICAgICAgIGNvbnN0IHZpZXdDb250YWluZXJSZWYgPSBob3N0LmNoaWxkUGFuZWxIb3N0LnZpZXdDb250YWluZXJSZWY7XHJcbiAgICAgICAgdmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50PFQ+KGNvbXBvbmVudEZhY3RvcnksIG51bGwsIG1vZGFsQ29udGVudEluamVjdG9yKTtcclxuXHJcbiAgICAgICAgYWN0aXZlUGFuZWwuY29tcG9uZW50UmVmID0gY29tcG9uZW50UmVmO1xyXG5cclxuICAgICAgICByZXR1cm4gYWN0aXZlUGFuZWw7XHJcbiAgICB9XHJcbn1cclxuIl19