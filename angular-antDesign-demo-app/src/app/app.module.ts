import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';

//import module
import { AuthenModule } from './authen/authen.module';
import { RegisterComponent } from './register/register.component';
import { ShopModule } from './shop/shop.module';
   //Ant design 
import {ZoroAntdModule} from './zoro-antd.module';

//import component
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';


const COMPONENTS = [
  AppComponent,
  RegisterComponent
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
  AuthenModule
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
