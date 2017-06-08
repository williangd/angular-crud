import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {
  produtos: Produto[];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.produtosService.atualizacao.subscribe(
      () => {
        this.listaClientes()
      }
    );
    this.listaClientes();
  }

  listaClientes() {
    this.produtosService.getProdutos()
      .then(clientes => {
        this.produtos = clientes;
      })
  }

  remove(id: number) {
    const resposta = confirm('Tem certeza que deseja deletar?');
    if (resposta) {
      this.produtosService.delProduto(id).then(() => this.produtosService.atualizacao.next(1));
    }
  }

  edit(index: number) {
    this.produtosService.editing.next(index);
  }

}
