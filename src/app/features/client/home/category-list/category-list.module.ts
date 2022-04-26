import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListRoutingModule } from './category-list-routing.module';
import { CategoryListComponent } from './category-list.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CategoryListComponent, CategoryCardComponent],
  imports: [
    CommonModule,
    CategoryListRoutingModule,
    SharedModule
  ]
})
export class CategoryListModule { }
