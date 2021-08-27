import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { PinModel } from '../notify-by-pin/Pin-model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // private baseUrl = "http://127.0.0.1:8000";
  // private baseUrl = "http://0.0.0.0:5000";
  private baseUrl = "https://cowin-notifier-api.herokuapp.com";

  private cowinUrl = "https://cdn-api.co-vin.in/api/v2";
//  https://cdn-api.co-vin.in/api/v2/admin/location/states
//  https://cdn-api.co-vin.in/api/v2/admin/location/districts/12
  
  constructor(private http: HttpClient) { }

  postOrder(data: PinModel): any {
    return this.http.post<PinModel>(this.baseUrl + '/addOrder', JSON.stringify(data));
  }

  getLog(): any{
    return this.http.get(this.baseUrl + '/getLog');
  }
  getPin(): any{
    return this.http.get(this.baseUrl + '/getPin');
  }
  getStates(): any{
    return this.http.get(this.cowinUrl + '/admin/location/states');
  }
  getDistricts(distric_id:string): any{
      return this.http.get(this.cowinUrl + '/admin/location/districts/'+distric_id);
  }
}
