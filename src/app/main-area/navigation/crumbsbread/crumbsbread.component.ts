import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-crumbsbread',
  templateUrl: './crumbsbread.component.html',
  styleUrls: ['./crumbsbread.component.sass']
})
export class CrumbsbreadComponent implements OnInit {

  private privatelinks: string[]= [ 'Dashboard', 'Home', 'All Site View' ];
  constructor() { }
  links = this.privatelinks;
  ngOnInit() {
  }

}
