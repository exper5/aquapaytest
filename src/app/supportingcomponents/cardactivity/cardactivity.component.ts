import { Component, OnInit } from '@angular/core';
import { User } from '../../_models';
import { UserService } from '../../_services';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-cardactivity',
  templateUrl: './cardactivity.component.html',
  styleUrls: ['./cardactivity.component.css']
})
export class CardactivityComponent implements OnInit {
  currentUser: User;
  checkers: User[] = [];
  constructor(private userService: UserService, private http: HttpClient) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

  ngOnInit() {
    this.cardactcompare();
  }
  private cardactcompare() {
    this.userService.cardcompare().pipe(first()).subscribe(result => { 
         this.checkers = result['data'];
          
         console.log(result['data']);
        
         
        
    });
  }
}
