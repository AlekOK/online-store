import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { HomeModule } from './components/home/home.module';
import { AdminModule } from './components/admin/admin.module';
import { FeaturesComponent } from './features.component';
import { LayoutModule } from '../static/components/layout/layout.module';
import { CartModule } from './components/cart/cart.module';


@NgModule({
  declarations: [
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    HomeModule,
    AdminModule,
    LayoutModule,
    CartModule
  ]
})
export class FeaturesModule { }
