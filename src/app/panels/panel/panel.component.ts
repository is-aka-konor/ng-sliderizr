import { AnonymousPanelService } from './../../anonymous-panel/anonymous-panel.service';
import { SzActivePanel } from './../../anonymous-panel/active-panel';
import { BasePanel } from '../base-panel';
import { ComponentType } from './../../generic-component-type';
import { PanelManagerService } from './../../panel-manager/panel-manager.service';
import { SzPanelHostComponent } from './../../panel-host/panel-host.component';
import { ChildPanelHostDirective } from './../../child-panel-host/child-panel-host.directive';
import { panelRouteAnimation } from './../../animations/panel-route.animation';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Component, OnInit, OnDestroy, HostBinding, Input, HostListener, forwardRef, Inject, TemplateRef, ElementRef, Injector, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { from } from 'rxjs/observable/from';
import { of } from 'rxjs/observable/of';
import { mergeMap } from 'rxjs/operator/mergeMap';
import { $$observable as symbolObservable } from 'rxjs/symbol/observable';
import { first } from 'rxjs/operator/first';
import { every } from 'rxjs/operator/every';

const CLOSED_STATE_NAME = 'closed';

@Component({
    selector: 'sz-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.scss'],
    animations: [panelRouteAnimation],
    encapsulation: ViewEncapsulation.None
 })
export class SzPanelComponent extends BasePanel implements OnInit, OnDestroy {
    @ViewChild(ChildPanelHostDirective) childPanelHost: ChildPanelHostDirective;
    @ViewChild(RouterOutlet) private _childOutlet: RouterOutlet;
    private _slideShutResolver: () => void;
    private _activeAnon: SzActivePanel<any>;

    constructor(
        injector: Injector,
        element: ElementRef,
        private route: ActivatedRoute,
        @Optional() parent: SzPanelHostComponent,
        private _panelService: AnonymousPanelService,
        @Inject(forwardRef(() => PanelManagerService)) private panelManager: PanelManagerService) {
            super(parent, element, injector);
        panelManager.registerPanel(this, route);
    }


    ngOnInit() {
        this._canClose = this.route.root !== this.route.parent;
        this._parent.setActivePanel(this);
    }

    public openChild<T>(content: ComponentType<T>): SzActivePanel<T> {
        // check that can close existing child

        if (this._childOutlet.isActivated) {
            this._childOutlet.deactivate();
        }

        this._activeAnon = this._panelService.open<T>(content, this, this._injector);

        this._activeAnon.afterClosed.subscribe(() => {
            this._activeAnon = null;
        });

        return this._activeAnon;
    }

    close() {
        this.panelManager.closePanel(this);
    }

    ngOnDestroy() {
        this.panelManager.unregisterPanel(this);
    }

    onChildActivate(args: any) {
        if (this._activeAnon) {
            this._activeAnon.close();
        }
    }
}
