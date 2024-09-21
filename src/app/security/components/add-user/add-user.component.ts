import { CommonModule } from '@angular/common';
import { User } from './../list-user/list-user.component';
import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SharedModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../material.module';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MaterialModule,
  ],
})
export class AddUserComponent {
  public formUser!: FormGroup;
  constructor(
    private _dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private _formBuilder: FormBuilder,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    //[FormGroup] = frmUser
    this.formUser = this._formBuilder.group({
      identifier: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      state: ['', [Validators.required]],
    });
  }
  ngAfterViewInit(): void {
    if (this.data) {
      this.onEditUser(this.data);
    }
    this.cdRef.detectChanges();
  }

  public onClose(): void {
    this._dialogRef.close(false);
  }

  public onSubmit(): void {
    this._dialogRef.close(this.formUser.value);
  }

  public onEditUser(row: User): void {
    this.formUser.setValue({
      identifier: row.identifier,
      fullName: row.fullName,
      email: row.email,
      state: row.state,
    });
  }

  public onDisabled(): boolean {
    return this.formUser.invalid;
  }
}
