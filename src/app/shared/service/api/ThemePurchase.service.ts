import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ThemePurchaseDTORequest } from '../../model/request/ThemePurchaseDTORequest';



@Injectable({
  providedIn: 'root'
})
export class ThemePurchaseService {
  private apiUrl = 'http://localhost:8081/v1/app-themehub/purchases/purchase';

  constructor(private http: HttpClient) {}

  SavePurchaseTheme(themeData: ThemePurchaseDTORequest): Observable<any> {
    return this.http.post<any>(this.apiUrl, themeData);
  }

}