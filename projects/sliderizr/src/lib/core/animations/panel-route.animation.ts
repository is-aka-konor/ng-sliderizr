import {
    animate,
    AnimationTriggerMetadata,
    query,
    style,
    transition,
    trigger
} from '@angular/animations';

export const PANEL_ROUTE_ANIMATION: AnimationTriggerMetadata = trigger('panelRouteAnimation',
    [
        transition(':enter', [
            style({ transform: 'translateX(-100%)', zIndex: -1 }),
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
