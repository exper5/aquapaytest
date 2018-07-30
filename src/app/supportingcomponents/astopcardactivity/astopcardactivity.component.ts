import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';
import {Highcharts} from 'highcharts';
declare var jquery:any;
declare var $ :any;
declare var loadAsCharts :any;
@Component({
  selector: 'app-astopcardactivity',
  templateUrl: './astopcardactivity.component.html',
  styleUrls: ['./astopcardactivity.component.css']
})
export class AstopcardactivityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    loadAsCharts();
   
  }

}
