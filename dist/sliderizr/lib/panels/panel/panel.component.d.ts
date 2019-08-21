import { BasePanel } from '../base-panel';
import { SzPanelHostComponent } from './../../panel-host/panel-host.component';
import { ChildPanelHostDirective } from './../../child-panel-host/child-panel-host.directive';
import { ActivatedRoute, Router } from '@angular/router';
import { ElementRef, EventEmitter, Injector, OnDestroy, OnInit } from '@angular/core';
import { SzActivePanel } from '../../core/panel/active-panel';
import { SzPanelService } from '../../core/panel/panel.service';
import { ComponentType } from '../../core/generic-component-type';
export declare class SzPanelComponent extends BasePanel implements OnInit, OnDestroy {
    private _panelService;
    private _route;
    private _router;
    private _activeAnon;
    private _destroyed$;
    childPanelHost: ChildPanelHostDirective;
    private _childOutlet;
    afterChildClosed: EventEmitter<any>;
    afterChildOpened: EventEmitter<any>;
    readonly childComponent: Object;
    constructor(parent: SzPanelHostComponent, _panelService: SzPanelService, injector: Injector, element: ElementRef, _route: ActivatedRoute, _router: Router);
    ngOnInit(): void;
    /**
     * Open an anonymous panel
     * @param content The component representing the anon panel
     */
    openChild<T>(content: ComponentType<T>): SzActivePanel<T>;
    /**
     * Close the panel
     * This routes to the parent panel
     */
    close(): void;
    /**
     * Closes all child panels
     * Essentially this routes to the current panel
     */
    closeChildRoute(): void;
    ngOnDestroy(): void;
    /**
     * Event handler for when the router outlet deactivates
     * @param component The component that was deactivated
     */
    onChildDeactivate(component: any): void;
    /**
     * Event handler for when the router outlet activates
     * @param component The component that the outlet was activated with
     */
    onChildActivate(component: any): void;
}
