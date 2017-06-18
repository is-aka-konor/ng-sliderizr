import { SzPanelComponent } from './../../panels/panel/panel.component';
import { ComponentType } from './../generic-component-type';
import { Subject } from 'rxjs/Subject';
import { SzActivePanel } from './active-panel';
import {
    Injectable,
    ComponentFactoryResolver,
    ElementRef,
    Injector,
    TemplateRef,
    ReflectiveInjector,
    ApplicationRef,
    ComponentRef
} from '@angular/core';

@Injectable()
export class SzPanelService {
    constructor(
        private _componentFactoryResolver: ComponentFactoryResolver,
        private _injector: Injector,
        private _applicationRef: ApplicationRef
    ) {
    }

    open<T>(content: ComponentType<T>, host: SzPanelComponent, injector?: Injector): SzActivePanel<T> {
        const afterClosed = new Subject();
        const activePanel = new SzActivePanel<T>();
        injector = injector ? injector : this._injector;

        const componentFactory = this._componentFactoryResolver.resolveComponentFactory<T>(content);
        const modalContentInjector = ReflectiveInjector.resolveAndCreate([{ provide: SzActivePanel, useValue: activePanel }], injector);

        const viewContainerRef = host.childPanelHost.viewContainerRef;
        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent<T>(componentFactory, null, modalContentInjector);

        activePanel.componentRef = componentRef;

        return activePanel;
    }
}
