import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
   CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatTableModule
  ]
})
export class CartModule { }
