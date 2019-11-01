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
  addToCart(item){
     var itemobj =  {
          id : item.id ,
          name : item.name,
          thumbnail : item.thumbnail,
          discription : item.discription,
          lastupdate : item.lastupdate
     };
     sessionStorage.setItem(item.id, JSON.stringify(itemobj ) ) ; 
    this.cart.push( JSON.parse(sessionStorage.getItem(item.id)) ) ;
  }

}
