import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-supplierreviewdetails',
  templateUrl: './supplierreviewdetails.component.html',
  styleUrls: ['./supplierreviewdetails.component.css']
})
export class SupplierreviewdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function(){
      $(".fold-table tr.view").on("click", function(){
        $(this).toggleClass("open").next(".fold").toggleClass("open");
      });
    });
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
    $(document).ready(function(){
      $("#succes").click(function(){
         $("#succes").addClass("shad");
         $("#succes").siblings().removeClass("shad");
         $("#succesmenu").show();
         $("#unsuccesmenu").hide();
      });
      $("#unsucces").click(function(){
        $("#unsucces").addClass("shad");
        $("#unsucces").siblings().removeClass("shad");
        $("#unsuccesmenu").show();
        $("#succesmenu").hide();
     });
    });
  }

}
