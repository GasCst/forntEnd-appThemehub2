import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private access_token?: string;
  private refreshToken?: string;
  private apiBaseUrl = environment.urlBase; // Url base backend
  private username!: string;
  private password!: string;

  constructor(private http: HttpClient, private router: Router) {}



  login(username: string, password: string): Observable<boolean> {
    this.username = username;
    this.password = password;
    return this.getAccessToken().pipe(
      map(token => {
        if (token) {
          this.access_token = token;
          return true;
        }
        return false;
      }),
      catchError(error => {
        console.error('Error during login:', error);
        return of(false);
      })
    );
  }

  public logout(): void {
    const url = `${this.apiBaseUrl}check/logout?username=${encodeURIComponent(this.username)}&password=${encodeURIComponent(this.password)}`;
    this.http.get(url).pipe(
      catchError(error => {
        console.error('Error during logout:', error);
        return of(null);
      })
    ).subscribe(() => {
      this.access_token="";
      this.refreshToken="";
      this.router.navigate(['/sign-in']);
    });
  }





  public adminCheck(): Observable<boolean> {
    const url = `${this.apiBaseUrl}check/logged/admin`;

    return this.getAuthHeaders().pipe(
        switchMap(headers => this.http.get<boolean>(url, { headers })),
        catchError(error => {
            // Handle the error and return a safe value
            console.error('Error during admin check:', error);
            return of(false);
        })
    );
}

public customerCheck(): Observable<boolean> {
    const url = `${this.apiBaseUrl}check/logged/user`;

    return this.getAuthHeaders().pipe(
        switchMap(headers => this.http.get<boolean>(url, { headers })),
        catchError(error => {
            // Handle the error and return a safe value
            console.error('Error during customer check:', error);
            return of(false);
        })
    );
}



  private getAccessToken(): Observable<string | null> {
    const url = `${this.apiBaseUrl}check/getToken?username=${encodeURIComponent(this.username)}&password=${encodeURIComponent(this.password)}`;
    return this.http.get(url, { responseType: 'text' })
      .pipe(
        map(token => {
          console.log('ACCESS_Token received:', token);
          if (token) {
            return token;
          }
          return null;
        }),
        catchError(error => {
          console.error('Error getting access token:', error);
          return of(null);
        })
      );
  }




  private getAuthHeaders(): Observable<HttpHeaders> {
    if (this.access_token) {
      return of(new HttpHeaders({
        'Authorization': `Bearer ${this.access_token}`
      }));
    } else {
      console.error('No access token available');
      return of(new HttpHeaders());
    }
  }



}