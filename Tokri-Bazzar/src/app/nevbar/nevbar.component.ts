import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nevbar',
  templateUrl: './nevbar.component.html',
  styleUrls: ['./nevbar.component.scss']
})
export class NevbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
       console.log("nevbar componant");
       this.admin = false;
       this.employee = false;
  }
  public admin : boolean = false;
  public employee : boolean = false;
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

}
