import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-mpayment',
  templateUrl: './mpayment.component.html',
  styleUrls: ['./mpayment.component.css']
})
export class MpaymentComponent implements OnInit {

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
$(".rowShow").hide();

$('.showhide').click(function(){
  //alert("clicked");
  var row=$(this).parent().parent().next();
  $(row).toggle();
  $(row).next().toggle();
});

//---------------------------------------toggle class for table collapse-------------------------------------------
//nav active

  }

}