import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProdutosComponent } from './componentes/lista-produtos/lista-produtos.component';
import { ResumoProdutoComponent } from './componentes/resumo-produto/resumo-produto.component';
import { CakeStoreApiService } from './servicos/cake-store-api.service';
import { DetalheProdutoComponent } from './componentes/detalhe-produto/detalhe-produto.component';
import { CarrinhoService } from './servicos/carrinho.service';
import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ListaPedidosComponent } from './componentes/lista-pedidos/lista-pedidos.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    ListaProdutosComponent,
    ResumoProdutoComponent,
    DetalheProdutoComponent,
    CarrinhoComponent,
    ListaPedidosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CakeStoreApiService,
    CarrinhoService,
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
