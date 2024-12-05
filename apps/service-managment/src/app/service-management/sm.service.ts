import { HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../shared/services/http.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApisService {
  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpService) {}

  getServicesCancellation(
    params: { pagination: number; page: number}
  ): Observable<HttpEvent<{ Services: any[]; rowsCount: number }>> {
    const param = this.getParams(params);
    return this.http.get(`${this.baseUrl}services${param}`);
  }

  // getSectorsList<T>(url: string): Observable<HttpEvent<T>> {
  //   return this.http.get(`${this.baseUrl}${url}`).pipe(
  //     map((res: any) => {
  //       if (res && res.body && Array.isArray(res.body.data)) {
  //         res.body.data = res.body.data.map((item: any) => ({
  //           ...item,
  //           title: this.lang == 'ar' ? item.titleAr : item.titleEn,
  //         }));
  //         res.body.data.unshift({
  //           id: null,
  //           title: this.lang == 'ar' ? 'كل القطاعات' : 'All sectores',
  //         });
  //       }
  //       console.log(res, 'getSectorsList');
  //       return res;
  //     }),
  //     catchError((error: HttpErrorResponse) => {
  //       return throwError(() => new Error(error.message));
  //     })
  //   );
  // }
  private getParams<T extends object>(params: T): string {
    return (
      '?' +
      Object.keys(params)
        .map((key) => `${key}=${(params as any)[key]}`)
        .join('&')
    );
  }
}
