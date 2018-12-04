import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgxRouteInfoService } from 'ngx-route-info';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  // Params
  brand: string;
  color: string;

  // Query params
  year: string;

  constructor(private ngxRouteInfo: NgxRouteInfoService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.ngxRouteInfo.getParams(this.activatedRoute, this);
    this.ngxRouteInfo.getQueryParams(this.activatedRoute, this);
  }
}
