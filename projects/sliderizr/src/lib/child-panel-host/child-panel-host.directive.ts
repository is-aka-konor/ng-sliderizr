import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[szChildPanelHost]'
})
export class ChildPanelHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
