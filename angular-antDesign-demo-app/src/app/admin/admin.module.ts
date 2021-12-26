import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutAdminComponent } from '../layouts/layout-admin/layout-admin.component';

const COMPONENTS = [
  LayoutAdminComponent
]

const MODULES = [
  CommonModule

]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [],
})
export class AdminModule { }
