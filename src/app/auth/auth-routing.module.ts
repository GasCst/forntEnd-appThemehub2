import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignOutComponent } from './pages/sign-out/sign-out.component';

const routes: Routes = [
  { path:'',
    component:AuthLayoutComponent,
    children:[
      {path:'sign-in',component:SignInComponent},
      {path:'', redirectTo:'sign-in', pathMatch:'full'},
      {path:'sign-out',component:SignOutComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { 
  constructor() {
    console.log('auth-routing.module MODULE Component initialized');
  }
}
