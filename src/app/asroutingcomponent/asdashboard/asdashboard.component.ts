import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
declare var loadCharts: any;
@Component({
  selector: 'app-asdashboard',
  templateUrl: './asdashboard.component.html',
  styleUrls: ['./asdashboard.component.css']
})
export class AsdashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    loadCharts();
  }

}
