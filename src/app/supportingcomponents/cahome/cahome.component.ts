import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-cahome',
  templateUrl: './cahome.component.html',
  styleUrls: ['./cahome.component.css']
})
export class CahomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(".addgps").on("click", function () {
      $(".paylink").addClass("active");
      $(".paylink").siblings(".active").removeClass("active");
    });


    $(".addruls").on("click", function () {
      $(".rulelink").addClass("active");
      $(".rulelink").siblings(".active").removeClass("active");
  });

  $(".addcrd").on("click", function () {
    $(".supplink").addClass("active");
    $(".supplink").siblings(".active").removeClass("active");
  });

  $(".adduusr").on("click", function () {
    $(".paylink2").addClass("active");
    $(".paylink2").siblings(".active").removeClass("active");
  });

  $(".addbusr").on("click", function () {
    $(".paylink2").addClass("active");
    $(".paylink2").siblings(".active").removeClass("active");
  });

  }

}
