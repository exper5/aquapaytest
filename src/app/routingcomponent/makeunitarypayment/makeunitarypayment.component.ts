import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-makeunitarypayment',
  templateUrl: './makeunitarypayment.component.html',
  styleUrls: ['./makeunitarypayment.component.css']
})
export class MakeunitarypaymentComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      $(".backBtnpay_sup").hide();
      $(".sndback").hide();
     $(".nextpay").click(function(){
      $("#pagi").hide();
         $("#step-4").hide();
         $("#step-5").show();
         $("#step-6").hide();
         $("#step-7").hide();
     $(".backBtnpay_sup").show();
     $("#fourth").addClass("bg-primary");
     $("#fourth").addClass("big-circle");
     $("#fifth").addClass("bg-primary");
     $(".tick2").css({"display": "block"});
     $(".tick3").css({"display": "none"});
     $("#p2").addClass("blu-color");
     });
     $(".backBtnpay_sup").click(function(){
         $("#step-5").hide();
         $("#step-6").hide();
         $("#step-7").hide();
         $("#step-4").show();
         $("#pagi").show();
     $(".backBtnpay_sup").hide();
     $("#first").addClass("bg-primary");
     $(".tick3").css({"display": "block"});
     $(".tick2").css({"display": "none"});
     $("#first").removeClass("bg-default");
     $("#fifth").addClass("bg-default");
     $("#fifth").removeClass("bg-primary");
     $("#fourth").removeClass("big-circle");
     $("#p1").addClass("blu-color");
     $("#p2").removeClass("blu-color");
     });
    $(".ntxpayment").click(function(){
         $("#step-4").hide();
         $("#step-5").hide();
         $("#step-7").hide();
         $("#step-6").show();
         $(".backBtnpay_sup").hide();
         $(".sndback").show();
     $("#fifth").addClass("bg-primary");
     $("#sixth").addClass("bg-primary");
     $("#p1").addClass("blu-color");
     $("#p2").addClass("blu-color");
     $("#fifth").addClass("big-circle");
     $(".tick3").css({"display": "block"});
     });

     $(".sndback").click(function(){
      $("#step-4").hide();
      $("#step-5").show();
      $("#step-6").hide();
      $("#step-7").hide();
      $(".sndback").hide();
      $(".backBtnpay_sup").show();
  $("#first").addClass("bg-primary");
  $(".tick3").css({"display": "none"});
  $("#first").removeClass("bg-default");
  $("#fifth").addClass("bg-default");
  $("#fifth").removeClass("big-circle");
  $("#sixth").removeClass("bg-primary");
  $("#p1").addClass("blu-color");
  $("#p2").removeClass("blu-color");
  });
  
     $(".finalpay").click(function(){
      $("#step-4").hide();
      $("#step-5").hide();
      $("#step-6").hide();
      $("#step-7").show();
  $(".backBtnpay_sup").hide();
  $(".sndback").hide();
  $("#first").addClass("bg-primary");
  $(".tick4").css({"display": "block"});
  $("#sixth").addClass("bg-primary");
  $("#p1").addClass("blu-color");
  $("#p2").addClass("blu-color");
  $("#p3").addClass("blu-color");
  $("#sixth").addClass("big-circle");
  $(".big-circle").css({"width": "16px","height":"16px"});
  });
    });
  }

}
