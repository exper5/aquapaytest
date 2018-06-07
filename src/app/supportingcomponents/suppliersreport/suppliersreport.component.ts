import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-suppliersreport',
  templateUrl: './suppliersreport.component.html',
  styleUrls: ['./suppliersreport.component.css']
})
export class SuppliersreportComponent implements OnInit {

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
