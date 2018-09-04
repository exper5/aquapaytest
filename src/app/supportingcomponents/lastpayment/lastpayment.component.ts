import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../_models';
import { UserService } from '../../_services';
import { first } from 'rxjs/operators';
//import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-lastpayment',
  templateUrl: './lastpayment.component.html',
  styleUrls: ['./lastpayment.component.css']
})
export class LastpaymentComponent implements OnInit {
  checkers: User[] = [];
  currentUser: User;
  constructor(private userService: UserService, private http: HttpClient) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

  ngOnInit() {
    this.load5payments();
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
// $(".rowShow.grayStrip").hide();

// $('.flash.equipment3.showhide').click(function(){
//   //alert("clicked");
//   var row=$(this).parent().parent().next();
//   $(row).toggle();
//   $(row).next().toggle();
// })
$(document).ready(function(){
  $('.new').click(function(){
    console.log("clicked");
    $(this).parents('tr').siblings('tr').toggle();
  });
});
//---------------------------------------toggle class for table collapse-------------------------------------------
  }
  private load5payments() {
    this.userService.gettoppaymentlist().pipe(first()).subscribe(result => { 
        this.checkers = result['data']; 
        console.log(result['data']);
        
    });
  }

}
