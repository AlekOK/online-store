import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatCardModule } from '@angular/material/card';
import { CategoryCardComponent } from './category-card/category-card.component';
import { ProductsListModule } from '../products-list/products-list.module';

@NgModule({
  declarations: [
    HomeComponent, CategoryCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTabsModule,
    MatCardModule,
    ProductsListModule
  ],
  exports: [HomeComponent, CategoryCardComponent]
})
export class HomeModule { }
