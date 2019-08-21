import { SzPanelComponent } from '../../panels/panel/panel.component';
import { ComponentType } from '../generic-component-type';
import { SzActivePanel } from './active-panel';
import { ComponentFactoryResolver, Injector } from '@angular/core';
export declare class SzPanelService {
    private _componentFactoryResolver;
    private _injector;
    constructor(_componentFactoryResolver: ComponentFactoryResolver, _injector: Injector);
    open<T>(content: ComponentType<T>, host: SzPanelComponent, injector?: Injector): SzActivePanel<T>;
}
