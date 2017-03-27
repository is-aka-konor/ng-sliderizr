import { TemplateHostDirective } from './template-host/template-host.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelCloseGuard } from './panel-manager/panel-close-guard';
import { PanelManagerService } from './panel-manager/panel-manager.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule, Route } from '@angular/router';

import { SliderizrPanelComponent } from './sliderizr-panel/sliderizr-panel.component';
import { SliderizrPanelHeadingDirective } from './sliderizr-panel/sliderizr-panel-heading/sliderizr-panel-heading.directive';
import { SliderizrHostComponent } from './sliderizr-host/sliderizr-host.component';

@NgModule({
    declarations: [
        SliderizrPanelComponent,
        TemplateHostDirective,
        SliderizrPanelHeadingDirective,
        SliderizrHostComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
        BrowserAnimationsModule
    ],
    exports: [
        SliderizrPanelComponent,
        SliderizrPanelHeadingDirective,
        SliderizrHostComponent
    ],
    providers: [
        PanelManagerService,
        PanelCloseGuard
    ]
})
export class SliderizrModule { }
