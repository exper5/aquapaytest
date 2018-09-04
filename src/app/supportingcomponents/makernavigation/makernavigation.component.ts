import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';
import { AuthenticationService } from '../../_services';
import { Router, ActivatedRoute } from '@angular/router';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-makernavigation',
  templateUrl: './makernavigation.component.html',
  styleUrls: ['./makernavigation.component.css']
})
export class MakernavigationComponent implements OnInit {
  returnUrl: string;

  constructor(private authenticationService: AuthenticationService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    $(window).bind('beforeunload',function(){

      //save info somewhere
     
      localStorage.clear();
     
     var url = "http://www.mydomain.com/new-page.html";
      $( location ).attr("href", url);
      
      });



    $(".dash a").on("click", function () {
      $(".dash").addClass("active");
      $(".dash").siblings(".active").removeClass("active");
  });

    $(".activlink a").on("click", function () {
      $(".activlink").addClass("active");
      $(".activlink").siblings(".active").removeClass("active");
  });

  $(".rulelink a").on("click", function () {
    $(".rulelink").addClass("active");
    $(".rulelink").siblings(".active").removeClass("active");
});

$(".paylink a").on("click", function () {
  $(".paylink").addClass("active");
  $(".paylink").siblings(".active").removeClass("active");
});

$(".supplink a").on("click", function () {
  $(".supplink").addClass("active");
  $(".supplink").siblings(".active").removeClass("active");
});

$(".cardlink a").on("click", function () {
  $(".cardlink").addClass("active");
  $(".cardlink").siblings(".active").removeClass("active");
});

$(".faqlink a").on("click", function () {
  $(".faqlink").addClass("active");
  $(".faqlink").siblings(".active").removeClass("active");
  $(".dash").removeClass("active");
});

$(".quicklink a").on("click", function () {
  $(".quicklink").addClass("active");
  $(".quicklink").siblings(".active").removeClass("active");
});

$(".notilink a").on("click", function () {
  $(".notilink").addClass("active");
  $(".notilink").siblings(".active").removeClass("active");
});

$(".profilink a").on("click", function () {
  $(".profilink").addClass("active");
  $(".profilink").siblings(".active").removeClass("active");
  $(".dash").removeClass("active");
});

$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
  }

  myMethod(event){
    this.authenticationService.logout();
    
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
  } 
}
