import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityLayoutComponent } from './layout/security-layout/security-layout.component';
import { ThemeComponent } from '../theme-catalog/pages/theme/theme.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  {
    path: '',
    component: SecurityLayoutComponent,
    children: [
      { path: 'user', component: UserComponent },
      { path: 'role', component: RoleComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
