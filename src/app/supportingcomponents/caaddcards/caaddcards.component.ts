import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';
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


    $(".submit").on("click", function () {
      $(".supplink").addClass("active");
      $(".supplink").siblings(".active").removeClass("active");
    });

   
    
    $('.inputstyledot').bind('keyup', function(event) {
      var val=$(this).val();
      if(val != ''){
        var parId=$(this).parent().attr('id');
        if(parId == 'par1') {
          $(this).parent().next().find('input').focus();
        }else{
          $(this).parent().parent().next().find('input:first').focus();
        }
       }
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



//-----------------------------------------------------------------------------------------------------------



//------------------------------------------------------------------------------------------------------------------

  }

}
