import { PANEL_ROUTE_ANIMATION, SzActivePanel, SzPanelService, ComponentType } from './../../core';
import { BasePanel } from '../base-panel';
import { SzPanelHostComponent } from './../../panel-host/panel-host.component';
import { ChildPanelHostDirective } from './../../child-panel-host/child-panel-host.directive';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { EventEmitter, AfterViewInit, Component, OnInit, OnDestroy, HostBinding, Input, HostListener, forwardRef, Inject, TemplateRef, ElementRef, Injector, Optional, ViewChild, ViewEncapsulation, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';

@Component({
    selector: 'sz-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.scss'],
    animations: [PANEL_ROUTE_ANIMATION],
    encapsulation: ViewEncapsulation.None
})
export class SzPanelComponent extends BasePanel implements OnInit, OnDestroy {
    private _activeAnon: SzActivePanel<any>;
    private _subs: ISubscription[] = [];
    @ViewChild(ChildPanelHostDirective) childPanelHost: ChildPanelHostDirective;
    @ViewChild(RouterOutlet) private _childOutlet: RouterOutlet;
    @Output() afterChildClosed = new EventEmitter<any>();
    @Output() afterChildOpened = new EventEmitter<any>();

    public get childComponent(): Object {
        return this._childOutlet.component;
    }

    constructor(
        injector: Injector,
        element: ElementRef,
        private _route: ActivatedRoute,
        private _router: Router,
        @Optional() parent: SzPanelHostComponent,
        private _panelService: SzPanelService,
    ) {
        super(parent, element, injector);
    }


    ngOnInit() {
        this._canClose = this._route.root !== this._route.parent;
        this._parent.setActivePanel(this, true);

        this._subs.push(this._route.params.subscribe(() => {
            this._parent.setActivePanel(this, true);
        }));
    }

    public openChild<T>(content: ComponentType<T>): SzActivePanel<T> {
        if (this._childOutlet.isActivated) {
            this.closeChildRoute();
        }

        this._activeAnon = this._panelService.open<T>(content, this, this._injector);

        this._activeAnon.afterClosed.subscribe(() => {
            this._activeAnon = null;
        });

        this._parent.setActivePanel(this._activeAnon.componentInstance);

        return this._activeAnon;
    }

    close() {
        this._router.navigate(['./'], { relativeTo: this._route.parent });
    }

    closeChildRoute() {
        this._router.navigate(['./'], { relativeTo: this._route });
    }

    ngOnDestroy() {
        this._subs.forEach(s => s.unsubscribe());
    }

    onChildDeactivate(component: any) {
        this.afterChildClosed.emit(component);
    }

    onChildActivate(component: any) {
        console.log('activated');
        this.afterChildOpened.emit(component);
        if (this._activeAnon) {
            this._activeAnon.close();
        }
    }
}
