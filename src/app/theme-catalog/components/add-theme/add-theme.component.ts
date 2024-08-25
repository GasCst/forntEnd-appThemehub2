import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Theme } from '../list-theme/list-theme.component';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrl: './add-theme.component.scss'
})

export class AddThemeComponent {

  public frmTheme!: FormGroup;


  constructor(
    private _dialogRef: MatDialogRef<AddThemeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Theme,
    private formBuilder: FormBuilder,
    private cdRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.frmTheme = this.formBuilder.group({
      id:[''],
      description: ['',[Validators.required]]
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
    this._dialogRef.close({ description: 'test message' });
  }

  public onSubmit(): void {
    this._dialogRef.close(this.frmTheme.value);
  }

  public onEdit(row: Theme): void {
    this.frmTheme.setValue({
      id: row.id,
      description: row.description
    });
  }

  public onDisabled(): boolean {
    return this.frmTheme.invalid;
  }
}
