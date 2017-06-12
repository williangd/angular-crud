import { Cliente } from './cliente.model';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ClientesService {
  atualizacao = new Subject<number>();
  editing = new Subject<number>();
  urlCliente = 'http://localhost:1337/cliente';
  atualizando = new Subject<boolean>();

  constructor(private http: Http) {}

  addCliente(cliente: Cliente) {
    return this.http.post(this.urlCliente, cliente).toPromise()
      .then(response => response.json());
  }

  getClientes() {
    return this.http.get(this.urlCliente).toPromise()
      .then(response => response.json());
  }

  getCliente(id: number) {
    return this.http.get(`${this.urlCliente}/${id}`).toPromise()
      .then(response => response.json());
  }

  updateCliente(id: number, novoCliente: Cliente) {
    const body = JSON.stringify(novoCliente);
    return this.http.put(`${this.urlCliente}/${id}`, body).toPromise()
      .then(response => response.json());
  }

  delCliente(id: number) {
    const url = `${this.urlCliente}/${id}`;
    return this.http.delete(url).toPromise()
      .then(response => response.json().data)
  }
}
