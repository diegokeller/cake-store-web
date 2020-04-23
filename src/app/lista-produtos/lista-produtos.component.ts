import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})
export class ListaProdutosComponent implements OnInit {

  produto: any;

  constructor() {
    this.produto = {
      nome: 'Teste',
      descricao: 'Descrição',
      preco: 10.25,
      quantidadeEstoque: 100,
      foto: 'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/segmento-carros/02-images/onix-premier.png?imwidth=960'
    };
  }

  ngOnInit(): void {
  }

}
