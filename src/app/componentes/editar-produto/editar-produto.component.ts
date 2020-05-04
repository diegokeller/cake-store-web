import { Component, OnInit } from '@angular/core';
import { CakeStoreApiService } from 'src/app/servicos/cake-store-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html'
})
export class EditarProdutoComponent implements OnInit {

  produto: any;

  produtoForm = new FormGroup({
    nome: new FormControl(''),
    descricao: new FormControl(''),
    foto: new FormControl(''),
    preco: new FormControl(''),
    quantidade_estoque: new FormControl('')
  });

  constructor(
    private api: CakeStoreApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.route.snapshot.params.id) {
      this.api.getProduto(this.route.snapshot.params.id)
        .subscribe((result) => {
          this.produto = result.produto;
          this.produtoForm.patchValue(this.produto);
        });
    } else {
      this.produto = {};
      this.produtoForm.patchValue(this.produto);
    }
  }

  atualizarFoto() {
    this.produto.foto = this.produtoForm.get('foto').value;
  }

  salvar() {
    const produto = this.produtoForm.value;
    produto.id = this.produto.id;
    if (produto.id) {
      this.api.putProduto(produto).subscribe((result) => {
        if (result) {
          window.alert('Produto atualizado com sucesso!');
          this.router.navigate(['produtos']);
        }
      });
    } else {
      this.api.postProduto(produto).subscribe((result) => {
        if (result) {
          window.alert('Produto cadastrado com sucesso!');
          this.router.navigate(['produtos']);
        }
      });
    }
  }

}
