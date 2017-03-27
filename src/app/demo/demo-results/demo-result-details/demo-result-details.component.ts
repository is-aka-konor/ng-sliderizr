import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tm-demo-result-details',
  templateUrl: './demo-result-details.component.html',
  styleUrls: ['./demo-result-details.component.scss']
})
export class DemoResultDetailsComponent implements OnInit {
  public id: number;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.id = +params.id;
    });
  }

}
