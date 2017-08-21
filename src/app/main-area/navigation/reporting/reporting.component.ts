import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.sass']
})
export class ReportingComponent implements OnInit {

  constructor() { }
  period: Number[]= [1, 15, 30];
  ngOnInit() {

  }
    day(val: number): string {
      if ( val <= 1 ) {
        return 'Last Day';
      } else {
        return `Last ${val} Day's`;
      }
    }
}
