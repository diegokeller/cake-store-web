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

  putProduto(produto): Observable<any> {
    return this.http.put(`${environment.apiUrl}/produtos/${produto.id}.json`, produto);
  }

  postProduto(produto): Observable<any> {
    return this.http.post(`${environment.apiUrl}/produtos.json`, produto);
  }

  getProduto(id): Observable<any> {
    return this.http.get(`${environment.apiUrl}/produtos/${id}.json`);
  }

  postPedido(pedido) {
    return this.http.post(`${environment.apiUrl}/pedidos.json`, pedido);
  }

  getPedidos(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/pedidos.json`);
  }

  getPedido(id): Observable<any> {
    return this.http.get(`${environment.apiUrl}/pedidos/${id}.json`);
  }
}
