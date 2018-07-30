import { Component, OnInit } from '@angular/core';
// //import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-asviewrules',
  templateUrl: './asviewrules.component.html',
  styleUrls: ['./asviewrules.component.css']
})
export class AsviewrulesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

   


  $(".rejectapp").on("click", function () {
    $(".rulelink").addClass("active");
    $(".rulelink").siblings(".active").removeClass("active");
});



    $(document).ready(function(){
      $(".sucess").hide();
      $("#step-2").hide();
    
      $('.activeapp').click(function () {
        $("#step-2").show();
        $(".abc").hide();
      });

      $(".otpback").click(function(){
        $("#step-2").hide();
        $(".abc").show();
      })

      $('.verify').click(function(){
        $("#step-2").hide();
        $(".sucess").show();
      })

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

//-----------------on click all row select---------------------------------------------------------

$(" input[name='mainmenu']").click(function(){
  var  is_checked=$(this).is(":checked");
    $("input[name='submenu']").prop("checked",is_checked);
});
//-----------------------------on click all row select-----------------------------------------------------


//---------------------------------------toggle class for table collapse-------------------------------------------

$(".rowShow").hide();

$('.showhide').click(function(){
  //alert("clicked");
   $(this).toggleClass('flashOn flash');
  var row=$(this).parent().parent().next();
  $(row).toggle();
 // $(row).next().toggle();
})


  }

}
