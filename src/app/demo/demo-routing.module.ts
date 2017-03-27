import { DemoRandomPanelComponent } from './demo-random-panel/demo-random-panel.component';
import { DemoResultDetailsGuardGuard } from './demo-results/demo-result-details/demo-result-details-guard';
import { DemoResultDetailsComponent } from './demo-results/demo-result-details/demo-result-details.component';
import { DemoResultsComponent } from './demo-results/demo-results.component';
import { DemoDashboardComponent } from './demo-dashboard/demo-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

const resultsRoute: Route = {
    path: 'demo-results',
        component: DemoResultsComponent,
        //canDeactivate: [DemoResultDetailsGuardGuard],
        children: [
            {
                path: 'demo-result-details/:id',
                component: DemoResultDetailsComponent
            }
        ]
};

const demoRandom: Route = {
        path: 'demo-random',
        component: DemoRandomPanelComponent,
        children: [
            resultsRoute
        ]
    };

const routes: Routes = [
    {
        path: '',
        redirectTo: '/demo-dashboard',
        pathMatch: 'full'
    },
    {
        path: 'demo-dashboard',
        component: DemoDashboardComponent,
        children: [
            resultsRoute,
            demoRandom
        ]
    },
    demoRandom,
    resultsRoute
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        DemoResultDetailsGuardGuard
    ]
})
export class DemoRoutingModule { }
