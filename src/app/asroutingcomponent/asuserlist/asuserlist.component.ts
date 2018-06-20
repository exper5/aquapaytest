import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-asuserlist',
  templateUrl: './asuserlist.component.html',
  styleUrls: ['./asuserlist.component.css']
})
export class AsuserlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    

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

  $(".row6,.row7,.row8,.row9,.row10,.row11,.row12,.row13,.row14,.row15").hide();

$('.equipment6').click(function () {

  $('.equipment6').toggleClass('flashOn flash');
$(".row6").toggle();

});
$('.equipment7').click(function () {

  $('.equipment7').toggleClass('flashOn flash');
$(".row7").toggle();

});
$('.equipment8').click(function () {

  $('.equipment8').toggleClass('flashOn flash');
$(".row8").toggle();

});
$('.equipment9').click(function () {

  $('.equipment9').toggleClass('flashOn flash');
$(".row9").toggle();

});
$('.equipment10').click(function () {

  $('.equipment10').toggleClass('flashOn flash');
$(".row10").toggle();

});
$('.equipment11').click(function () {

  $('.equipment11').toggleClass('flashOn flash');
$(".row11").toggle();

});
$('.equipment12').click(function () {

  $('.equipment12').toggleClass('flashOn flash');
$(".row12").toggle();

});
$('.equipment13').click(function () {

  $('.equipment13').toggleClass('flashOn flash');
$(".row13").toggle();

});
$('.equipment14').click(function () {

  $('.equipment14').toggleClass('flashOn flash');
$(".row14").toggle();

});
$('.equipment15').click(function () {

  $('.equipment15').toggleClass('flashOn flash');
$(".row15").toggle();

});

  }

}
