import { Component, OnInit } from '@angular/core';
import { CakeStoreApiService } from '../cake-store-api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.scss']
})
export class DetalheProdutoComponent implements OnInit {

  produto: any;

  constructor(private route: ActivatedRoute, private api: CakeStoreApiService) { }

  ngOnInit(): void {
    this.api.getProduto(this.route.snapshot.params.id)
      .subscribe(response => this.produto = response.produto);
  }

}
