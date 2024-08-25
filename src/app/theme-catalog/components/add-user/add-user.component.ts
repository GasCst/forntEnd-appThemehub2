import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../list-user/list-user.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})

export class AddUserComponent {

  public frmUser!: FormGroup;


  constructor(
    private _dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private formBuilder: FormBuilder,
    private cdRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.frmUser = this.formBuilder.group({
      id:[''],
      username: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(8)]],
      firstName: [''],
      lastName: [''],
      company: [''],
      state: ['']
    });
  }

  ngAfterViewInit(): void {
    if ( this.data ){
      this.onEdit(this.data);
    }
    this.cdRef.detectChanges();
  }


  public onClose(): void {
    this._dialogRef.close(false);
  }


  public onSend(): void {
    this._dialogRef.close({ username: 'test message' });
  }

  public onSubmit(): void {
    this._dialogRef.close(this.frmUser.value);
  }

  public onEdit(row: User): void {
    this.frmUser.setValue({
      id: row.id,
      username: row.username,
      email: row.email,
      password: row.password,
      firstName: row.firstName,
      lastName: row.lastName,
      company: row.company,
      state: row.state
    });
  }

  public onDisabled(): boolean {
    return this.frmUser.invalid;
  }
}
