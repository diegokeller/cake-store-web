import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarrinhoService } from './servicos/carrinho.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'cake-store-web';

  itensCarrinho = 0;

  quantidadeItensSubscription: Subscription;

  constructor(private carrinho: CarrinhoService) {

  }

  ngOnInit(): void {
    this.quantidadeItensSubscription = this.carrinho.getQuantidadeItens()
      .subscribe(quantidade => {
        this.itensCarrinho = quantidade;
      });
  }

  ngOnDestroy() {
    this.quantidadeItensSubscription.unsubscribe();
  }


}
