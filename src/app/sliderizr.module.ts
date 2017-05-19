import { SzCloseContentDirective } from './panels/close-content/close-content.directive';
import { AnonymousPanelService } from './anonymous-panel/anonymous-panel.service';
import { CommonModule } from '@angular/common';
import { SzPanelHeadingDirective } from './panels/panel-heading/panel-heading.directive';
import { SzPanelComponent } from './panels/panel/panel.component';
import { SzAnonymousPanelComponent } from './panels/anonymous-panel/anonymous-panel.component';
import { TemplateHostDirective } from './template-host/template-host.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelManagerService } from './panel-manager/panel-manager.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule, Route } from '@angular/router';

import { SzPanelHostComponent } from './panel-host/panel-host.component';
import { ChildPanelHostDirective } from './child-panel-host/child-panel-host.directive';

@NgModule({
    declarations: [
        SzPanelComponent,
        TemplateHostDirective,
        SzPanelHeadingDirective,
        SzPanelHostComponent,
        ChildPanelHostDirective,
        SzAnonymousPanelComponent,
        SzCloseContentDirective
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        SzPanelComponent,
        SzPanelHeadingDirective,
        SzPanelHostComponent,
        SzAnonymousPanelComponent,
        SzCloseContentDirective
    ],
    providers: [
        PanelManagerService,
        AnonymousPanelService
    ]
})
export class SliderizrModule { }
