import { SliderizrPanelComponent } from './../sliderizr-panel/sliderizr-panel.component';
import { ActivatedRoute } from '@angular/router';

export class PanelRouteMap {
    panel: SliderizrPanelComponent;
    route: ActivatedRoute;
    canDeactivate: any[];
}
