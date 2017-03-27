import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
    selector: 'sz-sliderizr-host',
    templateUrl: './sliderizr-host.component.html',
    styleUrls: ['./sliderizr-host.component.scss']
})
export class SliderizrHostComponent implements OnInit {
    constructor(private element: ElementRef) { }

    private get nativeElement(): HTMLElement {
        return this.element.nativeElement;
    }

    public get outerWidth(): number {
        return this.nativeElement.offsetWidth;
    }

    public get scrollLeft(): number {
        return this.nativeElement.scrollLeft;
    }

    public set scrollLeft(value: number) {
        this.nativeElement.scrollLeft = value;
    }

    ngOnInit() {
    }

}
