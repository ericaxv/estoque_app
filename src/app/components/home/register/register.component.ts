import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { postRegister } from 'src/app/services/usuarios/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formRegister = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirm_password: new FormControl('', [Validators.required])
  });

  // acessar os campos da pagina.
  get form(): any {
    return this.formRegister.controls;
  }

  //processar o Submit do formulário
  onSubmit(): void {
    //postRegister();
  }
}
