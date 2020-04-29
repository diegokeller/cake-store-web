import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CakeStoreApiService {

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/produtos.json`);
  }

  getProduto(id): Observable<any> {
    return this.http.get(`${environment.apiUrl}/produtos/${id}.json`);
  }

}
