import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//module
import { PagesModule } from './pages/pages.module';

const COMPONENTS = [

]

const MODULES = [
  CommonModule,
  PagesModule
]

@NgModule({
  declarations: [],
  imports: [...MODULES],
  exports: []
})
export class ShopModule { }
