import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../authen/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { ZoroAntdModule } from '../zoro-antd.module';
import { LayoutAuthenComponent } from '../layouts/layout-authen/layout-authen.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dang-ky',
    component: RegisterComponent
  }
]
const COMPONENTS = [
  LayoutAuthenComponent,
  RegisterComponent,
  LoginComponent
]

const MODULES = [
  CommonModule,
  ZoroAntdModule,
  ReactiveFormsModule
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES, RouterModule.forChild(routes)],
  exports: []
})
export class AuthenModule { }
