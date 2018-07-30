import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
declare var loadCharts: any;
@Component({
  selector: 'app-chdashboard',
  templateUrl: './chdashboard.component.html',
  styleUrls: ['./chdashboard.component.css']
})
export class ChdashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    loadCharts();
  
  }

}
