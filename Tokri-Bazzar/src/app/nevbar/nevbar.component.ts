import { IcartOrder } from "./../interfaces/cart-item";
import { Cart } from "./../classes/cart";
import {
  Component,
  OnInit,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnChanges
} from "@angular/core";

@Component({
  selector: "app-nevbar",
  templateUrl: "./nevbar.component.html",
  styleUrls: ["./nevbar.component.scss"]
})
export class NevbarComponent implements OnInit, AfterContentChecked {
  constructor() {}

  ngOnInit() {
    console.log("nevbar componant");
    this.admin = false;
    this.employee = false;
  }
  ngAfterContentChecked() {
    //   console.log( "cart items in nevbar component ");
    console.log(this.cartNevbar);
    this.cartNevbar = Cart.cart;
    this.totalcounttype = this.cartNevbar.length;
    this.totalproduct = Cart.itemCountMethod();
    this.grandtotal = Cart.itemGrandTotal();
    console.log(this.totalproduct);
  }
  public admin: boolean = false;
  public employee: boolean = false;
  public countproduct: number ;
  public cartNevbar: IcartOrder[] = [];
  public totalcounttype : number ;
  public totalproduct : number ;
  public grandtotal: number;
  public adminMethod() {
    this.admin = true;
    this.employee = false;
  }
  public employeeMethod() {
    this.admin = false;
    this.employee = true;
  }
  public notadminempMethod() {
    this.admin = false;
    this.employee = false;
  }
  public removeAnItem(i) {
     event.stopPropagation();
     Cart.removeAnItem(i);
  }
  public itemCountNegative(i){
     Cart.negativeItemCount(i);
  }
  public itemCountPositive(i){
     Cart.positiveItemCount(i);
  }
  public clearCart(){
     Cart.clearCartMethod();
  }
}