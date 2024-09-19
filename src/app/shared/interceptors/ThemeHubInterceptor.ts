import { HttpErrorResponse, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { AlertService } from '../service/api/Alert.service';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ThemeHubConstant } from '../constants/ThemeHubConstant';

export function HttpErrorResponseInterceptor(
  request: HttpRequest<any>,
  next: HttpHandlerFn
) {
    const _alertService = inject(AlertService);

    const skipErrorAlert = request.headers.get('X-Skip-Error-Alert');

    return next(request).pipe(
        catchError((error: HttpErrorResponse) => {
            if (skipErrorAlert) {
                // Skip error handling if the header is present
                return throwError(error);
            }

            // Default error handling
            if (error.status === 404) {
                _alertService.notification(
                    'La risorsa non è disponibile',
                    ThemeHubConstant.VC_ERROR
                );
            }
            if (error.status === 500) {
                if (!request.url.includes('check/logged/admin') && !request.url.includes('check/logged/user')) {
                    _alertService.notification(
                        'Si è verificato un errore del server',
                        ThemeHubConstant.VC_ERROR
                    );
                }
            }
            return throwError(error);
        })
    );
}
