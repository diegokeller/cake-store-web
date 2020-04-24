import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ResumoProdutoComponent } from './resumo-produto/resumo-produto.component';
import { CakeStoreApiService } from './cake-store-api.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaProdutosComponent,
    ResumoProdutoComponent
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
