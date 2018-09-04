import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService } from '../../_services';
import { User } from '../../_models';
import { HttpClient } from '@angular/common/http';
//import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-payslider',
  templateUrl: './payslider.component.html',
  styleUrls: ['./payslider.component.css']
})
export class PaysliderComponent implements OnInit {
  currentUser: User;
  tempName:any[];
  temp :string;
  
  // payments: User[] = [];
  constructor(private userService: UserService, private http: HttpClient) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));  }

  ngOnInit() {
    //this.vendorName="ravi boss";
    this.recentpayments();
    $(document).ready(function() {
      $(".thumbnail").click(function(){
        $(this).toggleClass("bluebr");
    });
      $('#media').carousel({
        interval: 40000
      })
      $("#prev").hide();
      $("#next").click(function(){
        $("#prev").show();
    });
      
      $('.carousel .item').each(function(){
        var next = $(this).next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        
        if (next.next().length>0) {
          next.next().children(':first-child').clone().appendTo($(this));
        }
        else {
          $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
      });
    });

  }

  private recentpayments() {
    this.userService.allrecentpayments().pipe(first()).subscribe(result => { 

        this.temp = result['data'][0]['Name'];
          console.log(this.temp);
        
    });
  }

}
