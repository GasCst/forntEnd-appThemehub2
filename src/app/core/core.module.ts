import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreLayoutComponent } from './layout/core-layout/core-layout.component';
import { CorePublicLayoutComponent } from './layout/core-public-layout/core-public-layout.component';
import { CorePrivateLayoutComponent } from './layout/core-private-layout/core-private-layout.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    CoreLayoutComponent,
    CorePublicLayoutComponent,
    CorePrivateLayoutComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class CoreModule { 
  constructor() {
    console.log('Core MODULE Component initialized');
  }
}
