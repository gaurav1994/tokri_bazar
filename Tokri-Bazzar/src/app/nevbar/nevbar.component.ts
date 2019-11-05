import { IcartOrder } from './../interfaces/cart-item';
import { Cart } from './../classes/cart';
import { Component, OnInit, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-nevbar',
  templateUrl: './nevbar.component.html',
  styleUrls: ['./nevbar.component.scss']
})
export class NevbarComponent implements OnInit, AfterContentChecked{

  constructor() { }

  ngOnInit() {
       console.log("nevbar componant");
       this.admin = false;
       this.employee = false;
  }
  ngAfterContentChecked(){
  //   console.log( "cart items in nevbar component ");
    console.log(this.cartNevbar);
  }
  public admin : boolean = false;
  public employee : boolean = false;
  public countproduct: number = 1;
  public cartNevbar: IcartOrder[] = Cart.cart;
  adminMethod(){
     this.admin = true;
     this.employee = false;
  }
  employeeMethod(){
     this.admin = false;
     this.employee = true;
  }
  notadminempMethod(){
       this.admin = false;
       this.employee = false;
  }
  removeAnItem(){
     event.preventDefault();
  //   console.log("1");
  }

}
