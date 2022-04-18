import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsListComponent } from './products-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ProductsListRoutingModule,
    MatCardModule,
    MatIconModule
  ]
})
export class ProductsListModule { }
