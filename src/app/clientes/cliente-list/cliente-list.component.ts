import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  clientes: Cliente[];

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    // this.clientesService.getClientes().subscribe(
    //   (clientes: any[]) => this.clientes = clientes,
    //   error => console.log(error)
    // );
    // this.clientesService.clientesChange.subscribe(
    //   (clientes: Cliente[]) => this.clientes = clientes
    // );
    this.clientesService.atualizacao.subscribe(
      () => {
        this.listaClintes()
      }
    );
    this.listaClintes();
  }

  listaClintes() {
    this.clientesService.getClientes()
      .then(clientes => {
        this.clientes = clientes;
      })
  }

  remove(id: number) {
    const resposta = confirm('Tem certeza que deseja deletar?');
    if (resposta) {
      this.clientesService.delCliente(id).then(() => this.clientesService.atualizacao.next(1));
    }
  }

  edit(index: number) {
    this.clientesService.editing.next(index);
  }

}
