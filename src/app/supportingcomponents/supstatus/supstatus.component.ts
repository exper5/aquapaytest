import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService } from '../../_services';
import { User } from '../../_models';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-supstatus',
  templateUrl: './supstatus.component.html',
  styleUrls: ['./supstatus.component.css']
})
export class SupstatusComponent implements OnInit {
  pending:string;
  approved:string;
  rejected:string;
  currentUser: User;
  constructor(private userService: UserService, private http: HttpClient) {this.currentUser = JSON.parse(localStorage.getItem('currentUser')); }

  ngOnInit() {
    this.supplierreqstatus();
  }
  private supplierreqstatus() {
    this.userService.getsupplierstatus().pipe(first()).subscribe(result => { 
        // this.checkers = result['data']; 
        // console.log(result['data']);
        this.pending = result['data']['pending'];
        this.approved = result['data']['approved'];
        this.rejected = result['data']['rejected'];
        // console.log(this.users);
        
    });
  }
}
