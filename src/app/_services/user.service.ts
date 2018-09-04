import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { User } from '../_models';
import { Personal } from '../data/formData.model';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    //get checker list add unitary supplier form
    getAll() {
        return this.http.get<User[]>('http://aquapayfake.ap-south-1.elasticbeanstalk.com/api/maker/checkers');
    }

    //get list of vendor api call in supplier list form
    getSupplierlist(){
        return this.http.get<User[]>('http://aquapayfake.ap-south-1.elasticbeanstalk.com/api/maker/supliers');
    }



    //get top payment list
    gettoppaymentlist(){
        return this.http.get<User[]>('http://aquapayfake.ap-south-1.elasticbeanstalk.com/api/maker/payments?top=5');
    }

    //list of payments
    listofpaymentsall(){
        return this.http.get<User[]>('http://aquapayfake.ap-south-1.elasticbeanstalk.com/api/maker/payments?top=20');
    }


      //get payment request status dashboard
      getpaymentreq(){
        return this.http.get<User[]>('http://aquapayfake.ap-south-1.elasticbeanstalk.com/api/maker/payments?month=11&year=2017');
    }

    //get supplier request status dashboard
    getsupplierstatus(){
        return this.http.get<User[]>('http://aquapayfake.ap-south-1.elasticbeanstalk.com/api/maker/supplierbymonth?month=08&year=2018');
    }

    // cards compare on dashboard 
    cardcompare(){
        return this.http.get<User[]>('http://aquapayfake.ap-south-1.elasticbeanstalk.com/api/maker/CardCompare?firstDate=2017-11-16&lastDate=2017-11-16');
    }

    // card details on dashboard and mcards page 
    carddetails(){
        return this.http.get<User[]>(' http://aquapayfake.ap-south-1.elasticbeanstalk.com/api/maker/cards');
    }

    allrecentpayments(){
        return this.http.get<User[]>('http://aquapayfake.ap-south-1.elasticbeanstalk.com/api/maker/recent-suppliers');
    }

    // editvendor(){
    //     return this.http.put<User[]>('http://aquapayfake.ap-south-1.elasticbeanstalk.com/api/maker/vendor'+ user.id, user);
    // }
    getById(id: number) {
        return this.http.get('http://aquapayfake.ap-south-1.elasticbeanstalk.com/api/maker/editvendor?id='+id);
    }

    deletevendorbyId(id:number){
        return this.http.delete('http://aquapayfake.ap-south-1.elasticbeanstalk.com/api/maker/deletevendor?id='+id);
    }
    // getById(id: number) {
    //     return this.http.get('/api/users/' + id);
    // }



    create(personal: Personal) {
        return this.http.post(' http://aquapayfake.ap-south-1.elasticbeanstalk.com/api/maker/vendor', [personal]);
    }



    //after edit form update form value
    edituser(personal: Personal) {
        return this.http.put('http://aquapayfake.ap-south-1.elasticbeanstalk.com/api/maker/vendor', [personal]);
    }

    //het user name on dashboard

    getcurrentuser(){
        return this.http.get('http://aquapayfake.ap-south-1.elasticbeanstalk.com/api/adminuser/whois');
    }


    getorginisationdetails(){
        return this.http.get('http://aquapayfake.ap-south-1.elasticbeanstalk.com//api/ccadmin/organizations');
    }


    //create groups
    creategroup(user: User) {
        return this.http.post('http://aquapayfake.ap-south-1.elasticbeanstalk.com//api/ccadmin/group', user);
    }
    // update(user: User) {
    //     return this.http.put('/api/users/' + user.id, user);
    // }

    // delete(id: number) {
    //     return this.http.delete('/api/users/' + id);
    // }
}