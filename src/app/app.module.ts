import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SliderizrModule } from '../../projects/sliderizr/src/public_api';
import { DemoDashboardComponent } from './demo-dashboard/demo-dashboard.component';
import { DemoResultsComponent } from './demo-results/demo-results.component';
import { DemoResultDetailsComponent } from './demo-results/demo-result-details/demo-result-details.component';
import { DemoRandomPanelComponent } from './demo-random-panel/demo-random-panel.component';
import { AnonPanelComponent } from './anon-panel/anon-panel.component';
import { DemoRoutingModule } from './demo-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        DemoRoutingModule,
        BrowserAnimationsModule,
        SliderizrModule
    ],
    declarations: [
        AppComponent,
        DemoDashboardComponent,
        DemoResultsComponent,
        DemoResultDetailsComponent,
        DemoRandomPanelComponent,
        AnonPanelComponent
    ],
    providers: [],
    entryComponents: [
        AnonPanelComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
