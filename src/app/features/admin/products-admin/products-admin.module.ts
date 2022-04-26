import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsAdminRoutingModule } from './products-admin-routing.module';
import { ProductsAdminComponent } from './products-admin.component';


@NgModule({
  declarations: [ProductsAdminComponent],
  imports: [
    CommonModule,
    ProductsAdminRoutingModule
  ]
})
export class ProductsAdminModule { }
