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
import { RouterModule } from '@angular/router';

import en from '@angular/common/locales/en';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

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
  RouterModule, 
  ZoroAntdModule
  
]

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS],
  providers: [ { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons } ]
})
export class LayoutsModule { }
