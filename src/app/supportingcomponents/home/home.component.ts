import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../_models';
import { UserService } from '../../_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userinfo: User[] = [];
  currentUser: User;
  orgname:string;
  firstname:string;
  lastname:string;
  role:string;
  designation:string;

  constructor(private userService: UserService, private http: HttpClient) {this.currentUser = JSON.parse(localStorage.getItem('currentUser'));  }

  ngOnInit() {
    this.getloguser();
  }
  private getloguser() {
    this.userService.getcurrentuser().pipe(first()).subscribe(result => { 
        // this.userinfo = result['Data']; 
        this.orgname = result['Data']['orgdet']['companyname']; 
        this.firstname = result['Data']['firstname']; 
         this.lastname = result['Data']['lastname']; 
         this.role = result['Data']['role'];
        this.designation = result['Data']['designation'];
        console.log(result['Data']);
        
    });
  }

}
