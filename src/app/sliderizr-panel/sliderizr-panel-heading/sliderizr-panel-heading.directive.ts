import { SliderizrPanelComponent } from './../sliderizr-panel.component';
import { Directive, TemplateRef } from '@angular/core';

/** Should be used to mark <template> element as a template for tab heading */
@Directive({
    selector: '[szHeading]'
})
export class SliderizrPanelHeadingDirective {
    public templateRef: TemplateRef<any>;

    public constructor(templateRef: TemplateRef<any>, panel: SliderizrPanelComponent) {
        panel.headingRef = templateRef;
    }
}
