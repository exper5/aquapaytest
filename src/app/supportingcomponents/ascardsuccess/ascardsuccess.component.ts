import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-ascardsuccess',
  templateUrl: './ascardsuccess.component.html',
  styleUrls: ['./ascardsuccess.component.css']
})
export class AscardsuccessComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(".activeapp").on("click", function () {
      $(".supplink").addClass("active");
      $(".supplink").siblings(".active").removeClass("active");
    });
  }

}
