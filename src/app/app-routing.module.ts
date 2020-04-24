import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';


const routes: Routes = [
  { path: 'produtos', component: ListaProdutosComponent },
  { path: 'produtos/:id', component: DetalheProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
