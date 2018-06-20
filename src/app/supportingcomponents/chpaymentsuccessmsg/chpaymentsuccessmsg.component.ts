import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-chpaymentsuccessmsg',
  templateUrl: './chpaymentsuccessmsg.component.html',
  styleUrls: ['./chpaymentsuccessmsg.component.css']
})
export class ChpaymentsuccessmsgComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(".activeapp").on("click", function () {
      $(".paylink").addClass("active");
      $(".paylink").siblings(".active").removeClass("active");
    });
    
  }

}
