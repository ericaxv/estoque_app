import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CriarContaRequestModel } from 'src/app/models/usuarios/criar-conta.request.model';
import { postCriarConta } from 'src/app/services/usuarios/criar-conta.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  resultado: string = '';

  constructor(
    private spinnerService: NgxSpinnerService
  ){

  }

  formRegister = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    senha_confirmacao: new FormControl('', [Validators.required])
  });

  // acessar os campos da pagina.
  get form(): any {
    return this.formRegister.controls;
  }

  //processar o Submit do formulário
  onSubmit(): void {
    
    this.spinnerService.show();
    const request = new CriarContaRequestModel(
      this.formRegister.value.nome as string,
      this.formRegister.value.email as string,
      this.formRegister.value.senha as string,
      this.formRegister.value.senha_confirmacao as string

    );

    postCriarConta(request)
        .subscribe({
          next: (data) => {
            this.resultado = `Parabéns ${data.nome}, sua conta foi criada com sucesso!`;
            this.formRegister.reset();
          },
          error: (e) => {
            this.resultado = e.response.data.title;
            console.log(e.response.data);
          }
    }).add(() => {
        this.spinnerService.hide();
    });
  }
}
