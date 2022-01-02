import { LayoutShopComponent } from './layouts/layout-shop/layout-shop.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { LayoutAuthenComponent } from './layouts/layout-authen/layout-authen.component';
import { LayoutsModule } from './layouts/layouts.module';

//import component

const routes: Routes = [

  {
    path: '',
    redirectTo: 'authen',
    pathMatch: 'full',
  },

  {
    path: 'authen',
    component: LayoutAuthenComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../app/authen/authen.module').then((m) => m.AuthenModule),
      },
      
    ],
  },

  {
   path: 'admin',
    component: LayoutAdminComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../app/admin/admin.module').then((m) => m.AdminModule),
      },
    ],
  },

 
  {
    path: '**',
    redirectTo: '/authen/404',
  }
  
]

const MODULES = [
  LayoutsModule
]

@NgModule({
  imports: [...MODULES,RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules
  }),],
  exports: [RouterModule],
})
export class AppRoutingModule {}

 

