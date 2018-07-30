import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-paycardtab',
  templateUrl: './paycardtab.component.html',
  styleUrls: ['./paycardtab.component.css']
})
export class PaycardtabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $("#card").click(function(){
         $("#card").addClass("shad");
         $("#card").siblings().removeClass("shad");
         $("#card").children().addClass("addborder");
         $("#card").siblings().children().removeClass("addborder");
         $(".cardimg").attr('src',"assets/images/paycard.png");
         $("#card").siblings().find(".cardimg").attr('src',"assets/images/precard.png");
      });
      $("#cardone").click(function(){
        $("#cardone").addClass("shad");
        $("#cardone").siblings().removeClass("shad");
        $("#cardone").children().addClass("addborder");
        $("#cardone").siblings().children().removeClass("addborder");
        $(".cardimg").attr('src',"assets/images/paycard.png");
        $("#cardone").siblings().find(".cardimg").attr('src',"assets/images/precard.png");
     });
     $("#cardtwo").click(function(){
      $("#cardtwo").addClass("shad");
      $("#cardtwo").siblings().removeClass("shad");
      $("#cardtwo").children().addClass("addborder");
      $("#cardtwo").siblings().children().removeClass("addborder");
      $(".cardimg").attr('src',"assets/images/paycard.png");
      $("#cardtwo").siblings().find(".cardimg").attr('src',"assets/images/precard.png");
   });
   $("#cardthree").click(function(){
    $("#cardthree").addClass("shad");
    $("#cardthree").siblings().removeClass("shad");
    $("#cardthree").children().addClass("addborder");
    $("#cardthree").siblings().children().removeClass("addborder");
    $(".cardimg").attr('src',"assets/images/paycard.png");
    $("#cardthree").siblings().find(".cardimg").attr('src',"assets/images/precard.png");
 });
 $("#cardfour").click(function(){
  $("#cardfour").addClass("shad");
  $("#cardfour").siblings().removeClass("shad");
  $("#cardfour").children().addClass("addborder");
  $("#cardfour").siblings().children().removeClass("addborder");
  $(".cardimg").attr('src',"assets/images/paycard.png");
  $("#cardfour").siblings().find(".cardimg").attr('src',"assets/images/precard.png");
});
//<!-- brose file -->
								$('.myselector').on('change',function(){
  $('#uploadinfo').val($(this).val())
});
$('.myselector2').on('change',function(){
  $('#uploadinfo2').val($(this).val())
});
$('.myselector3').on('change',function(){
  $('#uploadinfo3').val($(this).val())
});
$('.myselector4').on('change',function(){
  $('#uploadinfo4').val($(this).val())
});
$('.myselector5').on('change',function(){
  $('#uploadinfo5').val($(this).val())
});
  });
  }

}
