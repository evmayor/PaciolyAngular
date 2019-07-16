import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor( private http: HttpClient ) { }

  getAllplan(): Observable<any>{
    return this.http.get(this.baseUrl+'/milistab/educat/?q=4',
      {headers: this.httpHeaders});
    }

  getOneplan(id): Observable<any>{
    return this.http.get(this.baseUrl+'/milistab/educat/?q=' +id+ '',
      {headers: this.httpHeaders});
    }

  createLibroDiario(data): Observable<any>{
    const body = {
                  ccod_cue:data.ccod_cue ,ndebe:data.ndebe,nhaber:data.nhaber ,cglosa:data.cglosa,ccod_ori:'06',nasiento:data.nasiento
                  }
    return this.http.post(this.baseUrl+'/diario/' ,body,
      {headers: this.httpHeaders});
  }

}
