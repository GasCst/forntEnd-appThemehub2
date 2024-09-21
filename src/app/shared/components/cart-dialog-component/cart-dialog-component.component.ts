import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-dialog-component',
  templateUrl: './cart-dialog-component.component.html',
  styleUrl: './cart-dialog-component.component.scss',
  standalone: true,
  imports: [MaterialModule,CommonModule,FormsModule,ReactiveFormsModule],
 
})
export class CartDialogComponent{
  constructor(
    public dialogRef: MatDialogRef<CartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { cartItems: any[] }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCheckout(): void {
    // Implement checkout logic here
    console.log('Proceeding to checkout');
    this.dialogRef.close('checkout');
  }

}
