import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-cacreaterule',
  templateUrl: './cacreaterule.component.html',
  styleUrls: ['./cacreaterule.component.css']
})
export class CacreateruleComponent implements OnInit {

  constructor() { }

  ngOnInit() {


//--------------------------------drop down---------------------------------------

$(document).ready(function (e) {
    $('#andor .dropdown-menu').find('a').click(function (e) {
        e.preventDefault();
        var param = $(this).attr("href").replace("#", "");
        var concept = $(this).text();
        $('#andor span#search_concept').text(concept);
        $('.input-group #search_param').val(param);
    });
});

function a(){
  $(document).ready(function (e) {
    // $('.firstgrp .dropdown-menu').find('a').click(function (e) {
    
    //       e.preventDefault();
    //       //var param = $(this).attr("href").replace("#", "");
    //       var concept = $(this).text();
    //       $('.firstgrp span#search_concept').text(concept);
    //      // $('.input-group #search_param').val(param);
    // });
    $('.firstgrp .dropdown-menu').find('a').click(function (e) {
    
      e.preventDefault();
      //var param = $(this).attr("href").replace("#", "");
      var concept = $(this).text();
      $('.firstgrp span#search_concept').text(concept);
     // $('.input-group #search_param').val(param);
});
  });
}
a();
$(document).ready(function (e) {
  $('#secondgrp .dropdown-menu').find('a').click(function (e) {
      e.preventDefault();
      var param = $(this).attr("href").replace("#", "");
      var concept = $(this).text();
      $('#secondgrp span#search_concept').text(concept);
      $('.input-group #search_param').val(param);
  });
});

//----------------------------drop down end---------------------------------------
$(document).ready(function(){
  $(".add-more").click(function(){
    var html = $(this).closest(".input_fields_wrap");
    var seccount= $(".custBtnWrap").length;
    if(seccount <= 3) {

      html.clone().appendTo(".copyyyy");
      $(".copyyyy").find(".add-more").attr("minus","true");
      $(".copyyyy").find(".add-more").text("-");
  
      $("[minus=true]").click(function(){ 
      $(this).closest(".input_fields_wrap").remove();
      a();
    });
    }

   
    
});




$("body").on("click",".remove",function(){ 
    $(this).parents(".control-group").remove();
});
 });
 $("body").on("click",".remove",function(){ 
$(this).parents(".control-group").remove();
});


//---------------------------------------check box js -------------------------------------------
    
$(".place").click(function () {
  $(this).toggleClass("green");
});
//---------------------------------------check box js edn-------------------------------------------

//----------------------------------table js--togglr----------------------------------------------
$(".rowShow").hide();

$('.showhide').click(function(){
  //alert("clicked");
  $(this).toggleClass('flashOn flash');
  var row=$(this).parent().parent().next();
  $(row).toggle();
 // $(row).next().toggle();
})

//-----------------table js toggle end --------------------------------------------------------------------
$(document).ready(function(){
  $("#step-2").hide();
  $("#step-3").hide();
  $(".createrule").click(function(){
  $("#step-2").show();
  });
});
$(".Approve").click(function(){
  $("#main1").hide();
  $("#step-3").show();
  
  });

  }

}
