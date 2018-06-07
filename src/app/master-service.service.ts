import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {

  
  restItems: any;
  
  constructor(private http: HttpClient) {}

  /**
   * sample method for accessing service
   * you have to design methods as per your requirement.  
   **/ 
  getRestItems() :any{
    // 'https://public-api.wordpress.com/rest/v1.1/sites/vocon-it.com/posts'
    let Url = 'https://public-api.wordpress.com/rest/v1.1/sites/vocon-it.com/posts';
    this.getRestService(Url)
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log(this.restItems);
        }
      )
    return this.restItems;
  }

  /**
   * getRestService
   * using this method you can perform Get request to the server 
   * @param url : from here you can provide address of your api
   * @returns : return the requested data which can be cast in to your responce object. 
   */
  getRestService(url:any) {
    return this.http
      .get<any[]>(url)
      .pipe(map(data => data));
  }

  /**
   * postRestService
   * perform the post oprations
   * using this method you can post data to the server 
   * @param url : from here you can provide address of your api
   * @param inData : if you want to provide data with request you can provide using this.
   * @returns : return the requested data which can be cast in to your responce object. 
   */
  postRestService(url:any,inData:any) {
    return this.http
      .post<any[]>(url,inData)
      .pipe(map(data => data));
  }


}
