import { SliderizrHostComponent } from './../sliderizr-host/sliderizr-host.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy, HostBinding, Input, HostListener, trigger, state, style, transition, animate, forwardRef, Inject, TemplateRef, ElementRef } from '@angular/core';
import { PanelManagerService } from './../panel-manager/panel-manager.service';
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
    selector: 'tm-sliderizr-panel',
    templateUrl: './sliderizr-panel.component.html',
    styleUrls: ['./sliderizr-panel.component.scss'],
    animations: [
        trigger('routerAnimations',
            [
                state('closed',
                    style({ transform: 'translateX(-100%)', zIndex: -1 })
                ),
                transition('* => open', [
                    style({ transform: 'translateX(-100%)', zIndex: -1 }),
                    animate('200ms', style({ transform: 'translateX(0%)', zIndex: -1 }))
                ]),
                transition(`* => ${CLOSED_STATE_NAME}`, [
                    style({ transform: 'translateX(0)', zIndex: -1 }),
                    animate('200ms', style({ transform: 'translateX(-100%)', zIndex: -1 }))
                ])
            ])
    ]
})
export class SliderizrPanelComponent implements OnInit, OnDestroy {
    @HostBinding('@routerAnimations') routeAnimation = 'open';
    @Input() heading: string;
    public headingRef: TemplateRef<any>;

    private _canClose: boolean;
    private _slideShutResolver: () => void;

    public get canClose(): boolean {
        return this._canClose;
    }

    private get nativeElement(): HTMLElement {
        return this.element.nativeElement;
    }

    constructor(
        private element: ElementRef,
        private route: ActivatedRoute,
        private parent: SliderizrHostComponent,
        @Inject(forwardRef(() => PanelManagerService)) private panelManager: PanelManagerService) {
        panelManager.registerPanel(this, route);
    }


    ngOnInit() {
        this._canClose = this.route.root !== this.route.parent;
        this.route.params.subscribe(p => {
            if (this.routeAnimation === CLOSED_STATE_NAME) {
                this.routeAnimation = 'open';
            }
        });
    }

    slideShut(): Promise<void> {
        console.log('slide shut');
        const result = new Promise<void>(resolve => {
            this._slideShutResolver = resolve;
        });
        this.routeAnimation = CLOSED_STATE_NAME;
        return result;
    }

    close() {
        this.panelManager.closePanel(this);
    }

    @HostListener('@routerAnimations.done', ['$event'])
    onAnimation(event: any) {
        if (event.toState === CLOSED_STATE_NAME) {
            this._slideShutResolver();
        } else if (event.toState === 'open') {
            this.scrollVisible();
        }
    }

    @HostListener('click', ['$event'])
    public onPanelClick(args: Event) {
        args.stopPropagation();
        this.scrollVisible();
    }

    ngOnDestroy() {
        this.panelManager.unregisterPanel(this);
    }

    scrollVisible() {
        this.parent.scrollLeft = this.getScrollAmmount();
    }


    getOffsetLeft(): number {
        const box = this.nativeElement.getBoundingClientRect();
        return box.left + this.parent.scrollLeft;
    }

    getScrollAmmount(): number {
        let scrollLeft = this.parent.scrollLeft;
        let parentWidth = this.parent.outerWidth;
        let panelWidth = this.nativeElement.offsetWidth;
        //let prevSibling = element.prev();

        // Calculate offset left from previous sibling as the current element may be in the wrong position due to animations
        let offsetLeft = this.getOffsetLeft();// prevSibling.length === 0 ? 0 : (prevSibling.offset().left + prevSibling.outerWidth() - parent.offset().left) + scrollLeft;
        let visibleRight = offsetLeft + panelWidth;

        let scroll: number;

        if (scrollLeft > offsetLeft) {
            scroll = offsetLeft;
        } else if (scrollLeft < (visibleRight - parentWidth)) {
            // Add an extra 50px on the end so the panel isnt butted up against the side of the browser
            scroll = visibleRight - parentWidth + 50;
        } else {
            return;
        }

        return scroll;
    }
}
