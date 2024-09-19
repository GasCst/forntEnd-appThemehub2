
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/core.routes').then((m) => m.coreRoutes),
  },
];


