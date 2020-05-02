import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProdutosComponent } from './componentes/lista-produtos/lista-produtos.component';
import { DetalheProdutoComponent } from './componentes/detalhe-produto/detalhe-produto.component';
import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';
import { ListaPedidosComponent } from './componentes/lista-pedidos/lista-pedidos.component';


const routes: Routes = [
  { path: 'produtos', component: ListaProdutosComponent },
  { path: 'produtos/:id', component: DetalheProdutoComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'pedidos', component: ListaPedidosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
