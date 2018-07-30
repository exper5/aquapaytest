import { Component, OnInit } from '@angular/core';
// //import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-asfaq',
  templateUrl: './asfaq.component.html',
  styleUrls: ['./asfaq.component.css']
})
export class AsfaqComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    $(document).ready(function(){
      // Add minus icon for collapse element which is open by default
      $(".collapse.in").each(function(){
        $(this).siblings(".panel-heading").find(".fa").addClass("rotate");
      });
      
      // Toggle plus minus icon on show hide of collapse element
      $(".collapse").on('show.bs.collapse', function(){
        $(this).parent().find(".fa").addClass("rotate");
      }).on('hide.bs.collapse', function(){
        $(this).parent().find(".fa").removeClass("rotate");
      });
  });
  }

}
