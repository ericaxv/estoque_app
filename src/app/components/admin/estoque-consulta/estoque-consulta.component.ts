import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { getAllEstoque } from 'src/app/services/estoques/estoques.service';
import { EstoqueGetResponseModel } from 'src/app/models/estoques/estoque-get.response.model';

@Component({
  selector: 'app-estoque-consulta',
  templateUrl: './estoque-consulta.component.html',
  styleUrls: ['./estoque-consulta.component.css']
})
export class EstoqueConsultaComponent implements OnInit {
  //construtor
  constructor(
    private router: Router,
    private spinnerService: NgxSpinnerService
  ) {}

  
  //atributos
  columnNames: string[] = ['nome', 'descricao', 'datacriacao','operacoes'];
  //dados do grid
  dataSource = new MatTableDataSource<DataSourceModel>();

  ngOnInit(): void {
    this.spinnerService.show();
    getAllEstoque().subscribe({
      next: (data) => {
        const dados: any[] = [];
        data.forEach((item: EstoqueGetResponseModel) => {
          dados.push({
            nome: item.nome,
            descricao: item.descricao,
            datacriacao: item.dataHoraCadastro
          })
        });
        this.dataSource.data = dados;
      },
      error: (e) => {
        console.log(e.response.data);
      }
    }).add(() => {
      this.spinnerService.hide();
    });
  }
  //função para capturar o evento de exclusão
  onDelete(id: number): void {
    if (window.confirm('Deseja realment excluir o estoque selecionado?')) {
      //TODO
    }
  }
  //função para capturar o evento de edição
  onEdit(id: number): void {
    this.router.navigate(['/admin/estoque-edicao', id]);
  }
}
class DataSourceModel {
  nome: string = '';
  descricao: string = '';
  datacriacao: Date | null = null;
}


