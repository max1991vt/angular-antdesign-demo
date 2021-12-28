import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
{
  path: 'user',
  component: UserAdminComponent,
},
{
  path: 'product',
  component: ProductAdminComponent,
}
]

const COMPONENTS = [
  UserAdminComponent,
  ProductAdminComponent
]
const MODULES = [
  CommonModule,
]
@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES, RouterModule.forChild(routes)],
  exports: [],
})
export class AdminModule { }
