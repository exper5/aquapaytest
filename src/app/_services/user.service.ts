import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';
import { Personal } from '../data/formData.model';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    //get checker list add unitary supplier form
    getAll() {
        return this.http.get<User[]>('http://aquapayfake.ap-south-1.elasticbeanstalk.com/api/maker/checkers');
    }

    //get list of vendor api call in supplier list form
    getSupplierlist(){
        return this.http.get<User[]>('http://aquapayfake.ap-south-1.elasticbeanstalk.com//api/maker/getAllSupliers');
    }

    // getById(id: number) {
    //     return this.http.get('/api/users/' + id);
    // }

    create(personal: Personal) {
        return this.http.post(' http://aquapayfake.ap-south-1.elasticbeanstalk.com/api/maker/vendor', personal);
    }

    // update(user: User) {
    //     return this.http.put('/api/users/' + user.id, user);
    // }

    // delete(id: number) {
    //     return this.http.delete('/api/users/' + id);
    // }
}