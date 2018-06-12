import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-asapprovecard',
  templateUrl: './asapprovecard.component.html',
  styleUrls: ['./asapprovecard.component.css']
})
export class AsapprovecardComponent implements OnInit {

  constructor(private router:Router) { }
  navigateNext(){
    this.router.navigate(['../asapproveotp2']);
  }
  

  ngOnInit() {


    $(document).ready(function() {
      $(".thumbnail").click(function(){
        $(this).toggleClass("bluebr");
    });
    $('#media').carousel({
      interval:0
    })
      
      $("#next").click(function(){
        $("#prev").show();
    });
      
     
    });
  }
    
 

}
