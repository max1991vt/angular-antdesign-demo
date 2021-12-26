import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

//import module
import { AuthenModule } from './authen/authen.module';
import { ShopModule } from './shop/shop.module';
   //Ant design 
import {ZoroAntdModule} from './zoro-antd.module';

//import component
import { AppComponent } from './app.component';


const COMPONENTS = [
  AppComponent,
]
const MODULES = [
  BrowserModule,
  AppRoutingModule,
  //Forms
  FormsModule,
  ReactiveFormsModule,
  //Ant design
  ZoroAntdModule,
  ShopModule,
  AdminModule,
  AuthenModule,
  RouterModule,

]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
