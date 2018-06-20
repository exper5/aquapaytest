import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import{MyMorris,Morris} from 'morris';

declare var jquery:any;
declare var $ :any;
declare var loadAsPiCharts : any;

@Component({
  selector: 'app-ascardactivity',
  templateUrl: './ascardactivity.component.html',
  styleUrls: ['./ascardactivity.component.css']
})
export class AscardactivityComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    loadAsPiCharts();
    $('.example2').datepicker({
      autoclose: true,
      format: "dd M yy"
  });
    

  }

}
