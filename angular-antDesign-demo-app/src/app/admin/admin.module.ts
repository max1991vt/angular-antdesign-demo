import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesAdminComponent } from './employees-admin/employees-admin.component';
import { CollaboratorsAdminComponent } from './collaborators-admin/collaborators-admin.component';
import { CategorysAdminComponent } from './categorys-admin/categorys-admin.component';
import { DepotsAdminComponent } from './depots-admin/depots-admin.component';
const routes: Routes = [
{
  path: 'khach-hang',
  component: UserAdminComponent,
},
{
  path: 'cong-tac-vien',
  component: CollaboratorsAdminComponent,
},
{
  path: 'nhan-vien',
  component: EmployeesAdminComponent,
},
{
  path: 'san-pham',
  component: ProductAdminComponent,
},
{
  path: 'danh-muc',
  component: CategorysAdminComponent,
},
{
  path: 'kho',
  component: DepotsAdminComponent,
}
]

const COMPONENTS = [
  UserAdminComponent,
  ProductAdminComponent,
  EmployeesAdminComponent,
  CollaboratorsAdminComponent,
  CategorysAdminComponent,
  DepotsAdminComponent
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
