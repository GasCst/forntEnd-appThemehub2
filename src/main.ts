import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { customMatPaginatorIntl } from './app/shared/config/ThemeHubConfig';
import { HttpErrorResponseInterceptor } from './app/shared/interceptors/ThemeHubInterceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    importProvidersFrom(
      FlexLayoutModule,
      BrowserAnimationsModule
    ),
    provideHttpClient( withInterceptors([HttpErrorResponseInterceptor])),
    { provide: MatPaginatorIntl, useValue: customMatPaginatorIntl() },
  ],
});
