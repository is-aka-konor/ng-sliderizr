import { SzAnonymousPanelComponent } from './../../panels/anonymous-panel/anonymous-panel.component';
import { Observable } from 'rxjs/Observable';
import { Injectable, ComponentRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SzActivePanel<T> {
    public componentRef: ComponentRef<T>;
    private _afterClosed: Subject<any> = new Subject();
    beforeClose: () => Promise<any>;

    public get componentInstance(): T {
        return this.componentRef ? this.componentRef.instance : null;
    }

    constructor() {
    }

    public close(result?: any) {
        if (this.beforeClose) {
             this.beforeClose().then(() => {
                this.internalClose();
             });
             return;
        }

        this.internalClose(result);
    }

    private internalClose(result?: any) {
        this.componentRef.destroy();
        this._afterClosed.next(result);
        this._afterClosed.complete();
    }

    public get afterClosed(): Observable<any> {
        return this._afterClosed.asObservable();
    }
}
