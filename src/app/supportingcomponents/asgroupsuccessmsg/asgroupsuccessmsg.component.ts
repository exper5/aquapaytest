import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-asgroupsuccessmsg',
  templateUrl: './asgroupsuccessmsg.component.html',
  styleUrls: ['./asgroupsuccessmsg.component.css']
})
export class AsgroupsuccessmsgComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(".activeapp").on("click", function () {
         $(".paylink").addClass("active");
         $(".paylink").siblings(".active").removeClass("active");
       });
  }

}
