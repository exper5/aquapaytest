import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-asgroupspending',
  templateUrl: './asgroupspending.component.html',
  styleUrls: ['./asgroupspending.component.css']
})
export class AsgroupspendingComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      $(".success").hide();
    
      $('.activeapp').click(function () {
        $(".success").show();
        $(".abc").hide();
      });

    });

    


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
  
//---------------------------------------toggle class for table collapse-------------------------------------------

$(".rowShow").hide();

$('.showhide').click(function(){
  //alert("clicked");
  // $('.equipment').toggleClass('flashOn flash');
  var row=$(this).parent().parent().next();
  $(row).toggle();
 // $(row).next().toggle();
})


 //-----------------on click all row select---------------------------------------------------------

 $(" input[name='mainmenu']").click(function(){
  var  is_checked=$(this).is(":checked");
    $("input[name='submenu']").prop("checked",is_checked);
});
//-----------------------------on click all row select-----------------------------------------------------

  }

}
