import { EmployeeComponent } from './controllers/employee/employee.component';
import { AdminComponent } from './controllers/admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { UserloginComponent } from './users/userlogin/userlogin.component';


const routes: Routes = [
     {path : "" , redirectTo : "/index" , pathMatch : "full"},
     {path : "index", component: IndexComponent},
     { path : "admin" , component : AdminComponent },
     { path : "employee", component : EmployeeComponent },
     { path : "userlogin" , component : UserloginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
