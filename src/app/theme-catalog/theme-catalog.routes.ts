import { ThemeCatalogLayoutComponent } from './layout/theme-catalog-layout/theme-catalog-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeComponent } from './pages/theme/theme.component';
import { UserComponent } from './pages/user/user.component';
import { CategoryComponent } from './pages/category/category.component';
import { CustomerComponentComponent } from './pages/customer/customer-component.component';


export const themeCatalogRoutes: Routes = [
  {
    path: '',
    component: ThemeCatalogLayoutComponent,
    children: [
      { path: 'Admin-Dashboard', component: ThemeComponent  , title: 'ThemeHub - admin' },
      { path: 'Customer-Dashboard', component: CustomerComponentComponent  , title: 'ThemeHub - customer' },
      { path: 'user', component: UserComponent , title: 'ThemeHub - user'  },
      { path: 'category', component: CategoryComponent , title: 'ThemeHub - category'},
    ]
  }
];

