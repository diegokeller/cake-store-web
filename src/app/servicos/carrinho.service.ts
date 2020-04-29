import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  produtos: any[] = [];
  produtoAdicionadoSubject = new Subject<any>();

  constructor() { }

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
    console.log(this.produtos);
  }

  getQuantidadeItens() {
    return this.produtoAdicionadoSubject.asObservable();
  }
}
