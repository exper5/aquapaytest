import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-chreviewpayment',
  templateUrl: './chreviewpayment.component.html',
  styleUrls: ['./chreviewpayment.component.css']
})
export class ChreviewpaymentComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function() {
      $(".thumbnail").click(function(){
        $(this).toggleClass("bluebr");
    });
    $('#media').carousel({
      interval:0
    })
      
      $("#next").click(function(){
        $("#prev").show();
    });

    $(".rowShow").hide();

    $('.showhide').click(function(){
      //alert("clicked");
      var row=$(this).parent().parent().next();
      $(row).toggle();
      $(row).next().toggle();
    });
    });
   
  }

}
