import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@client/home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('@admin/admin.module').then((m) => m.AdminModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('@client/cart/cart.module').then(m => m.CartModule)
      },
      {
        path: 'orders/:id',
        loadChildren: () => import('@client/orders/orders.module').then(m => m.OrdersModule)
      }
    ]
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
