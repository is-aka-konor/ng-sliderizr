/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SzAnonymousPanelComponent } from '../anonymous-panel/anonymous-panel.component';
import { SzPanelComponent } from '../panel/panel.component';
import { Directive, TemplateRef, Optional } from '@angular/core';
/**
 * Should be used to mark <template> element as a template for tab heading
 */
export class SzCloseContentDirective {
    /**
     * @param {?} templateRef
     * @param {?} panel
     * @param {?} anonPanel
     */
    constructor(templateRef, panel, anonPanel) {
        (panel || anonPanel).closeContentRef = templateRef;
    }
}
SzCloseContentDirective.decorators = [
    { type: Directive, args: [{
                selector: '[szCloseContent]'
            },] }
];
/** @nocollapse */
SzCloseContentDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: SzPanelComponent, decorators: [{ type: Optional }] },
    { type: SzAnonymousPanelComponent, decorators: [{ type: Optional }] }
];
if (false) {
    /** @type {?} */
    SzCloseContentDirective.prototype.templateRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UtY29udGVudC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1zbGlkZXJpenIvIiwic291cmNlcyI6WyJsaWIvcGFuZWxzL2Nsb3NlLWNvbnRlbnQvY2xvc2UtY29udGVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU1qRSxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7SUFHaEMsWUFDSSxXQUE2QixFQUNqQixLQUF1QixFQUN2QixTQUFvQztRQUVoRCxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDO0lBQ3ZELENBQUM7OztZQVpKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsa0JBQWtCO2FBQy9COzs7O1lBTG1CLFdBQVc7WUFEdEIsZ0JBQWdCLHVCQVloQixRQUFRO1lBYlIseUJBQXlCLHVCQWN6QixRQUFROzs7O0lBTGIsOENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3pBbm9ueW1vdXNQYW5lbENvbXBvbmVudCB9IGZyb20gJy4uL2Fub255bW91cy1wYW5lbC9hbm9ueW1vdXMtcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3pQYW5lbENvbXBvbmVudCB9IGZyb20gJy4uL3BhbmVsL3BhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKiogU2hvdWxkIGJlIHVzZWQgdG8gbWFyayA8dGVtcGxhdGU+IGVsZW1lbnQgYXMgYSB0ZW1wbGF0ZSBmb3IgdGFiIGhlYWRpbmcgKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tzekNsb3NlQ29udGVudF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTekNsb3NlQ29udGVudERpcmVjdGl2ZSB7XHJcbiAgICBwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICAgICAgIEBPcHRpb25hbCgpIHBhbmVsOiBTelBhbmVsQ29tcG9uZW50LFxyXG4gICAgICAgIEBPcHRpb25hbCgpIGFub25QYW5lbDogU3pBbm9ueW1vdXNQYW5lbENvbXBvbmVudFxyXG4gICAgKSB7XHJcbiAgICAgICAgKHBhbmVsIHx8IGFub25QYW5lbCkuY2xvc2VDb250ZW50UmVmID0gdGVtcGxhdGVSZWY7XHJcbiAgICB9XHJcbn1cclxuIl19