import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-chlastpayment',
  templateUrl: './chlastpayment.component.html',
  styleUrls: ['./chlastpayment.component.css']
})
export class ChlastpaymentComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    //---------------------------------------modelbox js start--------------------------------------------
function alignModal() {
  var modalDialog = $(this).find(".modal-dialog");

  // Applying the top margin on modal dialog to align it vertically center
  modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
}
// Align modal when it is displayed
$(".modal").on("shown.bs.modal", alignModal);

// Align modal when user resize the window
$(window).on("resize", function () {
  $(".modal:visible").each(alignModal);
});
//---------------------------------------modelbox js end--------------------------------------------

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
})

  }

}
