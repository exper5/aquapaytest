import { Component, OnInit } from '@angular/core';
// //import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-chsuppliersuccess',
  templateUrl: './chsuppliersuccess.component.html',
  styleUrls: ['./chsuppliersuccess.component.css']
})
export class ChsuppliersuccessComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(".activeapp").on("click", function () {
      $(".supplink").addClass("active");
      $(".supplink").siblings(".active").removeClass("active");
    });
    
  }

}
