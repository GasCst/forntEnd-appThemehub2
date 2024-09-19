import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ThemeDTO } from '../../../shared/model/response/ThemeDTO';
import { ThemeHubConstant } from '../../../shared/constants/ThemeHubConstant';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material.module';
import { UpperDirective } from '../../../shared/directive/input/upper.directive';
import { SharedModule } from '../../../shared/shared.module';
import { validatorNotCaractereSpecial } from '../../../shared/validators/Validator';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrl: './add-theme.component.scss',
  standalone: true,
  imports: [CommonModule, SharedModule,MaterialModule, ReactiveFormsModule, FormsModule, UpperDirective],
})

export class AddThemeComponent {

  private _dialogRef = inject(MatDialogRef<AddThemeComponent>);
  private data = inject(MAT_DIALOG_DATA);
  private formBuilder = inject(FormBuilder);
  private cdRef = inject(ChangeDetectorRef);


  private action!: string;
  public frmTheme!: FormGroup;

  ngOnInit(): void {
    this.frmTheme = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required, validatorNotCaractereSpecial()]],
      description: ['', Validators.required],
      preview_image: [''],
      demo_url: [''],
      category: [''],
      price: [''],
      author: [''],
      author_profile: [''],
      download_link: [''],
      state: [''],
    });
  }

  ngAfterViewInit(): void {
    if (this.data) {
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
    this.action = this.frmTheme.value.id ? ThemeHubConstant.ACTION_UPDATE : ThemeHubConstant.ACTION_ADD;

    this._dialogRef.close({ id: this.frmTheme.value.id, theme: this.frmTheme.value, action: this.action });
  }

  public onEdit(row: ThemeDTO): void {
    this.frmTheme.setValue({
      id: row.idtheme,
      name: row.name,
      description: row.description,
      preview_image: row.preview_image,
      demo_url: row.demo_url,
      category: row.category,
      price: row.price,
      author: row.author,
      author_profile: row.author_profile,
      download_link: row.download_link,
      state: row.state,
    });
  }

  public onDisabled(): boolean {
    return this.frmTheme.invalid;
  }
}
