import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
declare var loadAsPiCharts : any;
@Component({
  selector: 'app-caaddcardsuccessmsg',
  templateUrl: './caaddcardsuccessmsg.component.html',
  styleUrls: ['./caaddcardsuccessmsg.component.css']
})
export class CaaddcardsuccessmsgComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
    
    
      $(".gtog").on("click", function () {
        $(".supplink").addClass("active");
        $(".supplink").siblings(".active").removeClass("active");
      });

    });

  }

}
