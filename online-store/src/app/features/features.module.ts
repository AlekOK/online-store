import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { FeaturesComponent } from './features.component';
import { LayoutModule } from '../static/components/layout/layout.module';


@NgModule({
  declarations: [
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    HomeModule,
    AdminModule,
    LayoutModule
  ]
})
export class FeaturesModule { }
