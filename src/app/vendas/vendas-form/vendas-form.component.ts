import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../produtos/produtos.service';
import { ClientesService } from '../../clientes/clientes.service';
import { NgForm } from '@angular/forms';
import { VendasService } from '../vendas.service';

@Component({
  selector: 'app-vendas-form',
  templateUrl: './vendas-form.component.html',
  styleUrls: ['./vendas-form.component.css']
})
export class VendasFormComponent implements OnInit {
  clientes: any[];
  produtos: any[];
  editMode: boolean;

  constructor(private produtosService: ProdutosService, private clientesService: ClientesService,
              private vendasService: VendasService) { }

  ngOnInit() {
    this.produtosService.getProdutos()
      .then(response => this.produtos = response);
    this.clientesService.getClientes()
      .then(response => this.clientes = response);
  }

  onSubmit(form: NgForm) {
    this.vendasService.addVenda(form.value.cliente, form.value.produto)
      .then(() => this.vendasService.atualizacao.next(1))
    form.reset();
  }

}
