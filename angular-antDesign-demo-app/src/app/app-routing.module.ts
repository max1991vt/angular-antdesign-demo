import { LayoutShopComponent } from './layouts/layout-shop/layout-shop.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { LayoutAuthenComponent } from './layouts/layout-authen/layout-authen.component';

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
    path: 'shop',
    component: LayoutShopComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../app/shop/shop.module').then((m) => m.ShopModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

/*
{
  path: 'auth',
  component: AuthLayoutComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./module/oauth2/oauth2.module').then(m => m.OAuth2Module),
    },
  ],
},
*/
