import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
declare var loadCharts: any;
@Component({
  selector: 'app-cadashboard',
  templateUrl: './cadashboard.component.html',
  styleUrls: ['./cadashboard.component.css']
})
export class CadashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    loadCharts();
  }

}
