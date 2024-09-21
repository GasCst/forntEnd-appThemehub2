import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Category } from '../list-category/list-category.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material.module';
import { UpperDirective } from '../../../shared/directive/input/upper.directive';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss',
  standalone: true,
  imports: [CommonModule, SharedModule,MaterialModule, ReactiveFormsModule, FormsModule, UpperDirective],
})

export class AddCategoryComponent {

  
  public frmCategory!: FormGroup;


  constructor(
    private _dialogRef: MatDialogRef<AddCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Category,
    private formBuilder: FormBuilder,
    private cdRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.frmCategory = this.formBuilder.group({
      id:[''],
      name: ['', Validators.required],
      description: ['', Validators.required]
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
    this._dialogRef.close(this.frmCategory.value);
  }

  public onEdit(row: Category): void {
    this.frmCategory.setValue({
      id: row.id,
      name: row.name,
      description: row.description
    });
  }

  public onDisabled(): boolean {
    return this.frmCategory.invalid;
  }

}
