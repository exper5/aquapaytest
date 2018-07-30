import { Component, OnInit } from '@angular/core';
// //import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-causerlist',
  templateUrl: './causerlist.component.html',
  styleUrls: ['./causerlist.component.css']
})
export class CauserlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(".Submit").on("click", function () {
      $(".paylink2").addClass("active");
      $(".paylink2").siblings(".active").removeClass("active");
    });

    $(".nxt2").click(function () {
      $("#reportname").show();
      $("#payreport").hide();
      $("#lstpaymt").hide();
     // $("#myModal").show();
    });
    //---------------------------------------Datepicker js start--------------------------------------------

    $('.from').datepicker({
      autoclose: true,
      minViewMode: 1,
      format: 'M'
    }).on('changeDate', function (selected) {
      var startDate = new Date(selected.date.valueOf());
      startDate.getDate();
    });
    
    $('.example1').datepicker({
      autoclose: true,
      format: "dd M yy"
    });
//---------------------------------------Datepicker js END-------------------------------------------
      //---------------------------------------check box js -------------------------------------------
  
  $(".place").click(function () {
    $(this).toggleClass("green");
  });


  //---------------------------------------check box js edn-------------------------------------------
  
  //---------------------------------------Prevent anchor default action-------------------------------------------
  
  
  $('.dropdown-menuu').on('click', function (e) {
    if ($(this).hasClass('dropdown-menuu')) {
        e.stopPropagation();
    }
  });
  
  //---------------------------------------Prevent anchor default action-------------------------------------------
  
//---------------------------------------toggle class for table collapse-------------------------------------------

$(".rowShow").hide();

$('.showhide').click(function(){
  //alert("clicked");
  var row=$(this).parent().parent().next();
  $(row).toggle();
  $(row).next().toggle();
});

//-----------------on click all row select---------------------------------------------------------

$(" input[name='mainmenu']").click(function(){
  var  is_checked=$(this).is(":checked");
    $("input[name='submenu']").prop("checked",is_checked);
});
//-----------------------------on click all row select-----------------------------------------------------
//------------------------pagignation-----------------------------------------------------------
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

//------------------------pagignation---------end--------------------------------------------------
  }

}
