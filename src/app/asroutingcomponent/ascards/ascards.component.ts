import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-ascards',
  templateUrl: './ascards.component.html',
  styleUrls: ['./ascards.component.css']
})
export class AscardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $("#mycard").click(function(){
        $("#London").show();
        $("#Paris").hide();
        $("#Tokyo").hide();
        $("#mycard").addClass("active");
        $("#pendcard").removeClass("active");
        $("#rejctcard").removeClass("active");
    });
      $("#pendcard").click(function(){
        $("#Paris").show();
        $("#London").hide();
        $("#Tokyo").hide();
        $("#pendcard").addClass("active");
        $("#mycard").removeClass("active");
        $("#rejctcard").removeClass("active");
    });
    $("#rejctcard").click(function(){
      $("#Tokyo").show();
      $("#Paris").hide();
      $("#London").hide();
      $("#rejctcard").addClass("active");
      $("#pendcard").removeClass("active");
      $("#mycard").removeClass("active");
  });
  });
  var coll = document.getElementsByClassName("collapsible");
        var i;

        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function () {
                this.classList.toggle("cactive");
                var content = this.nextElementSibling;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        }

  }

}
