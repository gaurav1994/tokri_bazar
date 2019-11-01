import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IcartAllItem } from '../interfaces/cart-item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private http : HttpClient ) { }
   private allitemsurl = '../../assets/local_cart/cart_items.json';

  public getLocalItems() : Observable<IcartAllItem[]> {
       return this.http.get<IcartAllItem[]>(this.allitemsurl);
  }
}
