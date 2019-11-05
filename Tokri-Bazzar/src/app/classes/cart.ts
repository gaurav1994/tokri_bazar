import { IcartAllItem, IcartOrder } from '../interfaces/cart-item';

export class Cart {
          static cart: IcartOrder[] = [];
     //     constructor(cartlocal: any[]) {
     //       this.cart = cartlocal;
     //     }
        static addItemtoCart( item: IcartAllItem,itemcount) {
             for(var i in this.cart){
                    if(this.cart[i].id === item.id){
                         this.cart[i].count = this.cart[i].count + itemcount;
                         return;
                    } 
             }
               var newitem = {
                    id :  item.id,
                    name : item.name,
                    thumbnail : item.thumbnail,
                    discription : item.discription,
                    count : itemcount
               };
               this.cart.push(newitem);
         }
       }