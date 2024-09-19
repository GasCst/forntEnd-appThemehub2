import { ThemeDTO } from './../../../shared/model/response/ThemeDTO';
import { AlertService } from './../../../shared/service/api/Alert.service';
import { ThemeService } from './../../../shared/service/api/Theme.service';
import { Component, inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddThemeComponent } from '../add-theme/add-theme.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { map,merge,startWith,Subscription,switchMap} from 'rxjs';
import { ThemeDTORequest } from '../../../shared/model/request/ThemeDTORequest';
import { HttpErrorResponse } from '@angular/common/http';
import { ThemeHubConstant } from '../../../shared/constants/ThemeHubConstant';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material.module';
import { FirstUpperPipe } from '../../../shared/pipe/first-upper.pipe';
import { PageDTO } from '../../../shared/model/response/PageDTO';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBar } from '@angular/material/snack-bar';
import { successNotification } from '../../../shared/config/ThemeHubConfig';
import { ReviewDTORequest } from '../../../shared/model/request/ReviewDTORequest';
import { ReviewService } from '../../../shared/service/api/Review.service';
import { ReviewDTO } from '../../../shared/model/response/ReviewDTO';

@Component({
  selector: 'app-list-theme',
  templateUrl: './list-theme.component.html',
  styleUrl: './list-theme.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FirstUpperPipe,
    FlexLayoutModule,
  ],
})
export class ListThemeComponent {
  protected subscription: Array<Subscription> = new Array();

  public lstTheme: ThemeDTO[] = [];
  private _dialog = inject(MatDialog);
  private _themeService = inject(ThemeService);
  private _reviewService = inject(ReviewService);
  private _snackBar = inject(MatSnackBar);
  private _alertService = inject(AlertService);
  public reviewsNumber?: number;

  public search!: string;
  public Theme!: ThemeDTO;
  public title!: string;

  public totalElements?: number;
  @ViewChild(MatSort) matSort!: MatSort;
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;


  ngOnInit(): void {
    this.title = 'Catalogo Temi';
  }

  ngAfterViewInit(): void {
    this.matSort.sortChange.subscribe(() => (this.matPaginator.pageIndex = 0));

    merge(this.matSort.sortChange, this.matPaginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.loading('Loading...');

          // Determine sort field and order based on matSort
          const sortField = this.matSort.active || 'idtheme'; // Default field
          const sortOrder = this.matSort.direction === 'asc' ? '0' : '1'; // Assuming '1' for ascending, '-1' for descending

          return this._themeService.findByName(
            this.search ? this.search : '',
            this.matPaginator.pageIndex,
            this.matPaginator.pageSize,
            sortField,
            sortOrder
          );
        }),
        map((data: PageDTO<ThemeDTO>) => {
          this.totalElements = data.totalElements;
          this._alertService.close();
          return data.content;
        })
      )
      .subscribe((data: any) => (this.lstTheme = data));
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  public onCreate(row?: ThemeDTO): void {
    const _dialogConfig = new MatDialogConfig();
    _dialogConfig.disableClose = true;
    _dialogConfig.autoFocus = true;
    _dialogConfig.width = '50%';
    _dialogConfig.data = row;
    const _dialogRef = this._dialog.open(AddThemeComponent, _dialogConfig);
    _dialogRef.afterClosed().subscribe((rpta) => {
      if (rpta.action === ThemeHubConstant.ACTION_UPDATE) {
        this.update(rpta.id, rpta.theme);
      } else if (rpta.action === ThemeHubConstant.ACTION_ADD) {
        this.question(rpta.theme);
        //this.save(rpta.theme);
      }
    });
  }

  public findByName(name: string, page: number, size: number): void {
    this.loading('Loading...');
    this.subscription.push(
      this._themeService
        .findByName(name, page, size)
        .pipe(
          map((data) => {
            this.totalElements = data.totalElements;
            this.matPaginator.pageIndex = data.number;
            this.matPaginator.pageSize = data.size;
            this._alertService.close();
            return data.content;
          })
        )
        .subscribe((data: any) => (this.lstTheme = data))
    );
  }

  public onSearch(event?: any): void {
    if (event.key === 'Enter' || event.keyCode === 'Enter') {
      this.findByName(this.search, 0, 5);
    }
  }

  public onEraser(): void {
    this.onClearTotalElement();
    this.onClearSearch();
    this.onclearLstTheme();
    this.findByName('', 0, 5);
  }

  public onClearSearch(): void {
    this.search = '';
  }
  public onclearLstTheme(): void {
    this.lstTheme = [];
  }

  public onClearTotalElement(): void {
    this.totalElements = 0;
  }

  public save(theme: ThemeDTORequest): void {
    this.subscription.push(
      this._themeService.save(theme).subscribe(
        (data: any) => {
          this.findById(data.id);
          this._alertService.notification(
            'Salvato correttamente',
            ThemeHubConstant.VC_SUCCESS
          );
        },
        (error: HttpErrorResponse) => {
          if (error.status === 422) {
            this._alertService.notification(
              'Il tema inserito è gia esistente',
              ThemeHubConstant.VC_ERROR
            );
          }
        }
      )
    );
  }

  public update(id: number, theme: ThemeDTORequest): void {
    this.subscription.push(
      this._themeService.update(id, theme).subscribe(
        (data: any) => {
          this.findById(data.id);
          this._alertService.notification(
            'Salvato correttamente',
            ThemeHubConstant.VC_SUCCESS
          );
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  public findById(id: number): void {
    this.onclearLstTheme();
    this.subscription.push(
      this._themeService
        .getThemeByiD(id)
        .pipe(
          map((data: ThemeDTO) => {
            let lstTheme: ThemeDTO[] = [];
            lstTheme.push(data);
            this.totalElements = lstTheme.length;
            return lstTheme;
          })
        )
        .subscribe(
          (data: any) => {
            this.lstTheme = data;
          },
          (error: HttpErrorResponse) => {
            console.log(error);
          }
        )
    );
  }

  public success(message: string): void {
    successNotification(message, this._snackBar);
  }

  public loading(text: string): void {
    this._alertService.loading(text);
  }

  public question(response: any): void {
    this._alertService
      .question('vuoi registrare questo Tema', '', true, true, 'Si', 'No')
      .then((data: boolean) => {
        if (data) {
          this.save(response);
        }
      });
  }

  public onDelete(idtheme: any): void {
    this._themeService.delete(idtheme).subscribe((data: any) => {
      this._alertService.notification(
        'Tema eliminato con successo',
        ThemeHubConstant.VC_SUCCESS
      );
      setTimeout(() => {
        this.onEraser();
      }, 2000);
    });
  }

  public confirmationDelete(row: ThemeDTO): void {
    this._alertService
      .question(
        'Sei sicuro di voler eliminare questo Tema?',
        'Non puoi tornare indietro',
        true,
        true,
        'Si',
        'No'
      )
      .then((data: boolean) => {
        if (data) {
          this.onDelete(row.idtheme);
          this._alertService.notification(
            'Eliminato con successo',
            ThemeHubConstant.VC_SUCCESS
          );
        }
      });
  }

  public saveReview(review: ReviewDTORequest): void {
    this.subscription.push(
      this._reviewService.save(review).subscribe(
        (data: any) => {
          this._alertService.notification(
            'Salvata correttamente',
            ThemeHubConstant.VC_SUCCESS
          );
        },
        (error: HttpErrorResponse) => {
          if (error.status === 422) {
            this._alertService.notification(
              'La Recensione inserita è gia esistente',
              ThemeHubConstant.VC_ERROR
            );
          }
        }
      )
    );
  }


  calculateAverageRating(theme: ThemeDTO): number {
    if (!theme.reviewList || theme.reviewList.length === 0) {
      return 0;  // Nessuna recensione, ritorna 0
    }
    const sum = theme.reviewList.reduce((acc, review) => acc + review.rating!, 0);
    return sum / theme.reviewList.length;
  }
  




}
