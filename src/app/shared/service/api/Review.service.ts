import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { ReviewDTORequest } from "../../model/request/ReviewDTORequest";

@Injectable({
    'providedIn': 'root'
})
export class ReviewService {
    private _httpClient = inject(HttpClient);

    public save(review: ReviewDTORequest): Observable<any> {
        return this._httpClient.post<any>(
            environment.urlBase + 'reviews/review',
            review
        );
    }

}