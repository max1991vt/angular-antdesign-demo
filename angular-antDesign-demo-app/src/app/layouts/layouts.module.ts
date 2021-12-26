import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { LayoutAuthenComponent } from './layout-authen/layout-authen.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { LayoutShopComponent } from './layout-shop/layout-shop.component';

const COMPONENTS = [
  LayoutAuthenComponent,
  LayoutAdminComponent,
  LayoutShopComponent
]

const MODULES = [
  CommonModule
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...MODULES]
})
export class LayoutsModule { }
