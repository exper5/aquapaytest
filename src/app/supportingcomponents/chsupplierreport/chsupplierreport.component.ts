import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-chsupplierreport',
  templateUrl: './chsupplierreport.component.html',
  styleUrls: ['./chsupplierreport.component.css']
})
export class ChsupplierreportComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(".rowShow").hide();

    $('.showhide').click(function(){
      //alert("clicked");
      var row=$(this).parent().parent().next();
      $(row).toggle();
      $(row).next().toggle();
    });
    

  }

}
