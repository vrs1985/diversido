import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from "@angular/router";
import 'rxjs/add/operator/filter';

interface IBreadcrumb {
  label: string;
  params?: Params;
  url: string;
}

@Component({
  selector: 'app-crumbsbread',
  templateUrl: './crumbsbread.component.html',
  styleUrls: ['./crumbsbread.component.sass']
})
export class CrumbsbreadComponent implements OnInit {

  public breadcrumbs: IBreadcrumb[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.breadcrumbs = [];
   }
  ngOnInit() {const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";

    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      
      let root: ActivatedRoute = this.activatedRoute.root;
      this.breadcrumbs = this.getBreadcrumbs(root);
    });
  }
  
  private getBreadcrumbs(route: ActivatedRoute, url: string="", breadcrumbs: IBreadcrumb[]=[]): IBreadcrumb[] {
    const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";

    let children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (let child of children) {
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");

      url += `/${routeURL}`;

      let breadcrumb: IBreadcrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        params: child.snapshot.params,
        url: url
      };
      breadcrumbs.push(breadcrumb);

      return this.getBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }

}
