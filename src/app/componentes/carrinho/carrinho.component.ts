import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/servicos/carrinho.service';
import { CakeStoreApiService } from 'src/app/servicos/cake-store-api.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html'
})
export class CarrinhoComponent implements OnInit {

  itens: any[];

  constructor(
    private carrinho: CarrinhoService,
    private api: CakeStoreApiService
  ) { }

  ngOnInit(): void {
    this.carrinho.getItens().subscribe(itens => this.itens = itens);
  }

  get total(): number {
    return this.itens
      .map(item => item.quantidade * item.preco)
      .reduce((acc, val) => acc + val);
  }

  aumentar(item) {
    this.carrinho.adicionarProduto(item);
  }

  diminuir(item) {
    this.carrinho.diminuirQuantidade(item);
  }

  enviar() {
    const pedido = {
      data: new Date(),
      itens: this.itens.map((item) => {
        return {
          id_produto: item.id,
          quantidade: item.quantidade
        };
      })
    };
    this.api.postPedido(pedido).subscribe(result => {
      if (result) {
        window.alert('Pedido enviado com sucesso');
        this.carrinho.limpar();
      }
    });
  }

  get vazio() {
    return !this.itens || this.itens?.length === 0;
  }

}
