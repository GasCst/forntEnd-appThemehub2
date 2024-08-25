import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { SecurityLayoutComponent } from './layout/security-layout/security-layout.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';


@NgModule({
  declarations: [
    SecurityLayoutComponent,
    UserComponent,
    RoleComponent,
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule
  ],
  exports: [UserComponent, RoleComponent]
})
export class SecurityModule { }
