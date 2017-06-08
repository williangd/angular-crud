import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProdutosService } from '../produtos.service';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit, OnDestroy {
  @ViewChild('formProduto') produtoForm;
  idUpdate: number;
  editMode: boolean;
  updatedProduto: any;
  subscribe: any;

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.subscribe = this.produtosService.editing.subscribe(
      (index: number) => {
        this.idUpdate = index;
        this.editMode = true;
        this.produtosService.getProduto(index).then(produto => {
          this.updatedProduto = produto;
          this.produtoForm.setValue({
            nome: this.updatedProduto.nome,
            valor: this.updatedProduto.valor
          })
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    const novoProduto = new Produto(form.value.nome, form.value.valor);
    if (this.editMode) {
      this.produtosService.updateProduto(this.idUpdate, novoProduto)
        .then(() => this.produtosService.atualizacao.next(1));
    } else {
      this.produtosService.addProduto(novoProduto)
        .then(() => this.produtosService.atualizacao.next(1));
    }
    form.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
