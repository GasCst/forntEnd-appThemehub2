import { Component , EventEmitter, inject, Output} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/api/auth.service.ts.service';
import { MatDialog } from '@angular/material/dialog';
import { CartDialogComponent } from '../cart-dialog-component/cart-dialog-component.component';
import { MaterialModule } from '../../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [ MaterialModule,FormsModule,CommonModule , ReactiveFormsModule]
})
export class HeaderComponent {

  cartItemCount: number = 0;

  private _router: Router = inject(Router);

  constructor(private authService: AuthService,private dialog: MatDialog ) { }


  public goToTheme(): void {
    this._router.navigate(['theme-catalog/theme']);
  }

  public goToUser(): void {
    this._router.navigate(['theme-catalog/user']);
  }

  public goToUserSecurity(): void {
    this._router.navigate(['security/user']);
  }
  
  public goToRole(): void {
    this._router.navigate(['security/role']);
  }

  public goToCategory(): void {
    this._router.navigate(['theme-catalog/category']);
  }

  signOut() {
    this.authService.logout();
  }

  openCart() {
    const dialogRef = this.dialog.open(CartDialogComponent, {
      width: '400px', // Adjust as needed
      data: { cartItems: this.getCartItems() } // You'll need to implement getCartItems()
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle any actions after the dialog is closed, if necessary
        console.log('The cart dialog was closed', result);
      }
    });
  }

  private getCartItems() {
    // Implement this method to return the current items in the cart
    // For now, we'll return a dummy array
    return [
      { id: 1, name: 'Theme 1', price: 19.99 },
      { id: 2, name: 'Theme 2', price: 24.99 }
    ];
  }



  @Output() toggleSidenav = new EventEmitter<void>();

}
