import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'orders',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'orders',
        loadChildren: () =>
          import('@admin/orders-admin/orders-admin.module').then((m) => m.OrdersAdminModule)
      },
      {
        path: 'products',
        loadChildren: () =>
          import('@admin/products-admin/products-admin.module').then((m) => m.ProductsAdminModule)
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('@admin/categories-admin/categories-admin.module').then((m) => m.CategoriesAdminModule)
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
