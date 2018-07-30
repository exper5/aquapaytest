import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-navfilter',
  templateUrl: './navfilter.component.html',
  styleUrls: ['./navfilter.component.css']
})
export class NavfilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $(".blu-color").click(function(){
          $(this).toggleClass("bluebg");
      });
  });
  }

}
