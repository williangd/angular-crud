import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produto } from './produto.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  @ViewChild('formProduto') form: NgForm;
  produtos: Produto[] = [
    {nome: 'Memória 8GB', valor: 250.50},
    {nome: 'Moto G5', valor: 1000 }
  ];
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const nome = this.form.value.nome;
    const valor = this.form.value.valor;
    console.log(nome, valor);
    this.produtos.push(new Produto(nome, valor));
    this.form.reset();
  }

}
