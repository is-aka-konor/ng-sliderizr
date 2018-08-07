import { Injectable } from '@angular/core';

@Injectable()
export class WindowRefService {
    private _scrollTimeoutId: number;

    public get nativeWindow(): Window {
        return window;
    }

    public scrollTo(element: HTMLElement, to: number, duration: number) {
        if (this._scrollTimeoutId) {
            window.clearTimeout(this._scrollTimeoutId);
            this._scrollTimeoutId = null;
        }

        if (duration <= 0) {
            return;
        }
        const difference = to - element.scrollLeft;
        const perTick = difference / duration * 10;

        this._scrollTimeoutId = window.setTimeout(() => {
            this._scrollTimeoutId = null;
            element.scrollLeft = element.scrollLeft + perTick;
            if (element.scrollLeft === to) {
                return;
            }

            this.scrollTo(element, to, duration - 10);
        }, 10);
    }
}
