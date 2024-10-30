import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockHttpService {

  constructor(private http: HttpClient) { }

  get(url: string, param: {page: number, pageSize: number}): Observable<any> {
    return this.http.get<any>(url).pipe(
      map(data => {
        const start = (param.page - 1) * param.pageSize;
        const end = start + param.pageSize;
        return data.slice(start, end);
      })
    );
  }
}
