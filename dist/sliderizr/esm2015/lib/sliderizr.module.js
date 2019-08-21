/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SzPanelHeadingDirective } from './panels/panel-heading/panel-heading.directive';
import { SzPanelComponent } from './panels/panel/panel.component';
import { SzAnonymousPanelComponent } from './panels/anonymous-panel/anonymous-panel.component';
import { CoreModule } from './core/core.module';
import { SzPanelHostComponent } from './panel-host/panel-host.component';
import { ChildPanelHostDirective } from './child-panel-host/child-panel-host.directive';
import { SzHeaderTemplateDirective } from './panels/header-template/header-template.directive';
import { SzCloseContentDirective } from './panels/close-content/close-content.directive';
export class SliderizrModule {
}
SliderizrModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SzPanelComponent,
                    SzPanelHeadingDirective,
                    SzPanelHostComponent,
                    ChildPanelHostDirective,
                    SzAnonymousPanelComponent,
                    SzCloseContentDirective,
                    SzHeaderTemplateDirective
                ],
                imports: [
                    CommonModule,
                    RouterModule,
                    CoreModule
                ],
                exports: [
                    SzPanelComponent,
                    SzPanelHeadingDirective,
                    SzPanelHostComponent,
                    SzAnonymousPanelComponent,
                    SzCloseContentDirective,
                    SzHeaderTemplateDirective
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyaXpyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXNsaWRlcml6ci8iLCJzb3VyY2VzIjpbImxpYi9zbGlkZXJpenIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDekYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDL0YsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBMEJ6RixNQUFNLE9BQU8sZUFBZTs7O1lBeEIzQixRQUFRLFNBQUM7Z0JBQ04sWUFBWSxFQUFFO29CQUNWLGdCQUFnQjtvQkFDaEIsdUJBQXVCO29CQUN2QixvQkFBb0I7b0JBQ3BCLHVCQUF1QjtvQkFDdkIseUJBQXlCO29CQUN6Qix1QkFBdUI7b0JBQ3ZCLHlCQUF5QjtpQkFDNUI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixVQUFVO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxnQkFBZ0I7b0JBQ2hCLHVCQUF1QjtvQkFDdkIsb0JBQW9CO29CQUNwQix5QkFBeUI7b0JBQ3pCLHVCQUF1QjtvQkFDdkIseUJBQXlCO2lCQUM1QjthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3pQYW5lbEhlYWRpbmdEaXJlY3RpdmUgfSBmcm9tICcuL3BhbmVscy9wYW5lbC1oZWFkaW5nL3BhbmVsLWhlYWRpbmcuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgU3pQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vcGFuZWxzL3BhbmVsL3BhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN6QW5vbnltb3VzUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL3BhbmVscy9hbm9ueW1vdXMtcGFuZWwvYW5vbnltb3VzLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICcuL2NvcmUvY29yZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTelBhbmVsSG9zdENvbXBvbmVudCB9IGZyb20gJy4vcGFuZWwtaG9zdC9wYW5lbC1ob3N0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoaWxkUGFuZWxIb3N0RGlyZWN0aXZlIH0gZnJvbSAnLi9jaGlsZC1wYW5lbC1ob3N0L2NoaWxkLXBhbmVsLWhvc3QuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgU3pIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vcGFuZWxzL2hlYWRlci10ZW1wbGF0ZS9oZWFkZXItdGVtcGxhdGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgU3pDbG9zZUNvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL3BhbmVscy9jbG9zZS1jb250ZW50L2Nsb3NlLWNvbnRlbnQuZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBTelBhbmVsQ29tcG9uZW50LFxyXG4gICAgICAgIFN6UGFuZWxIZWFkaW5nRGlyZWN0aXZlLFxyXG4gICAgICAgIFN6UGFuZWxIb3N0Q29tcG9uZW50LFxyXG4gICAgICAgIENoaWxkUGFuZWxIb3N0RGlyZWN0aXZlLFxyXG4gICAgICAgIFN6QW5vbnltb3VzUGFuZWxDb21wb25lbnQsXHJcbiAgICAgICAgU3pDbG9zZUNvbnRlbnREaXJlY3RpdmUsXHJcbiAgICAgICAgU3pIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZVxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgUm91dGVyTW9kdWxlLFxyXG4gICAgICAgIENvcmVNb2R1bGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgU3pQYW5lbENvbXBvbmVudCxcclxuICAgICAgICBTelBhbmVsSGVhZGluZ0RpcmVjdGl2ZSxcclxuICAgICAgICBTelBhbmVsSG9zdENvbXBvbmVudCxcclxuICAgICAgICBTekFub255bW91c1BhbmVsQ29tcG9uZW50LFxyXG4gICAgICAgIFN6Q2xvc2VDb250ZW50RGlyZWN0aXZlLFxyXG4gICAgICAgIFN6SGVhZGVyVGVtcGxhdGVEaXJlY3RpdmVcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNsaWRlcml6ck1vZHVsZSB7IH1cclxuIl19