import { Cart } from './../classes/cart';
import { Component, OnInit, ViewChild, AfterViewChecked, AfterContentChecked, AfterViewInit, AfterContentInit } from '@angular/core';
import { NevbarComponent } from '../nevbar/nevbar.component';
import { CartServiceService } from '../services/cart-service.service';
import { IcartAllItem } from '../interfaces/cart-item';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterContentChecked{
  constructor(private  _cart_service : CartServiceService ) { }
  public cart = [];
  public allItems : IcartAllItem[]= [ ];
  ngOnInit() {
       sessionStorage.clear(); 
       this._cart_service.getLocalItems().subscribe(data => this.allItems = data);
  }
  ngAfterContentChecked(){
    //   console.log(this.allItems);
     
  }
 // public itemobj =  new Cart();
  addToCart(item, selecteditemcount){
  //   sessionStorage.setItem(item.id, JSON.stringify(itemobj ) ) ;
     Cart.addItemtoCart(item, Number.parseInt( selecteditemcount.value) );
  //   console.log(Cart.cart);
  }

}
