import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { getByIdEstoque } from 'src/app/services/estoques/estoques.service';
import { EstoqueGetResponseModel } from 'src/app/models/estoques/estoque-get.response.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-produtos-consulta',
  templateUrl: './produtos-consulta.component.html',
  styleUrls: ['./produtos-consulta.component.css']
})
export class ProdutosConsultaComponent implements OnInit {

  //atributo estoque
  estoque: EstoqueGetResponseModel | null = null;

  //atributos e dados do grid
  columnNames: string[] = ['nome', 'categoria', 'preco', 'quantidade', 'total', 'operacoes'];

  dataSource = new MatTableDataSource<DataSourceModel>();

  constructor(
    private activatedroute: ActivatedRoute,
    private spinnerService: NgxSpinnerService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this, this.spinnerService.show();

    let estoqueId = this.activatedroute.snapshot.paramMap.get('estoqueId') as string;

    getByIdEstoque(estoqueId)
      .subscribe({
        next: (data) => {
          this.estoque = data;
          this.loadData();
        },
        error: (e) => {
          console.log(e.error);
        }
      }).add(() => {
        this.spinnerService.hide();
      })
  }

  onReturn(): void {
    this.router.navigate(['/admin/estoque-consulta']);
  }
  onCreate(): void {
    this.router.navigate(['/admin/produtos-cadastro', this.estoque?.id])
  }

  loadData(): void {
    const dados: any[] = [];
    dados.push({
      id: '',
      nome: 'Notebook Dell',
      categoria: 'Eletrônicos e Informática',
      preco: 6000,
      quantidade: 10,
      total: 60000
    });
    dados.push({
      id: '',
      nome: 'Mochila para Notebook',
      categoria: 'Eletrônicos e Informática',
      preco: 300,
      quantidade: 10,
      total: 3000
    });
    this.dataSource.data = dados;
  }
}

/*
Modelo de dados para as informações que são
guardadas dentro do DataTable do Material
*/
class DataSourceModel {
  id: string = '';
  nome: string = '';
  categoria: string = '';
  preco: number = 0;
  quantidade: number = 0;
  total: number = 0;
}