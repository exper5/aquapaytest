import { Component, OnInit } from '@angular/core';
// //import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
declare var loadAsPiCharts : any;
@Component({
  selector: 'app-caaddunitaryuser',
  templateUrl: './caaddunitaryuser.component.html',
  styleUrls: ['./caaddunitaryuser.component.css']
})
export class CaaddunitaryuserComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    $(".gtou").on("click", function () {
      $(".paylink2").addClass("active");
      $(".paylink2").siblings(".active").removeClass("active");
    });
    

    $(document).ready(function(){
      $(".backBtnpay_sup").hide();
      $(".sndback").hide();
     $(".nextpay").click(function(){
      $("#pagi").hide();
         $("#step-4").hide();
         $("#step-5").show();
         $("#step-6").hide();
         $("#step-7").hide();
     $(".backBtnpay_sup").hide();
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


  
   //---------------------------------------Datepicker js start--------------------------------------------

   loadAsPiCharts();
    $('.example2').datepicker({
      autoclose: true,
      format: "dd M yy"
  });
    
//---------------------------------------Datepicker js END-------------------------------------------
//----------------------------drop down btn js----------------------------------------------------------
$(document).ready(function (e) {
  $('.firstgrp .dropdown-menu').find('a').click(function (e) {
      e.preventDefault();
      // var param = $(this).attr("href").replace("#", "");
      var concept = $(this).text();
      $('.firstgrp span#search_concept').text(concept);
      // $('.input-group #search_param').val(param);
  });
});


$(document).ready(function (e) {
  $('.secondgrp .dropdown-menu').find('a').click(function (e) {
      e.preventDefault();
      // var param = $(this).attr("href").replace("#", "");
      var concept = $(this).text();
      $('.secondgrp span#search_concept').text(concept);
      // $('.input-group #search_param').val(param);
  });
});
//---------------------------drop down btn js-End---------------------------------------------------------

  }

}
