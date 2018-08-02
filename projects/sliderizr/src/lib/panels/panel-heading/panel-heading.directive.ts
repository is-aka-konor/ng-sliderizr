import { SzAnonymousPanelComponent } from '../anonymous-panel/anonymous-panel.component';
import { SzPanelComponent } from '../panel/panel.component';
import { Directive, TemplateRef, Optional } from '@angular/core';

@Directive({
    selector: '[szHeading]'
})
export class SzPanelHeadingDirective {
    public templateRef: TemplateRef<any>;

    public constructor(
        templateRef: TemplateRef<any>,
        @Optional() panel: SzPanelComponent,
        @Optional() anonPanel: SzAnonymousPanelComponent
    ) {
        (anonPanel || panel).headingRef = templateRef;
    }
}
