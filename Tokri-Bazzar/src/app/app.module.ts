import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './index/index.component';
import { AdminComponent } from './controllers/admin/admin.component';
import { EmployeeComponent } from './controllers/employee/employee.component';
import { NevbarComponent } from './nevbar/nevbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemfiltercountPipe } from './pipes/itemfiltercount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AdminComponent,
    EmployeeComponent,
    NevbarComponent,
    ItemfiltercountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
