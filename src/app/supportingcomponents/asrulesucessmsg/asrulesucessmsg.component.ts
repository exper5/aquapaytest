import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-asrulesucessmsg',
  templateUrl: './asrulesucessmsg.component.html',
  styleUrls: ['./asrulesucessmsg.component.css']
})
export class AsrulesucessmsgComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(".activeapp").on("click", function () {
      $(".rulelink").addClass("active");
      $(".rulelink").siblings(".active").removeClass("active");
  });
  }

}
