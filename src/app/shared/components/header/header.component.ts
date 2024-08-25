import { Component , inject} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private _router: Router = inject(Router);

  constructor() { }

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
}
