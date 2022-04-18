import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatCardModule } from '@angular/material/card';
import { CategoryCardComponent } from './category-card/category-card.component';
import { ProductsListModule } from '../products-list/products-list.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HomeComponent, CategoryCardComponent, NavbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    ProductsListModule
  ],
  exports: [HomeComponent, CategoryCardComponent]
})
export class HomeModule { }
