import { Injectable } from '@angular/core';
import { Subject, Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  produtos: any[] = [];
  produtoAdicionadoSubject = new BehaviorSubject<any>(0);
  produtosSubject = new BehaviorSubject<any>([]);

  constructor() {
    this.produtos = JSON.parse(localStorage.getItem('carrinho'));
    this.produtosSubject.next(this.produtos);
    this.produtoAdicionadoSubject.next(this.produtos.length);
  }

  adicionarProduto(produto) {
    let adicionou = false;
    this.produtos.forEach(item => {
      if (produto.id === item.id) {
        item.quantidade += 1;
        adicionou = true;
      }
    });
    if (!adicionou) {
      produto.quantidade = 1;
      this.produtos.push(produto);
      this.produtoAdicionadoSubject.next(this.produtos.length);
    }
    localStorage.setItem('carrinho', JSON.stringify(this.produtos));
    this.produtosSubject.next(this.produtos);
  }

  diminuirQuantidade(produto) {
    let removeu = false;
    this.produtos.forEach(item => {
      if (produto.id === item.id) {
        item.quantidade -= 1;
        if (item.quantidade === 0) {
          removeu = true;
        }
      }
    });
    if (removeu) {
      const i = this.produtos.findIndex(item => item.id === produto.id);
      this.produtos.splice(i, 1);
      this.produtoAdicionadoSubject.next(this.produtos.length);
    }
    localStorage.setItem('carrinho', JSON.stringify(this.produtos));
    this.produtosSubject.next(this.produtos);
  }

  getQuantidadeItens() {
    return this.produtoAdicionadoSubject.asObservable();
  }

  getItens(): Observable<any> {
    return this.produtosSubject.asObservable();
  }

  limpar() {
    this.produtos = [];
    localStorage.setItem('carrinho', JSON.stringify(this.produtos));
    this.produtosSubject.next(this.produtos);
    this.produtoAdicionadoSubject.next(0);
  }
}
