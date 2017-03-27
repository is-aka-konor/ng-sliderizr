import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { of } from 'rxjs/observable/of';
import { first } from 'rxjs/operator/first';
import { every } from 'rxjs/operator/every';
import { Observable } from 'rxjs/Observable';
import { mergeMap } from 'rxjs/operator/mergeMap';
import { wrapIntoObservable } from '../utils';
import { from } from 'rxjs/observable/from';

import { PanelManagerService } from './panel-manager.service';

@Injectable()
export class PanelCloseGuard implements CanDeactivate<any> {
    constructor(
        private panelManager: PanelManagerService,
        private injector: Injector
        ) { }

    canDeactivate(component: any, route: ActivatedRouteSnapshot, state: RouterStateSnapshot, nextState: RouterStateSnapshot) {
        return new Promise(resolve => {
            this.runOriginalGuards(component, route, state, nextState).subscribe(value => {
                if (value) {
                    // If route trees aren't different (i.e just a param change) then dont animate shut
                    if (this.compareRouteTrees(state.root, nextState.root)) {
                        resolve(true);
                    } else {
                        this.panelManager.slidePanelShut(component).then(() => {
                            resolve(true);
                        });
                    }
                } else {
                    resolve(false);
                }
            });
        });
    }

    public runOriginalGuards(component: any,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
        nextState: RouterStateSnapshot
        ): Observable<boolean> {
        const map = this.panelManager.getPanelMapping(component);

        if (!map.canDeactivate || !map.canDeactivate.length) {
            return of(true);
        }

        const canDeactivate$ = mergeMap.call(from(map.canDeactivate), (c: any) => {
            const guard = this.injector.get(c);
            let observable: Observable<boolean>;

            if (guard.canDeactivate) {
                observable = wrapIntoObservable(guard.canDeactivate(component, route, state, nextState));
            } else {
                observable = wrapIntoObservable(guard(component, route, state, nextState));
            }
            return first.call(observable);
        });
        return every.call(canDeactivate$, (result: any) => result === true);
    }

    compareRouteTrees(route: ActivatedRouteSnapshot, nextRoute: ActivatedRouteSnapshot): boolean {
        // If the route's component isn't the same as the next routes or if they have different
        // children counts then the route tree is different
        if (route.component !== nextRoute.component || route.children.length !== nextRoute.children.length) {
            return false;
        }

        return route.children.every((childRoute, index) => {
            return this.compareRouteTrees(childRoute, nextRoute.children[index]);
        });
    }
}
