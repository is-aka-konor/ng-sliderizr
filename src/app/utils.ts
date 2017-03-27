import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { $$observable as symbolObservable } from 'rxjs/symbol/observable';

export function isPromise(obj: any): obj is Promise<any> {
    // allow any Promise/A+ compliant thenable.
    // It's up to the caller to ensure that obj.then conforms to the spec
    return !!obj && typeof obj.then === 'function';
}

/**
 * Determine if the argument is an Observable
 */
export function isObservable(obj: any | Observable<any>): obj is Observable<any> {
    return !!(obj && obj[symbolObservable]);
}

export function wrapIntoObservable<T>(value: T | boolean | Promise<T> | Observable<T>): Observable<T> {
    if (isObservable(value)) {
        return value;
    }

    if (isPromise(value)) {
        return fromPromise(value);
    }

    return of(value);
}