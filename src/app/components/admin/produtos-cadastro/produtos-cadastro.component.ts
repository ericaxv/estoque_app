import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { EstoqueGetResponseModel } from 'src/app/models/estoques/estoque-get.response.model';
import { getByIdEstoque } from 'src/app/services/estoques/estoques.service';

@Component({
  selector: 'app-produtos-cadastro',
  templateUrl: './produtos-cadastro.component.html',
  styleUrls: ['./produtos-cadastro.component.css']
})
export class ProdutosCadastroComponent implements OnInit {
  //atributos
  estoque: EstoqueGetResponseModel | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
  }
  ngOnInit(): void {
    this.spinner.show();

    let estoqueId = this.activatedRoute.snapshot.paramMap.get('estoqueId') as string;

    getByIdEstoque(estoqueId)
      .subscribe({
        next: (data) => {
          this.estoque = data;
        },
        error: (e) => {
          console.log(e.error);
        }
      })
      .add(() => {
        this.spinner.hide();
      })
  }


  formProduto = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    categoria: new FormControl('', [Validators.required]),
    preco: new FormControl('', [Validators.required]),
    quantidade: new FormControl('', [Validators.required])
  });

  get form(): any {
    return this.formProduto.controls;
  }

  onReturn(): void {
    this.router.navigate
      (['/admin/produtos-consulta', this.estoque?.id]);
  }
}
