import { Injectable, Injector } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';

import { wrapIntoObservable } from '../utils';
import { SliderizrPanelComponent } from './../sliderizr-panel/sliderizr-panel.component';
import { PanelRouteMap } from './panel-route-map';
import { PanelCloseGuard } from './panel-close-guard';

@Injectable()
export class PanelManagerService {
    private _panelMap: PanelRouteMap[];

    constructor(private router: Router) {
        this._panelMap = [];
    }

    public closePanel(panel: SliderizrPanelComponent) {
        const mapping = this.getPanelMapping(panel);
        this.router.navigate(['./'], { relativeTo: mapping.route.parent });
    }

    public slidePanelShut(component: any): Promise<boolean> {
        const map = this._panelMap.find(m => component instanceof <any>m.route.component);
        return map.panel.slideShut().then(() => true);
    }

    public getPanelMapping(item: ActivatedRoute | SliderizrPanelComponent | object) {
        if (item instanceof ActivatedRoute) {
            return this._panelMap.find(o => o.route === item);
        }

        if (item instanceof SliderizrPanelComponent) {
            return this._panelMap.find(o => o.panel === item);
        }

        return this._panelMap.find(m => item instanceof <any>m.route.component);
    }

    public registerPanel(panel: SliderizrPanelComponent, route: ActivatedRoute) {
        this._panelMap.push({
            panel: panel,
            route: route,
            canDeactivate: [...(route.routeConfig.canDeactivate || [])]
        });

        route.routeConfig.canDeactivate = [PanelCloseGuard];
    }

    public unregisterPanel(panel: SliderizrPanelComponent) {
        const map = this.getPanelMapping(panel);
        const ix = this._panelMap.findIndex(o => o.panel === panel);

        if (ix >= 0) {
            map.route.routeConfig.canDeactivate = [...map.canDeactivate];
            this._panelMap.splice(ix, 1);
        }
    }
}


