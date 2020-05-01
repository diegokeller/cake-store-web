import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/servicos/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html'
})
export class CarrinhoComponent implements OnInit {

  itens: any[];
  
  constructor(
    private carrinho: CarrinhoService
  ) { }

  ngOnInit(): void {
    this.carrinho.getItens().subscribe(itens => this.itens = itens);
  }

  get total(): number {
    return this.itens
      .map(item => item.quantidade * item.preco)
      .reduce((acc, val) => acc + val);
  }

}
