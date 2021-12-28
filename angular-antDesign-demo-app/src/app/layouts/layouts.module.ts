import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { LayoutAuthenComponent } from './layout-authen/layout-authen.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { LayoutShopComponent } from './layout-shop/layout-shop.component';

//admin-layout
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { ZoroAntdModule } from '../zoro-antd.module';

const COMPONENTS = [
  LayoutAuthenComponent,
  LayoutAdminComponent,
  LayoutShopComponent
]

const MODULES = [
  CommonModule,
  BrowserModule,
  FormsModule,
  HttpClientModule,
  HttpClientJsonpModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  ScrollingModule,
  DragDropModule,
  ZoroAntdModule
  
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS]
})
export class LayoutsModule { }
