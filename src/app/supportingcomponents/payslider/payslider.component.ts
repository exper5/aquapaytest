import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-payslider',
  templateUrl: './payslider.component.html',
  styleUrls: ['./payslider.component.css']
})
export class PaysliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $(".thumbnail").click(function(){
        $(this).toggleClass("bluebr");
    });
      $('#media').carousel({
        interval: 40000
      })
      $("#prev").hide();
      $("#next").click(function(){
        $("#prev").show();
    });
      
      $('.carousel .item').each(function(){
        var next = $(this).next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        
        if (next.next().length>0) {
          next.next().children(':first-child').clone().appendTo($(this));
        }
        else {
          $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
      });
    });
  }

}
