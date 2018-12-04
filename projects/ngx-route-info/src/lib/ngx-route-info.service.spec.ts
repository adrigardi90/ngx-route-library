import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NgxRouteInfoService } from './ngx-route-info.service';

describe('NgxRouteInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxRouteInfoService],
      imports: [
        RouterTestingModule
      ]
    });
  });

  it('should be created', inject([NgxRouteInfoService], (service: NgxRouteInfoService) => {
    expect(service).toBeTruthy();
  }));

  it('should have getParams method', inject([NgxRouteInfoService], (service: NgxRouteInfoService) => {
    expect(service.getParams).toBeTruthy();
  }));

  it('should have getQueryParams method', inject([NgxRouteInfoService], (service: NgxRouteInfoService) => {
    expect(service.getQueryParams).toBeTruthy();
  }));

  it('should have getPreviousRoute method', inject([NgxRouteInfoService], (service: NgxRouteInfoService) => {
    expect(service.getPreviousRoute).toBeTruthy();
  }));

  it('should have getCurrentRoute method', inject([NgxRouteInfoService], (service: NgxRouteInfoService) => {
    expect(service.getCurrentRoute).toBeTruthy();
  }));

  it('should have subscribeRouter method', inject([NgxRouteInfoService], (service: NgxRouteInfoService) => {
    expect(service.subscribeRouter).toBeTruthy();
  }));

});
