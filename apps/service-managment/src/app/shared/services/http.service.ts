import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

interface RequestOptions {
  headers?: HttpHeaders;
  params?: HttpParams;
  observe?: 'events';
  reportProgress?: boolean;
  responseType?: 'json';
}

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private http: HttpClient) {}

  private request<T>(
    method: string,
    url: string,
    body?: any,
    options: RequestOptions = {}
  ): Observable<HttpEvent<T>> {
    return this.http
      .request<T>(method, url, {
        body,
        observe: 'events',
        responseType: 'json',
        ...options,
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Error occurred:', error);
    let errorMessage = 'error';
    let errorDetails = '';
    if(error?.error?.errors.length){
      errorDetails = error?.error?.errors[0]?.details;
    }
    if (error.status === 401 ||error.status === 403 ) {
      errorMessage = 'unauthorized';
    } 
    else if (error.status === 404) {
      errorMessage = 'empty';
      errorDetails = ''
    }

    return throwError(() => ({
      message: errorMessage,
      details: errorDetails
    }));
  }

  get<T>(url: string, options?: RequestOptions): Observable<HttpEvent<T>> {
    return this.request<T>('GET', url, undefined, options);
  }

  post<T>(
    url: string,
    body: any,
    options?: RequestOptions
  ): Observable<HttpEvent<T>> {
    return this.request<T>('POST', url, body, options);
  }

  put<T>(
    url: string,
    body: any,
    options?: RequestOptions
  ): Observable<HttpEvent<T>> {
    return this.request<T>('PUT', url, body, options);
  }

  delete<T>(url: string, options?: RequestOptions): Observable<HttpEvent<T>> {
    return this.request<T>('DELETE', url, undefined, options);
  }

  option(url: string) {
    return this.http.options(url, {
      headers: {
        // Add any custom headers if necessary
        'Custom-Header': 'value',
      },
    });
  }
}
