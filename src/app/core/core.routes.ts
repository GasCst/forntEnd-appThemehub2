import { Routes } from '@angular/router';
import { CorePublicLayoutComponent } from './layout/core-public-layout/core-public-layout.component';
import { CorePrivateLayoutComponent } from './layout/core-private-layout/core-private-layout.component';

export const coreRoutes: Routes = [
  {
    path: '',
    component: CorePublicLayoutComponent,
    loadChildren: () => import('../auth/auth.routes').then((m) => m.authRoutes),
  },

  // {
  //   path: 'customer',
  //   component: CustomerComponent,
  //   //canActivate: [() => inject(AuthGuard).canActivate('customer')]
  // },
  {
    path: 'theme-catalog',
    component: CorePrivateLayoutComponent,
    loadChildren: () =>
      import('../theme-catalog/theme-catalog.routes').then(
        (m) => m.themeCatalogRoutes
      ),
  },
  {
    path: 'report',
    component: CorePrivateLayoutComponent,
    loadChildren: () =>
      import('../report/report.routes').then((m) => m.reportRoutes),
  },
  {
    path: 'security',
    component: CorePrivateLayoutComponent,
    loadChildren: () =>
      import('../security/security.routes').then((m) => m.securityRoutes),
  },
];
