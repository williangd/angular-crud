import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { NgForm } from '@angular/forms';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit, OnDestroy {
  @ViewChild('formCliente') clientForm: NgForm
  editMode = false;
  private id = 3;
  idUpdate: number;
  updatedCliente: any;
  subscribe: any;

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.subscribe = this.clientesService.editing.subscribe(
      (index: number) => {
        this.idUpdate = index;
        this.editMode = true;
        this.clientesService.getCliente(index).then(cliente => {
          this.updatedCliente = cliente;
          this.clientForm.setValue({
            nome: this.updatedCliente.nome,
            email: this.updatedCliente.email
          })
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    const novoCliente = new Cliente(form.value.nome, form.value.email);
    if (this.editMode) {
      this.clientesService.updateCliente(this.idUpdate, novoCliente)
        .then(() => this.clientesService.atualizacao.next(1));
    } else {
      this.clientesService.addCliente(novoCliente)
        .then(() => {
          this.clientesService.atualizacao.next(1);
          this.clientesService.atualizando.next(true);
        })
    }
    form.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
