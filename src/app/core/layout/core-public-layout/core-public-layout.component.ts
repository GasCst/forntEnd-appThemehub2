import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../material.module';

@Component({
  selector: 'app-core-public-layout',
  templateUrl: './core-public-layout.component.html',
  styleUrl: './core-public-layout.component.scss',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, SharedModule, MaterialModule],
})
export class CorePublicLayoutComponent {

}
