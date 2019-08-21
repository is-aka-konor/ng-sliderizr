import { TemplateRef, ViewContainerRef } from '@angular/core';
export declare class TemplateHostDirective {
    viewRef: ViewContainerRef;
    protected _viewRef: ViewContainerRef;
    protected _szTemplateHost: TemplateRef<any>;
    szTemplateHost: TemplateRef<any>;
    constructor(viewRef: ViewContainerRef);
}
