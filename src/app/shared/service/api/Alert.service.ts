import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  public question(
    tittle: string,
    subTitle: string,
    showConfirmButton: boolean,
    showCancelButton: boolean,
    btnConfirmText: string,
    btnCancelText: string,
    image = 'assets/icons/themehub.svg'
  ): Promise<any> {
    return new Promise((resolve) => {
      const swalPersonalizzato = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-confirmation mr-2',
          cancelButton: 'btn btn-cancel',
        },
        buttonsStyling: false,
      });
      swalPersonalizzato
        .fire({
          html: `<p>${tittle}.</p> `,
          imageUrl: image,
          text: subTitle,
          showConfirmButton: showConfirmButton,
          showCloseButton: false,
          showCancelButton: showCancelButton,
          focusConfirm: true,
          confirmButtonText: btnConfirmText,
          cancelButtonText: btnCancelText,
          allowOutsideClick: false,
          allowEscapeKey: false,
          width: 312,
        })
        .then((result) => {
          console.log(result);
          if (result.isConfirmed) {
            resolve(true);
          } else if (
            result.dismiss === Swal.DismissReason.cancel ||
            result.dismiss === Swal.DismissReason.close
          ) {
            resolve(false);
          }
        });
    });
  }

  public notification(title: string, icon: any = 'success') {
    const swalPersonalizzato = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-confirmation',
      },
      buttonsStyling: false,
    });
    swalPersonalizzato.fire({
      position: 'center',
      icon: icon,
      title: title,
      showConfirmButton: true,
    });
  }

  public loading(text: string): void {
    Swal.fire({
      showConfirmButton: false,
      showCloseButton: false,
      showCancelButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      footer: `<p>${text}</p>`,
      width: 312,
    });
    Swal.showLoading();
  }

  public close(): void {
    Swal.close();
  }
}
