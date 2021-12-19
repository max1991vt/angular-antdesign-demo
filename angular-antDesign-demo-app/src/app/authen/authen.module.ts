import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../authen/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { ZoroAntdModule } from '../zoro-antd.module';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent
  }
]
const COMPONENTS = [
  RegisterComponent
]

const MODULES = [
  CommonModule,
  ZoroAntdModule,
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES, RouterModule.forChild(routes)],
  exports: []
})
export class AuthenModule { }
