import { SzAnonymousPanelComponent } from '../anonymous-panel/anonymous-panel.component';
import { SzPanelComponent } from '../panel/panel.component';
import { TemplateRef } from '@angular/core';
/** Should be used to mark <template> element as a template for tab heading */
export declare class SzCloseContentDirective {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>, panel: SzPanelComponent, anonPanel: SzAnonymousPanelComponent);
}
