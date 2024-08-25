import { ThemeCatalogLayoutComponent } from './layout/theme-catalog-layout/theme-catalog-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeComponent } from './pages/theme/theme.component';
import { UserComponent } from './pages/user/user.component';
import { CategoryComponent } from './pages/category/category.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeCatalogLayoutComponent,
    children: [
      { path: 'theme', component: ThemeComponent  , title: 'ThemeHub - theme' },
      { path: 'user', component: UserComponent , title: 'ThemeHub - user'  },
      { path: 'category', component: CategoryComponent , title: 'ThemeHub - category'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeCatalogRoutingModule { }
