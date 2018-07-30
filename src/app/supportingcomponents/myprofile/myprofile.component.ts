import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //---------------------------------------check box js -------------------------------------------

$(".place").click(function () {
  $(this).toggleClass("green");
});
//---------------------------------------check box js edn-------------------------------------------
    $(function () {
      var $a = $("#conTab .tabs li");
      $a.click(function () {
          $a.removeClass("active");
          $(this).addClass("active");
      });
  });
  }

}
