import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  produtos: any[] = [];
  produtoAdicionadoSubject = new Subject<any>();

  constructor() {
    this.getItens().subscribe(itens => this.produtos = itens);
  }

  adicionarProduto(produto) {
    let adicionou = false;
    this.produtos.forEach(item => {
      if (produto.id === item.id) {
        produto.quantidade += 1;
        adicionou = true;
      }
    });
    if (!adicionou) {
      produto.quantidade = 1;
      this.produtos.push(produto);
      this.produtoAdicionadoSubject.next(this.produtos.length);
    }
    localStorage.setItem('carrinho', JSON.stringify(this.produtos));
  }

  getQuantidadeItens() {
    return this.produtoAdicionadoSubject.asObservable();
  }

  getQuantidadeItensAgora() {
    return this.produtos.length;
  }

  getItens(): Observable<any> {
    return of(JSON.parse(localStorage.getItem('carrinho')));
  }
}
