import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../material.module';
import { AuthService } from '../../../shared/service/api/auth.service.ts.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SignInComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {
    console.log('themeHub constructor -> {}');
  }

  onLogin() {
    try {
      this.authService.login(this.username, this.password).subscribe(
        (success) => {
          if (success) {
            try {
              this.authService.adminCheck().subscribe(
                (isAdmin) => {
                  if (isAdmin) {
                    if (
                      confirm(
                        'You have admin privileges. Do you want to go to the admin dashboard?'
                      )
                    ) {
                      this.router.navigate(['/theme-catalog/Admin-Dashboard']);
                    } else {
                      this.router.navigate(['/theme-catalog/Customer-Dashboard']);
                    }
                  } else {
                    try {
                      this.authService.customerCheck().subscribe(
                        (isCustomer) => {
                          if (isCustomer) {
                            this.router.navigate(['/theme-catalog/Customer-Dashboard']);
                          } else {
                            console.log('User is neither admin nor customer');
                            this.router.navigate(['/sign-in']);
                          }
                        },
                        (error) => {
                          console.log('Error during customer check:', error);
                          this.router.navigate(['/sign-in']);
                        }
                      );
                    } catch (customerError) {
                      console.log(
                        'Error occurred during customer check:',
                        customerError
                      );
                      this.router.navigate(['/sign-in']);
                    }
                  }
                },
                (error) => {
                  console.log('Error during admin check:', error);
                  this.router.navigate(['/sign-in']);
                }
              );
            } catch (adminError) {
              console.log('Error occurred during admin check:', adminError);
              this.router.navigate(['/sign-in']);
            }
          } else {
            alert('Login failed');
          }
        },
        (error) => {
          console.log('Login error:', error);
          alert('Login failed. Please try again.');
        }
      );
    } catch (loginError) {
      console.log('Unexpected error during login:', loginError);
      alert('An unexpected error occurred. Please try again.');
    }
  }
}
