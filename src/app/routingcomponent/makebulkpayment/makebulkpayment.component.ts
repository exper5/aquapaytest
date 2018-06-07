import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-makebulkpayment',
  templateUrl: './makebulkpayment.component.html',
  styleUrls: ['./makebulkpayment.component.css']
})
export class MakebulkpaymentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $(".backBtnpay_sup").hide();
      $(".sndback").hide();
      $("#pagi").hide();
  $('input[type=file]').change(function () {
    $("#step-4").hide();
    $("#step-5").show();
    $("#step-6").hide();
    $("#step-7").hide();
    $("#pagi").show();
$(".backBtnpay_sup").show();
$("#fourth").addClass("bg-primary");
$("#p2").addClass("blu-color");
});
     $(".backBtnpay_sup").click(function(){
         $("#step-5").hide();
         $("#step-6").hide();
         $("#step-7").hide();
         $("#step-4").show();
         $("#pagi").hide();
     $(".backBtnpay_sup").hide();
     $("#first").addClass("bg-primary");
     $(".tick3").css({"display": "block"});
     $(".tick2").css({"display": "none"});
     $("#first").removeClass("bg-default");
     $("#fifth").addClass("bg-default");
     $("#fifth").removeClass("bg-primary");
     $("#p1").addClass("blu-color");
     $("#p2").removeClass("blu-color");
     });
    $(".ntxpayment").click(function(){
         $("#step-4").hide();
         $("#step-5").hide();
         $("#step-7").hide();
         $("#step-6").show();
         $(".sndback").show();
         $(".backBtnpay_sup").hide();
         $("#fourth").addClass("big-circle");
     $("#fifth").addClass("bg-primary");
     $("#fifth").addClass("bg-primary");
     $(".tick2").css({"display": "block"});
     $("#p1").addClass("blu-color");
     $("#p2").addClass("blu-color");
     });

     $(".sndback").click(function(){
      $("#step-4").hide();
      $("#step-5").show();
      $("#step-6").hide();
      $("#step-7").hide();
      $(".backBtnpay_sup").show();
      $(".sndback").hide();
  $("#first").addClass("bg-primary");
  $(".tick3").css({"display": "none"});
  $("#first").removeClass("bg-default");
  $("#fifth").addClass("bg-default");
  $("#fifth").removeClass("bg-primary");
  $("#p1").addClass("blu-color");
  $("#p2").removeClass("blu-color");
  });
  
     $(".finalpay").click(function(){
      $("#step-4").hide();
      $("#step-5").hide();
      $("#step-6").hide();
      $("#step-7").show();
      $("#pagi").hide();
  $(".backBtnpay_sup").hide();
  $(".sndback").hide();
  $("#first").addClass("bg-primary");
  $(".tick4").css({"display": "block"});
  $("#sixth").addClass("bg-primary");
  $("#sixth").addClass("big-circle");
  $("#p1").addClass("blu-color");
  $("#p2").addClass("blu-color");
  $("#p3").addClass("blu-color");
  $("#fifth").addClass("big-circle");
  $(".tick3").css({"display": "block"});
  });
    });
  }

}
