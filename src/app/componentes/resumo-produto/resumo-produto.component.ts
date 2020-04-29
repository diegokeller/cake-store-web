import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resumo-produto',
  templateUrl: './resumo-produto.component.html'
})
export class ResumoProdutoComponent implements OnInit {

  @Input()
  produto: any;

  constructor() { }

  ngOnInit(): void {
  }

}
