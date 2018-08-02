import {
    animate,
    animateChild,
    AnimationTriggerMetadata,
    query,
    state,
    style,
    transition,
    trigger,
    group,
} from '@angular/animations';

const CLOSED_STATE_NAME = 'closed';

export const PANEL_ROUTE_ANIMATION: AnimationTriggerMetadata = trigger('panelRouteAnimation',
    [
        transition(':enter', [
            style({ transform: 'translateX(-100%)', zIndex: -1 }),
            // query('@ panelRouteAnimation', animateChild(), { optional: true }),
            animate('200ms', style({ transform: 'translateX(0%)', zIndex: -1 }))
        ])
    ]);

    export const PANEL_EXIT_ANIMATION: AnimationTriggerMetadata = trigger('panelExitAnimation', [
        transition(`:leave`, [
            query('sz-panel', [
                style({ transform: 'translateX(0)', zIndex: -1 }),
                animate('200ms', style({ transform: 'translateX(-100%)', zIndex: -1 }))
            ]),
        ])
    ]);
