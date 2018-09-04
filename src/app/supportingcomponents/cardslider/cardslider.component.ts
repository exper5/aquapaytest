import { Component, OnInit, ViewChild } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../../_models';
import { OwlCarousel } from 'ngx-owl-carousel';
import { UserService } from '../../_services';
import { HttpClient } from '@angular/common/http';
//import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-cardslider',
  templateUrl: './cardslider.component.html',
  styleUrls: ['./cardslider.component.css']
})
export class CardsliderComponent implements OnInit {
currentUser: User;
  cards: User[] = [];
  @ViewChild('owlElement') owlElement: OwlCarousel
    
 
 
   fun() {
     this.owlElement.next([200])
     //duration 200ms
   }
  constructor(private userService: UserService, private http: HttpClient) {this.currentUser = JSON.parse(localStorage.getItem('currentUser'));  }

  public ngOnInit() {
    this.carddetails();

        // $('.owl-carousel').owlCarousel({
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

   
  }

  
  private carddetails() {
    this.userService.carddetails().pipe(first()).subscribe(result => { 
        this.cards = result['data']; 
        console.log(result['data']);
        
        
    });
  }
}
