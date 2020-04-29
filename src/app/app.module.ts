import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProdutosComponent } from './componentes/lista-produtos/lista-produtos.component';
import { ResumoProdutoComponent } from './componentes/resumo-produto/resumo-produto.component';
import { CakeStoreApiService } from './servicos/cake-store-api.service';
import { DetalheProdutoComponent } from './componentes/detalhe-produto/detalhe-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProdutosComponent,
    ResumoProdutoComponent,
    DetalheProdutoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CakeStoreApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
