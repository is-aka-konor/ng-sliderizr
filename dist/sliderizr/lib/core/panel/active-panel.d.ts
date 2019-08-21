import { ComponentRef } from '@angular/core';
import { Observable } from 'rxjs';
export declare class SzActivePanel<T> {
    componentRef: ComponentRef<T>;
    private _afterClosed;
    beforeClose: () => Promise<any>;
    readonly componentInstance: T;
    constructor();
    close(result?: any): void;
    private internalClose;
    readonly afterClosed: Observable<any>;
}
