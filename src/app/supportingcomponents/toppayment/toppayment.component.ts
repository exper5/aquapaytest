import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
declare var loadDate:any;
@Component({
  selector: 'app-toppayment',
  templateUrl: './toppayment.component.html',
  styleUrls: ['./toppayment.component.css']
})
export class ToppaymentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     loadDate();
  }

}
