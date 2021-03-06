import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../_models';
import { UserService } from '../../_services';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { OwlCarousel } from 'ngx-owl-carousel';
//import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-ascardslider',
  templateUrl: './ascardslider.component.html',
  styleUrls: ['./ascardslider.component.css']
})
export class AscardsliderComponent implements OnInit {
    currentUser: User;
  cards: User[] = [];
  @ViewChild('owlElement') owlElement: OwlCarousel
 
 
   fun() {
     this.owlElement.next([200])
     //duration 200ms
   }
  constructor(private userService: UserService, private http: HttpClient) {this.currentUser = JSON.parse(localStorage.getItem('currentUser')); }

  ngOnInit() {
   
   
//   function owlback(){ $('.owl-carousel').owlCarousel({
//     loop: false,
//     stagePadding: 15,
//     margin: 10,
//     nav: true,
//     navText: ['<span class="uk-margin-small-right uk-icon" uk-icon="icon: chevron-left"></span>', '<span class="uk-margin-small-left uk-icon" uk-icon="icon: chevron-right"></span>'],
//     responsive: {
//         0: {
//             items: 1
//         },
//         640: {
//             items: 1
//         },
//         960: {
//             items: 1
//         },
//         1200: {
//             items: 1
//         }
//     }
// })
// console.log("owl");

//   }
  this.carddetails();

  }


  private carddetails() {
    this.userService.carddetails().pipe(first()).subscribe(result => { 
        this.cards = result['data']; 
        console.log(result['data']);
        
        
    });
  }
}
