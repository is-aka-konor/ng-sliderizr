import { trigger, state, style, transition, animate, AnimationTriggerMetadata } from '@angular/animations';

const CLOSED_STATE_NAME = 'closed';

export const panelRouteAnimation: AnimationTriggerMetadata = trigger('panelRouteAnimation',
    [
        transition(':enter', [
            style({ transform: 'translateX(-100%)', zIndex: -1 }),
            animate('200ms', style({ transform: 'translateX(0%)', zIndex: -1 }))
        ]),
        transition(`:leave`, [
            style({ transform: 'translateX(0)', zIndex: -1 }),
            animate('200ms', style({ transform: 'translateX(-100%)', zIndex: -1 }))
        ])
    ]);
