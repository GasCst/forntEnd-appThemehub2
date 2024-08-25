import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from './icons/icon.module';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    MaterialModule,
  ],
  exports:[HeaderComponent],
})
export class SharedModule { }
