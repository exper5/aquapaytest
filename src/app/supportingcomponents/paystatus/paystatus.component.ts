import { Component, OnInit } from '@angular/core';
import { User } from '../../_models';
import { UserService } from '../../_services';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-paystatus',
  templateUrl: './paystatus.component.html',
  styleUrls: ['./paystatus.component.css']
})
export class PaystatusComponent implements OnInit {
  // users: User[] = [];
  pending:string;
  approved:string;
  rejected:string;
  currentUser: User;
  constructor(private userService: UserService, private http: HttpClient) {this.currentUser = JSON.parse(localStorage.getItem('currentUser')); }

  ngOnInit() {
    this.paymentreqstatus();
  }
  private paymentreqstatus() {
    this.userService.getpaymentreq().pipe(first()).subscribe(result => { 
        // this.checkers = result['data']; 
        // console.log(result['data']);
        this.pending = result['data']['pending'];
        this.approved = result['data']['approved'];
        this.rejected = result['data']['rejected'];
        // console.log(this.users);
        
    });
  }
}
