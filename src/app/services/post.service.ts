import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { PinModel } from '../notify-by-pin/Pin-model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl="http://127.0.0.1:8000"
  constructor(private http: HttpClient) { }

  postOrder(data: PinModel): any {
    return this.http.post<PinModel>(this.baseUrl + '/addOrder', JSON.stringify(data));
  }
}
