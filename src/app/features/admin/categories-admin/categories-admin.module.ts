import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesAdminRoutingModule } from './categories-admin-routing.module';
import { CategoriesAdminComponent } from './categories-admin.component';


@NgModule({
  declarations: [CategoriesAdminComponent],
  imports: [
    CommonModule,
    CategoriesAdminRoutingModule
  ]
})
export class CategoriesAdminModule { }
