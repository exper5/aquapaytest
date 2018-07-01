import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
declare var loadAsPiCharts : any;
@Component({
  selector: 'app-caaddcards',
  templateUrl: './caaddcards.component.html',
  styleUrls: ['./caaddcards.component.css']
})
export class CaaddcardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    $(document).ready(function(){
      $(".nxt").hide();
    
      $('.submit').click(function () {
        $(".nxt").show();
        $(".xyz").hide();
      });

    });



   //---------------------------------------Datepicker js start--------------------------------------------

   loadAsPiCharts();
    $('.example2').datepicker({
      autoclose: true,
      format: "dd M yy"
  });
    
//---------------------------------------Datepicker js END-------------------------------------------
//----------------------for only digit validation----------------------------------------------------


//----------------------for only digit validation----------------------------------------------------
  }

}
