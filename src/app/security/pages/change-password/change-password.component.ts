import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordFormComponent } from '../../components/change-password-form/change-password-form.component';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule, ChangePasswordFormComponent],
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {}
