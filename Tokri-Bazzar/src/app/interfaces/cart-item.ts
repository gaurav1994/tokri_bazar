import { IndexComponent } from './../index/index.component';
export interface IcartAllItem {
     id :  number,
     name : string,
     thumbnail : string
     discription : string,
     lastupdate : string,
     price : number
}

export interface IcartOrder {
     id :  number,
     name : string,
     thumbnail : string
     discription : string,
     price : number,
     count : number
}
