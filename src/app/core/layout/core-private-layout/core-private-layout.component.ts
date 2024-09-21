import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../material.module';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-core-private-layout',
  templateUrl: './core-private-layout.component.html',
  styleUrl: './core-private-layout.component.scss',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, SharedModule, MaterialModule, HeaderComponent],
})
export class CorePrivateLayoutComponent {

}
