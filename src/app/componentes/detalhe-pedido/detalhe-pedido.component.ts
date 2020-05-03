import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CakeStoreApiService } from 'src/app/servicos/cake-store-api.service';

@Component({
  selector: 'app-detalhe-pedido',
  templateUrl: './detalhe-pedido.component.html'
})
export class DetalhePedidoComponent implements OnInit {

  pedido: any;

  constructor(
    private route: ActivatedRoute,
    private api: CakeStoreApiService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.api.getPedido(id).subscribe(pedido => this.pedido = pedido.pedido);
  }

  get total() {
    if (!this.pedido) {
      return 0;
    }
    return this.pedido.itens.map(item => item.quantidade * item.produto.preco).reduce((acc, val) => val + acc);
  }

}
