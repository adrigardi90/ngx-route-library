import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NgxRouteInfoService {

  private previousRoute: string;
  private currentRoute: string;

  constructor(private router: Router) { }

  /**
   * Loop over the activatedRoute to get all the url params
   * @param activatedRoute
   * @param object where the params will be saved
   */
  getParams = (activatedRoute: ActivatedRoute, object: any) => {
    do {
      activatedRoute.params.subscribe(params => {
        for (const key in params) {
          if (params.hasOwnProperty(key)) {
            object[key] = params[key];
          }
        }
      });
      activatedRoute = activatedRoute.parent;
    } while (activatedRoute);
  }

  /**
   * Subscribe to the NavigationEnd router events
   */
  subscribeRouter = () => {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((e: any) => {
      const url = e.url;
      const urlAfterRedirects = e.urlAfterRedirects;
      if (url !== this.currentRoute) {
        this.previousRoute = this.currentRoute;
        this.currentRoute = urlAfterRedirects ? urlAfterRedirects : url;
      }
    });
  }

  /**
   * Get all the query params for the current route
   * @param activatedRoute
   * @param object
   */
  getQueryParams = (activatedRoute: ActivatedRoute, object: any) => {
    activatedRoute.queryParams.subscribe(queryParams => {
      for (const key in queryParams) {
        if (queryParams.hasOwnProperty(key)) {
          object[key] = queryParams[key];
        }
      }
    });
  }

  /**
   * Get the previous route in the navigation
   */
  getPreviousRoute = () => (this.previousRoute);

  /**
   * Get the current route
   */
  getCurrentRoute = () => (this.currentRoute);
}
