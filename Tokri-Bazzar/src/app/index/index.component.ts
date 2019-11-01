import { Component, OnInit, ViewChild, AfterViewChecked, AfterContentChecked, AfterViewInit } from '@angular/core';
import { NevbarComponent } from '../nevbar/nevbar.component';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit , AfterViewInit{
  constructor() { }
  
  ngOnInit() {
       
  }
ngAfterViewInit(){
     
}

}
