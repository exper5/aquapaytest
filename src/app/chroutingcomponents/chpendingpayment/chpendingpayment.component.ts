import { Component, OnInit } from '@angular/core';
// //import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-chpendingpayment',
  templateUrl: './chpendingpayment.component.html',
  styleUrls: ['./chpendingpayment.component.css']
})
export class ChpendingpaymentComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    $(document).ready(function(){
      $("#step-3").hide();
      $("#step-2").hide();
      $('.appbtn').click(function () {
        $("#step-2").show();
        $("#step-1").hide();
          
     $("#first").addClass("big-circle");
    $("#second").addClass("bg-primary");
    $(".tick").css({"display": "block"});
    $(".tick2").css({"display": "none"});
    $("#p2").addClass("blu-color");
    });
  
     $(".otpbbtn").click(function(){
         $("#step-2").hide();
         $("#step-1").show(); 
     $("#first").addClass("bg-primary");
     $("#first").removeClass("bg-default");
     $("#second").addClass("bg-default");
     $("#second").removeClass("bg-primary");
     $("#p1").addClass("blu-color");
     $("#p2").removeClass("blu-color");
     });
    $(".verify").click(function(){
         $("#step-2").hide();
         $("#step-3").show();
     $("#first").addClass("bg-primary");
     $("#second").addClass("bg-primary");
     $("#p1").addClass("blu-color");
     $("#p2").addClass("blu-color");
     $("#first,#second").addClass("big-circle");
     $(".tick").css({"display": "block"});
     $(".tick2").css({"display": "block"});
     $(".big-circle").css({"width": "16px","height":"16px"});
     });
    });

  }

}
