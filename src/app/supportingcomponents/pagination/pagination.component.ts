import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(".one a").on("click", function () {
      $(".one").addClass("active");
      $(".one").siblings(".active").removeClass("active");
    });
    
    $(".two a").on("click", function () {
      $(".two").addClass("active");
      $(".two").siblings(".active").removeClass("active");
    });
    
    $(".three a").on("click", function () {
      $(".three").addClass("active");
      $(".three").siblings(".active").removeClass("active");
    });

  }

}
