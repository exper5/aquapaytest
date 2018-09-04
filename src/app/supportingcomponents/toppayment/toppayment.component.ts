import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';
// import * as Highcharts from 'highcharts';
declare var jquery:any;
declare var $ :any;
 declare var loadDate:any;
@Component({
  selector: 'app-toppayment',
  templateUrl: './toppayment.component.html',
  styleUrls: ['./toppayment.component.css']
})
export class ToppaymentComponent implements OnInit {
  // Highcharts = Highcharts; // required
  // chartConstructor = 'chart'; // optional string, defaults to 'chart'
  // chartOptions = {
  //   series: [{
  //     data: [1, 2, 3]
  //   }]
  //  }; // required
  // // chartCallback = function (chart) { ... } // optional function, defaults to null
  // updateFlag = false; // optional boolean
  // oneToOneFlag = true;
  constructor() { }

  ngOnInit() {
      loadDate();
  }

}
