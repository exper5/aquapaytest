import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-asuserapprovemsg',
  templateUrl: './asuserapprovemsg.component.html',
  styleUrls: ['./asuserapprovemsg.component.css']
})
export class AsuserapprovemsgComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(".activeapp").on("click", function () {
      $(".paylink2").addClass("active");
      $(".paylink2").siblings(".active").removeClass("active");
    });
  }

}
