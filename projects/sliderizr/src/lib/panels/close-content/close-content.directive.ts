import { SzAnonymousPanelComponent } from './../anonymous-panel/anonymous-panel.component';
import { SzPanelComponent } from './../panel/panel.component';
import { Directive, TemplateRef, Optional } from '@angular/core';

/** Should be used to mark <template> element as a template for tab heading */
@Directive({
    selector: '[szCloseContent]'
})
export class SzCloseContentDirective {
    public templateRef: TemplateRef<any>;

    public constructor(
        templateRef: TemplateRef<any>,
        @Optional() panel: SzPanelComponent,
        @Optional() anonPanel: SzAnonymousPanelComponent
    ) {
        (panel || anonPanel).closeContentRef = templateRef;
    }
}
