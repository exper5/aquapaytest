import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-rulevalidator',
  templateUrl: './rulevalidator.component.html',
  styleUrls: ['./rulevalidator.component.css']
})
export class RulevalidatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(function(){
      $("#rulevalidlist").hide();
      $(".ruleNextBtn").click(function(){
          var error = $('.jqx-combobox-input').val();
          if(error == ""){
            $(".ComboError").show();
          }else{
            $(".ComboError").hide();
          }
        $("#rulevalidlist").show();
        $("#rulevalid").hide();
    });
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
            // Add minus icon for collapse element which is open by default
            $(".collapse.in").each(function(){
              $(this).siblings(".panel-heading").find(".fa").addClass("rotate");
            });
            
            // Toggle plus minus icon on show hide of collapse element
            $(".collapse").on('show.bs.collapse', function(){
              $(this).parent().find(".fa").addClass("rotate");
            }).on('hide.bs.collapse', function(){
              $(this).parent().find(".fa").removeClass("rotate");
            });
        });
  }

}
