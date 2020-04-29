import { Component, OnInit } from '@angular/core';
import { CakeStoreApiService } from '../../servicos/cake-store-api.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html'
})
export class ListaProdutosComponent implements OnInit {

  produtos: any;

  constructor(private api: CakeStoreApiService) {

  }

  ngOnInit(): void {
    this.api.getProdutos().subscribe(response => this.produtos = response.produtos);
  }

}
