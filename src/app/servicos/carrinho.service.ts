import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  produtos: any[] = [];

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
    }
    console.log(this.produtos);
  }
}
