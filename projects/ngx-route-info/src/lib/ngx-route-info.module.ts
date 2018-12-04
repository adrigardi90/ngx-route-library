import { NgModule } from '@angular/core';
import { NgxRouteInfoService } from './ngx-route-info.service';

@NgModule({
  imports: [],
  declarations: [],
  exports: []
})
export class NgxRouteInfoModule {
  constructor(private routeParams: NgxRouteInfoService) {
    this.routeParams.subscribeRouter();
  }
}
