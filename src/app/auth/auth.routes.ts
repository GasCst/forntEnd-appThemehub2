import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';


export const authRoutes: Routes = [
  { path:'',
    component:AuthLayoutComponent,
    children:[
      {path:'sign-in',component:SignInComponent},
      {path:'', redirectTo:'sign-in', pathMatch:'full'}
    ]
  }
];


