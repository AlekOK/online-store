import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './static/components/not-found-page/not-found-page.component';
import { LoginComponent } from "./static/components/login/login.component";
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./features/components/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./features/components/admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('./features/components/cart/cart.module').then(m => m.CartModule)
      },
      {
        path: 'products-list/:id',
        loadChildren: () => import('./features/components/products-list/products-list.module').then(m => m.ProductsListModule)
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'not-found',
    component: NotFoundPageComponent
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
