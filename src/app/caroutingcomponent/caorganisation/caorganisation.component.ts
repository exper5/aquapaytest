import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../_services';
import { User } from '../../_models';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
// //import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-caorganisation',
  templateUrl: './caorganisation.component.html',
  styleUrls: ['./caorganisation.component.css']
})
export class CaorganisationComponent implements OnInit {
  currentUser: User;
  organisation: User[] = [];
  constructor(private userService: UserService, private http: HttpClient, private router: Router, private route: ActivatedRoute) {  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

  ngOnInit() {
    this.orgdetails();

    $(document).ready(function(){
      $(".success").hide();
    
      $('.activeapp').click(function () {
        $(".success").show();
        $(".abc").hide();
      });

    });

  }


  private orgdetails() {
    this.userService.getorginisationdetails().pipe(first()).subscribe(result => { 
        this.organisation = result['data']; 
        // this.filteredProducts=this.checkers;
        //   this.checkers1 = result['data'][0]['orgId']['status']; 
        console.log(result['data']);
         //console.log(result['data'][0]['orgId']['status']);
    });
  }

}
