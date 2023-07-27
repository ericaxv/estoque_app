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
    let auth = localStorage.getItem(key) as string | null;
    if(auth != null){
        let data = decrypt(auth);
        if (data != null) {
            return JSON.parse(data) as AutenticarResponseModel;
        }
    }
    return null; 
}

//verificar se o usuário está autenticado.

export function isAuthenticated() : boolean{
  let data = getData();
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
