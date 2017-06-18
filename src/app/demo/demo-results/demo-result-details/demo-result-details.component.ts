import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'tm-demo-result-details',
  templateUrl: './demo-result-details.component.html',
  styleUrls: ['./demo-result-details.component.scss']
  //animations: [panelRouteAnimation]
})
export class DemoResultDetailsComponent implements OnInit {
  //@HostBinding('@panelRouteAnimation') panelAnimation = true;
  public id: number;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.id = +params.id;
    });
  }

}
