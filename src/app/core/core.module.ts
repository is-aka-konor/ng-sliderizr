import { WindowRefService } from './window-ref/window-ref.service';
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
        SzPanelService,
        WindowRefService
    ]
})
export class CoreModule { }
