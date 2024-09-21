import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { ThemeDTORequest } from "../../model/request/ThemeDTORequest";
import { PageDTO } from "../../model/response/PageDTO";
import { ThemeDTO } from "../../model/response/ThemeDTO";

@Injectable({
    'providedIn': 'root'
})
export class ThemeService {
    private _httpClient = inject(HttpClient);

    public findByName(name: string, page: number, size: number, field: string = 'idtheme', order: string = '1'): Observable<PageDTO<ThemeDTO>> {
        let queryParams = new HttpParams()
            .set('name', name)
            .set('page', page)
            .set('size', size)
            .set('field', field)
            .set('order', order);
    
        return this._httpClient.get<PageDTO<ThemeDTO>>(
            environment.urlBase + 'themes/theme/findByName', { params: queryParams }
        );
    }
    

    public save(theme: ThemeDTORequest): Observable<any> {
        return this._httpClient.post<any>(
            environment.urlBase + 'themes/theme',
            theme
        );
    }

    //crea il metodo update
    public update(id:number ,theme: ThemeDTORequest): Observable<any> {
        return this._httpClient.put<any>(
            environment.urlBase + 'themes/theme/' + id,
            theme
        );
    }

    public getThemeByiD(id: number): Observable<ThemeDTO> {
        return this._httpClient.get<any>(
            environment.urlBase + 'themes/theme/' + id
        );
    }

    public delete(id : number): Observable<any> {
        return this._httpClient.delete<any>(
            environment.urlBase + 'themes/theme/' + id
        );
    }

}