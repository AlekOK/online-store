import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryListModule } from './category-list/category-list.module';
import { ProductsListModule } from './products-list/products-list.module';

@NgModule({
  declarations: [
    HomeComponent, NavbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CategoryListModule,
    ProductsListModule,
    SharedModule
  ],
  exports: [HomeComponent]
})

export class HomeModule { }
