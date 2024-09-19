import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { ThemeHubConstant } from '../constants/ThemeHubConstant';
import { ThemeService } from '../service/api/Theme.service';
import { map, Observable } from 'rxjs';



export function validatorNotCaractereSpecial(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const text: any = ThemeHubConstant.NOT_ALLOWED_VALUES;
    const value = control.value;
    return text.test(value) ? { isError: true } : null;
  };
}

export function validaorPasswordMatch(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const newPassword = control.parent?.get('newPassword')?.value;
    const repiteNewPassword = control.parent?.get('repiteNewPassword')?.value;
    return newPassword !== repiteNewPassword ? { passwordMatch: true } : null;
  };
}


// export function validatorAsync(themeService: ThemeService): AsyncValidatorFn {
//   return (control: AbstractControl): Observable<ValidationErrors | null> => {
//     return themeService.existsByIsbn(control.value).pipe(  // ERA UN METODO CHE RITORNAVA UN BOOLEAN , DA MODIFICARE IN BASE A COSA RITORNA IL METODO.
//       map((data: boolean) => {
//         return data ? { isbnError: true } : null;
//       })
//     );
//   };
// }
