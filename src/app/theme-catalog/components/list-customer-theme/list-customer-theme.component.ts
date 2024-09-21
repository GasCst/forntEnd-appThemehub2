import { ThemePurchaseDTORequest } from './../../../shared/model/request/ThemePurchaseDTORequest';
import { SharedModule } from './../../../shared/shared.module';
import { Component, inject, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from '../../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FirstUpperPipe } from '../../../shared/pipe/first-upper.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { map, merge, startWith, Subscription, switchMap } from 'rxjs';
import { ThemeDTO } from '../../../shared/model/response/ThemeDTO';
import { MatDialog } from '@angular/material/dialog';
import { ThemeService } from '../../../shared/service/api/Theme.service';
import { ReviewService } from '../../../shared/service/api/Review.service';
import { AlertService } from '../../../shared/service/api/Alert.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { PageDTO } from '../../../shared/model/response/PageDTO';
import { HttpErrorResponse } from '@angular/common/http';
import { successNotification } from '../../../shared/config/ThemeHubConfig';
import { ThemePurchaseService } from '../../../shared/service/api/ThemePurchase.service';
import { ThemesInPurchaseDTO } from '../../../shared/model/response/ThemesInPurchaseDTO';

@Component({
  selector: 'app-list-customer-theme',
  templateUrl: './list-customer-theme.component.html',
  styleUrl: './list-customer-theme.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FirstUpperPipe,
    FlexLayoutModule,
  ],
})
export class ListCustomerThemeComponent {
  
  protected subscription: Array<Subscription> = new Array();

  public lstTheme: ThemeDTO[] = [];
  private _dialog = inject(MatDialog);
  private _themeService = inject(ThemeService);
  private _reviewService = inject(ReviewService);
  private _purchaseService = inject(ThemePurchaseService);
  private _snackBar = inject(MatSnackBar);
  private _alertService = inject(AlertService);
  public reviewsNumber?: number;

  public search!: string;
  public Theme!: ThemeDTO;
  public title!: string;

  public ThemePurchase!: ThemePurchaseDTORequest;
  public ThemesInPurchase!: ThemesInPurchaseDTO;

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




  calculateAverageRating(theme: ThemeDTO): number {
    if (!theme.reviewList || theme.reviewList.length === 0) {
      return 0;  // Nessuna recensione, ritorna 0
    }
    const sum = theme.reviewList.reduce((acc, review) => acc + review.rating!, 0);
    return sum / theme.reviewList.length;
  }

  addToCart(theme: any) {
    // Implement add to cart functionality
    console.log('Adding to cart:', theme.name);
    this._snackBar.open(`${theme.name} added to cart`, 'Close', {
      duration: 2000,
    });
  }

  buyNow(theme: any) {

    this.ThemePurchase.buyerId = this.#
    this.ThemePurchase.themeId = theme.idtheme;

    this.ThemesInPurchase.id = theme.idtheme;
    this.ThemesInPurchase.quantity = 1;
    this.ThemesInPurchase.theme = theme;

    this.ThemePurchase.themesInPurchase = [this.ThemesInPurchase]

    
    
    
    this._purchaseService.SavePurchaseTheme(theme);


    console.log('Buying now:', theme.name);
    this._snackBar.open(`Purchasing ${theme.name}`, 'Close', {
      duration: 2000,
    });
    // Redirect to checkout or open a checkout modal
  }
}
