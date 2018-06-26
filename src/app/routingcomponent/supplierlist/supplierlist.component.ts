import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { visitSiblingRenderNodes } from '@angular/core/src/view/util';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-supplierlist',
  templateUrl: './supplierlist.component.html',
  styleUrls: ['./supplierlist.component.css']
})
export class SupplierlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $("#reportname").hide();
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
  
  
  $('.dropdown-menu').on('click', function (e) {
    if ($(this).hasClass('dropdown-menu')) {
        e.stopPropagation();
    }
  });
  
  //---------------------------------------Prevent anchor default action-------------------------------------------
  


  $(".rowShow").hide();

  $('.showhide').click(function(){
    //alert("clicked");
    var row=$(this).parent().parent().next();
    $(row).toggle();
    $(row).next().toggle();
  });
//---------------------------------------toggle class for table collapse-------------------------------------------
//---------------------pagignation------------------------------------
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
//-------------------------pagignation end------------------------

//-----------------on click all row select---------------------------------------------------------

$(" input[name='mainmenu']").click(function(){
  var  is_checked=$(this).is(":checked");
    $("input[name='submenu']").prop("checked",is_checked);
});
//-----------------------------on click all row select-----------------------------------------------------
}

}
