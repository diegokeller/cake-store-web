import { Component, OnInit } from '@angular/core';
import { CakeStoreApiService } from 'src/app/servicos/cake-store-api.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html'
})
export class ListaPedidosComponent implements OnInit {

  pedidos: any[];

  constructor(
    private api: CakeStoreApiService
  ) { }

  ngOnInit(): void {
    this.api.getPedidos().subscribe(result => this.pedidos = result.pedidos);
  }

  get temPedidos() {
    return this.pedidos && this.pedidos.length > 0;
  }

}
