import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resumo-produto',
  templateUrl: './resumo-produto.component.html',
  styleUrls: ['./resumo-produto.component.scss']
})
export class ResumoProdutoComponent implements OnInit {

  @Input()
  produto: any;

  constructor() { }

  ngOnInit(): void {
  }

}
