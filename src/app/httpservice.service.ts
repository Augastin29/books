import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  private url = 'http://localhost:8080'


  constructor(private httpclint: HttpClient) { }
  getFun(endpoint: string): Observable<any> {
    return this.httpclint.get(`${this.url}`)
  }
  postFun(endpoint: string, data: any): Observable<any> {
    return this.httpclint.post(`${this.url}/${endpoint}`, data)
  }
}
