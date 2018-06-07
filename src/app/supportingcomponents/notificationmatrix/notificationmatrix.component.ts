import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-notificationmatrix',
  templateUrl: './notificationmatrix.component.html',
  styleUrls: ['./notificationmatrix.component.css']
})
export class NotificationmatrixComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $("#registration").click(function(){
        $("#registrationtab").show();
        $("#paymenttab").hide();
        $("#logintab").hide();
        $("#registration").addClass("active");
        $("#payment").removeClass("active");
        $("#login").removeClass("active");
    });
      $("#payment").click(function(){
        $("#registrationtab").hide();
        $("#paymenttab").show();
        $("#logintab").hide();
        $("#payment").addClass("active");
        $("#registration").removeClass("active");
        $("#login").removeClass("active");
    });
    $("#login").click(function(){
      $("#registrationtab").hide();
      $("#paymenttab").hide();
      $("#logintab").show();
      $("#login").addClass("active");
      $("#registration").removeClass("active");
      $("#payment").removeClass("active");
  });
  });
  }

}
