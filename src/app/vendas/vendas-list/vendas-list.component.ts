import { Component, OnInit } from '@angular/core';
import { VendasService } from '../vendas.service';

@Component({
  selector: 'app-vendas-list',
  templateUrl: './vendas-list.component.html',
  styleUrls: ['./vendas-list.component.css']
})
export class VendasListComponent implements OnInit {
  vendas: any;

  constructor(private vendasService: VendasService) { }

  ngOnInit() {
    this.vendasService.atualizacao.subscribe(
      () => {
        this.listaVendas()
      }
    );
    this.listaVendas();
  }

  listaVendas() {
    this.vendasService.getVendas().then(
      response => {
        this.vendas = response
      }
    )
  }

  remove(id: number) {
    const resposta = confirm('Tem certeza que deseja deletar?');
    if (resposta) {
      this.vendasService.delVenda(id).then(() => this.vendasService.atualizacao.next(1));
    }
  }

}
