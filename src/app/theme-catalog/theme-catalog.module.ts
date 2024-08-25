import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeCatalogRoutingModule } from './theme-catalog-routing.module';
import { ThemeCatalogLayoutComponent } from './layout/theme-catalog-layout/theme-catalog-layout.component';
import { ThemeComponent } from './pages/theme/theme.component';
import { UserComponent } from './pages/user/user.component';
import { CategoryComponent } from './pages/category/category.component';
import { ListThemeComponent } from './components/list-theme/list-theme.component';
import { AddThemeComponent } from './components/add-theme/add-theme.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ListCategoryComponent } from './components/list-category/list-category.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { ListUserComponent } from './components/list-user/list-user.component';


@NgModule({
  declarations: [
    ThemeCatalogLayoutComponent,
    ThemeComponent,
    UserComponent,
    CategoryComponent,
    ListThemeComponent,
    AddThemeComponent,
    ListUserComponent,
    AddUserComponent,
    ListCategoryComponent,
    AddCategoryComponent
  ],
  imports: [
    CommonModule,
    ThemeCatalogRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ]
})
export class ThemeCatalogModule { }
