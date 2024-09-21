import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeHubConstant } from '../../../shared/constants/ThemeHubConstant';
import { MaterialModule } from '../../../material.module';
import { SharedModule } from '../../../shared/shared.module';
import { validaorPasswordMatch } from '../../../shared/validators/Validator';
import { FormBuilder,FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';



@Component({
  selector: 'app-change-password-form',
  standalone: true,
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, SharedModule],
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss'],
})
export class ChangePasswordFormComponent {
  private _formBuilder = inject(FormBuilder);

  public frmChangePassword!: FormGroup;
  public hide = true;
  public title!: string;
  public subtitle!: string;
  public namePage!: string;
  ngOnInit(): void {
    this.title = ThemeHubConstant.TITLE_MODULE_SECURITY;
    this.namePage = ThemeHubConstant.TITLE_PAGE_CHANGE_PASSWORD;
    this.subtitle = ThemeHubConstant.TITLE_PAGE_CHANGE_PASSWORD;

    // [formGroup]="frmChangePassword" autocomplete="off"
    this.frmChangePassword = this._formBuilder.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      repiteNewPassword: [
        '',
        [Validators.required, Validators.minLength(8), validaorPasswordMatch()],
      ],
    });
  }

  public getIcon(): string {
    return this.hide ? 'visibility' : 'visibility_off';
  }

  public blDisabledSend(): boolean {
    return this.frmChangePassword.invalid;
  }
}
