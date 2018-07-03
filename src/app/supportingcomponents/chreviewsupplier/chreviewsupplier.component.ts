import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-chreviewsupplier',
  templateUrl: './chreviewsupplier.component.html',
  styleUrls: ['./chreviewsupplier.component.css']
})
export class ChreviewsupplierComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    $(document).ready(function() {
      $(".thumbnail").click(function(){
        $(this).toggleClass("bluebr");
    });
    $('#media').carousel({
      interval:0
    })
      
      $("#next").click(function(){
        $("#prev").show();
    });

    $(".rowShow").hide();

    $('.showhide').click(function(){
      //alert("clicked");
      var row=$(this).parent().parent().next();
      $(row).toggle();
      $(row).next().toggle();
    });
    });
   //-----------------------------------pagignation strt---------------------------------
   $(".one a").on("click", function () {
    $(".one").addClass("active");
    $(".one").siblings(".active").removeClass("active");
  });
  
  $(".two a").on("click", function () {
    $(".two").addClass("active");
    $(".two").siblings(".active").removeClass("active");
  });
  
  $(".three a").on("click", function () {
    $(".three").addClass("active");
    $(".three").siblings(".active").removeClass("active");
  });
   //-------------------------------pagignation end------------------------------

   //-----------------on click all row select---------------------------------------------------------

  $(" input[name='mainmenu']").click(function(){
    var  is_checked=$(this).is(":checked");
      $("input[name='submenu']").prop("checked",is_checked);
  });
//-----------------------------on click all row select-----------------------------------------------------

  }

}
