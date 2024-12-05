import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MockHttpService {
  constructor(private http: HttpClient) {}

  get(
    url: string,
    param: {
      page: number;
      pageSize: number;
      name?: string;
      status?: 'active' | 'inactive';
      type?: string;
    }
  ): Observable<any> {
    return this.http.get<any>(url).pipe(
      map((data) => {
        const start = (param.page - 1) * param.pageSize;
        const end = start + param.pageSize;
        const filteredData = data.filter(
          (item: any) =>
            (param.name
              ? item.serviceName
                  .toLowerCase()
                  .includes(param.name.toLowerCase()) ||
                item.code.toLowerCase().includes(param.name.toLowerCase())
              : true) &&
            (param.status ? item.status === param.status : true) &&
            (param.type ? item.type === param.type : true)
        );
        return {data: filteredData.slice(start, end), totalRecords: filteredData.length};
      })
    );
  }

  getById(url: string, id: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map((data) => {
        return data.find((item: any) => item.id === id);
      })
    );
  }
}
