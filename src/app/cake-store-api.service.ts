import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CakeStoreApiService {

  constructor(private http: HttpClient) { }

  getProdutos() {
    return this.http.get(`${environment.apiUrl}/produtos.json`);
  }

  getProduto(id) {
    return this.http.get(`${environment.apiUrl}/produtos.json/${id}`);
  }

}
