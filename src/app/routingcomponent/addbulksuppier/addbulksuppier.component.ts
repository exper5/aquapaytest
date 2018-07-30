import { Component, OnInit } from '@angular/core';
// //import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-addbulksuppier',
  templateUrl: './addbulksuppier.component.html',
  styleUrls: ['./addbulksuppier.component.css']
})
export class AddbulksuppierComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    $(document).ready(function(){
      $("#pagi").hide();
      $('input[type=file]').change(function () {
        $("#pagi").show();
        $("#step-1").hide();
        $("#step-2").show();
    $(".backBtn").show();
     $("#first").addClass("big-circle");
    $("#second").addClass("bg-primary");
    $(".tick").css({"display": "block"});
    $(".tick2").css({"display": "none"});
    $("#p2").addClass("blu-color");
    });
  
     $(".backBtn").click(function(){
      $("#pagi").hide();
         $("#step-2").hide();
         $("#step-1").show();
     $(".backBtn").hide();
     $("#first").addClass("bg-primary");
     $("#first").removeClass("bg-default");
     $("#second").addClass("bg-default");
     $("#second").removeClass("bg-primary");
     $("#p1").addClass("blu-color");
     $("#p2").removeClass("blu-color");
     });
    $(".approval").click(function(){
         $("#step-2").hide();
         $("#step-3").show();
         $("#pagi").hide();
     $(".backBtn").hide();
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
