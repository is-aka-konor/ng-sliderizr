import { SzPanelService } from './panel/panel.service';
import { TemplateHostDirective } from './template-host/template-host.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TemplateHostDirective
    ],
    exports: [
        TemplateHostDirective
    ],
    providers: [
        SzPanelService
    ]
})
export class CoreModule { }
