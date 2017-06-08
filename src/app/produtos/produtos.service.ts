import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Produto } from './produto.model';

@Injectable()
export class ProdutosService {
  atualizacao = new Subject<number>();
  editing = new Subject<number>();
  urlProduto = 'http://localhost:1337/produto';

  constructor(private http: Http) {}

  addProduto(cliente: Produto) {
    return this.http.post(this.urlProduto, cliente).toPromise()
      .then(response => response.json());
  }

  getProdutos() {
    return this.http.get(this.urlProduto).toPromise()
      .then(response => response.json());
  }

  getProduto(id: number) {
    return this.http.get(`${this.urlProduto}/${id}`).toPromise()
      .then(response => response.json());
  }

  updateProduto(id: number, novoProduto: Produto) {
    const body = JSON.stringify(novoProduto);
    return this.http.put(`${this.urlProduto}/${id}`, body).toPromise()
      .then(response => response.json());
  }

  delProduto(id: number) {
    const url = `${this.urlProduto}/${id}`;
    return this.http.delete(url).toPromise()
      .then(response => response.json().data)
  }
}
