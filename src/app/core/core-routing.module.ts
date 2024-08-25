import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorePublicLayoutComponent } from './layout/core-public-layout/core-public-layout.component';
import { CorePrivateLayoutComponent } from './layout/core-private-layout/core-private-layout.component';

const routes: Routes = [
  {
    path: '',
    component: CorePublicLayoutComponent,
    loadChildren: () =>
      import('./../auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'theme-catalog',
    component: CorePrivateLayoutComponent,
    loadChildren: () =>
      import('./../theme-catalog/theme-catalog.module').then(m => m.ThemeCatalogModule),
  },
  {
    path: 'report',
    component: CorePrivateLayoutComponent,
    loadChildren: () =>
      import('./../report/report.module').then(m => m.ReportModule),
  },
  {
    path: 'security',
    component: CorePrivateLayoutComponent,
    loadChildren: () =>
      import('./../security/security.module').then(m => m.SecurityModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
