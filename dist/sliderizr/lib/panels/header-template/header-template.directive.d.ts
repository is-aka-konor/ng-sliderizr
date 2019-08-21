import { SzAnonymousPanelComponent } from '../anonymous-panel/anonymous-panel.component';
import { SzPanelComponent } from '../panel/panel.component';
import { TemplateRef } from '@angular/core';
export declare class SzHeaderTemplateDirective {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>, panel: SzPanelComponent, anonPanel: SzAnonymousPanelComponent);
}
