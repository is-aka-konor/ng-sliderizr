import { SzCloseContentDirective } from './panels/close-content/close-content.directive';
import { CommonModule } from '@angular/common';
import { SzPanelHeadingDirective } from './panels/panel-heading/panel-heading.directive';
import { SzPanelComponent } from './panels/panel/panel.component';
import { SzAnonymousPanelComponent } from './panels/anonymous-panel/anonymous-panel.component';
import { SzPanelService, CoreModule } from './core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule, Route } from '@angular/router';
import { SzPanelHostComponent } from './panel-host/panel-host.component';
import { ChildPanelHostDirective } from './child-panel-host/child-panel-host.directive';
import { SzHeaderTemplateDirective } from './panels/header-template/header-template.directive';

@NgModule({
    declarations: [
        SzPanelComponent,
        SzPanelHeadingDirective,
        SzPanelHostComponent,
        ChildPanelHostDirective,
        SzAnonymousPanelComponent,
        SzCloseContentDirective,
        SzHeaderTemplateDirective
    ],
    imports: [
        CommonModule,
        RouterModule,
        CoreModule
    ],
    exports: [
        SzPanelComponent,
        SzPanelHeadingDirective,
        SzPanelHostComponent,
        SzAnonymousPanelComponent,
        SzCloseContentDirective,
        SzHeaderTemplateDirective
    ]
})
export class SliderizrModule { }
