/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SzAnonymousPanelComponent } from '../anonymous-panel/anonymous-panel.component';
import { SzPanelComponent } from '../panel/panel.component';
import { Directive, TemplateRef, Optional } from '@angular/core';
export class SzHeaderTemplateDirective {
    /**
     * @param {?} templateRef
     * @param {?} panel
     * @param {?} anonPanel
     */
    constructor(templateRef, panel, anonPanel) {
        (anonPanel || panel).headerTemplate = templateRef;
    }
}
SzHeaderTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[szHeaderTemplate]'
            },] }
];
/** @nocollapse */
SzHeaderTemplateDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: SzPanelComponent, decorators: [{ type: Optional }] },
    { type: SzAnonymousPanelComponent, decorators: [{ type: Optional }] }
];
if (false) {
    /** @type {?} */
    SzHeaderTemplateDirective.prototype.templateRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXRlbXBsYXRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXNsaWRlcml6ci8iLCJzb3VyY2VzIjpbImxpYi9wYW5lbHMvaGVhZGVyLXRlbXBsYXRlL2hlYWRlci10ZW1wbGF0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUtqRSxNQUFNLE9BQU8seUJBQXlCOzs7Ozs7SUFHbEMsWUFDSSxXQUE2QixFQUNqQixLQUF1QixFQUN2QixTQUFvQztRQUVoRCxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDO0lBQ3RELENBQUM7OztZQVpKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsb0JBQW9CO2FBQ2pDOzs7O1lBSm1CLFdBQVc7WUFEdEIsZ0JBQWdCLHVCQVdoQixRQUFRO1lBWlIseUJBQXlCLHVCQWF6QixRQUFROzs7O0lBTGIsZ0RBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3pBbm9ueW1vdXNQYW5lbENvbXBvbmVudCB9IGZyb20gJy4uL2Fub255bW91cy1wYW5lbC9hbm9ueW1vdXMtcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3pQYW5lbENvbXBvbmVudCB9IGZyb20gJy4uL3BhbmVsL3BhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW3N6SGVhZGVyVGVtcGxhdGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU3pIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSB7XHJcbiAgICBwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICAgICAgIEBPcHRpb25hbCgpIHBhbmVsOiBTelBhbmVsQ29tcG9uZW50LFxyXG4gICAgICAgIEBPcHRpb25hbCgpIGFub25QYW5lbDogU3pBbm9ueW1vdXNQYW5lbENvbXBvbmVudFxyXG4gICAgKSB7XHJcbiAgICAgICAgKGFub25QYW5lbCB8fCBwYW5lbCkuaGVhZGVyVGVtcGxhdGUgPSB0ZW1wbGF0ZVJlZjtcclxuICAgIH1cclxufVxyXG4iXX0=