import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';


const getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length == 0 || pageSize == 0) {
      return `0 di ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize;
    return `da ${startIndex + 1} a ${endIndex} - su ${length}`;
  };

export function customMatPaginatorIntl(){
    const matPaginatorInitl: MatPaginatorIntl= new MatPaginatorIntl();
    matPaginatorInitl.itemsPerPageLabel = 'Items per page';
    matPaginatorInitl.nextPageLabel = 'Next page';
    matPaginatorInitl.previousPageLabel = 'Previous page';
    matPaginatorInitl.firstPageLabel = 'First page';
    matPaginatorInitl.lastPageLabel = 'Last page';
    matPaginatorInitl.getRangeLabel = getRangeLabel;
    return matPaginatorInitl;
}

export function successNotification(message: string, snackBar: MatSnackBar){
  return snackBar.open(message, '', configSnackBar);
}

const configSnackBar: MatSnackBarConfig = {
  duration: 3000,
  horizontalPosition: 'center',
  verticalPosition: 'bottom',
}