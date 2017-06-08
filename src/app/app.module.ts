import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';
import { VendasComponent } from './vendas/vendas.component';
import { ClientesService } from './clientes/clientes.service';
import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';
import { ProdutoFormComponent } from './produtos/produto-form/produto-form.component';
import { HttpModule } from '@angular/http';
import { ClienteListComponent } from './clientes/cliente-list/cliente-list.component';
import { ProdutoListComponent } from './produtos/produto-list/produto-list.component';
import { ProdutosService } from './produtos/produtos.service';
import { VendasListComponent } from './vendas/vendas-list/vendas-list.component';
import { VendasFormComponent } from './vendas/vendas-form/vendas-form.component';
import { VendasService } from './vendas/vendas.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ProdutosComponent,
    VendasComponent,
    ClienteFormComponent,
    ProdutoFormComponent,
    ClienteListComponent,
    ProdutoListComponent,
    VendasListComponent,
    VendasFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    ClientesService,
    ProdutosService,
    VendasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
