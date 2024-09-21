import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from './icons/icon.module';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { NavigabilityComponent } from './components/navigability/navigability.component';

@NgModule({
  declarations: [ NavigabilityComponent ],
  imports: [CommonModule, IconModule, MaterialModule, RouterModule],
  exports: [ NavigabilityComponent],
})
export class SharedModule {}
