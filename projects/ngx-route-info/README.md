# NgxRouteLibrary
> [ngx-route-info](https://www.npmjs.com/package/ngx-route-info) is a simple library that let you get the route information in a simple and fast way

Summary information:
- Url params
- Query params
- Previous/Current route

# Steps to use it

## Install the package
```cmd
npm i ngx-route-info
```

## Adding it to the main app module
Add the NgxRouteInfoModule module to the App module. The library relies on the application to get the BrowserModule and RouterModule, so they have to be imported in your app
```ts
const routes: Routes = [
  { path: 'test/:brand/:color', component: CarComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgxRouteInfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Use the service in your component
Use the service NgxRouteInfoService in the component where you want to get the route information
```ts
export class CarComponent implements OnInit {

  // Params name
  brand: string;
  color: string;

  // Query params name
  year: string;

  constructor(private ngxRouteInfo: NgxRouteInfoService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.ngxRouteInfo.getParams(this.activatedRoute, this);
    this.ngxRouteInfo.getQueryParams(this.activatedRoute, this);
  }
}
```
Once the component it's instantiated and initialiated, you'll get the value of the params and queryParams in the class attributes automatically

