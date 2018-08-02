import {
    Directive,
    Input,
    TemplateRef,
    ViewContainerRef
} from '@angular/core';

@Directive({
    selector: '[szTemplateHost]'
})
export class TemplateHostDirective {
    public viewRef: ViewContainerRef;

    protected _viewRef: ViewContainerRef;
    protected _szTemplateHost: TemplateRef<any>;

    @Input()
    public set szTemplateHost(templateRef: TemplateRef<any>) {
        this._szTemplateHost = templateRef;
        if (templateRef) {
            this.viewRef.createEmbeddedView(templateRef);
        }
    }

    public get szTemplateHost(): TemplateRef<any> {
        return this._szTemplateHost;
    }

    public constructor(viewRef: ViewContainerRef) {
        this.viewRef = viewRef;
    }
}
