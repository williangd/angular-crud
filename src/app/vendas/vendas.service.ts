import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class VendasService {
  atualizacao = new Subject<number>();
  vendasUrl = 'http://localhost:1337/vendas';

  constructor(private http: Http) {}

  getVendas() {
    return this.http.get(this.vendasUrl).toPromise()
      .then(response => response.json());
  }

  addVenda(cliente: number, produto: number) {
    const venda = { cliente_id: cliente, produto_id: produto };
    return this.http.post(this.vendasUrl, venda).toPromise()
      .then(response => response.json());
  }

  delVenda(id: number) {
    const url = `${this.vendasUrl}/${id}`;
    return this.http.delete(url).toPromise()
      .then(response => response.json().data)
  }

}
