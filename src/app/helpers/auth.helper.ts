import { AutenticarResponseModel } from "../models/usuarios/autenticar-response.model";
import { decrypt, encrypt } from "./crypto.helper";

const key = 'auth_estoque';

//autenticar o usuário
export function login(model: AutenticarResponseModel): void {
    let data = encrypt(JSON.stringify(model));
    localStorage.setItem(key, data);
}

//retornar os dados do usuário autenticado
export function getData(): AutenticarResponseModel | null {
    let data = decrypt(localStorage.getItem(key) as string);
    if (data != null) {
        return JSON.parse(data) as AutenticarResponseModel;
    }
    else {
        return null;
    }
}

//verificar se o usuário está autenticado.

export function isAuthenticated() : boolean{
  let data = getData();
  console.log('data no isAuthenticated', data);
  if(data != null){
    let dataAtual = new Date();
    let dataExpiracao = new Date(data.dataHoraExpiracao as Date);
    return dataAtual <= dataExpiracao;
  }
  return false;
}

export function logout(): void {
    localStorage.removeItem(key);
}
