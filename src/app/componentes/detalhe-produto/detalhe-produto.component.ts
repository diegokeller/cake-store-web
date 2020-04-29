import { Component, OnInit } from '@angular/core';
import { CakeStoreApiService } from '../../servicos/cake-store-api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CarrinhoService } from 'src/app/servicos/carrinho.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html'
})
export class DetalheProdutoComponent implements OnInit {

  produto: any;

  constructor(
    private route: ActivatedRoute,
    private api: CakeStoreApiService,
    private carrinho: CarrinhoService
  ) {

  }

  ngOnInit(): void {
    this.api.getProduto(this.route.snapshot.params.id)
      .subscribe(response => this.produto = response.produto);
  }

  adicionar(produto) {
    this.carrinho.adicionarProduto(produto);
  }

}
