import axios from 'axios';
import { Observable } from 'rxjs';
import { AutenticarRequestModel } from "src/app/models/usuarios/autenticaar-request.model";
import { AutenticarResponseModel } from "src/app/models/usuarios/autenticar-response.model";
import { enviroment } from 'src/enviroments/enviroments';

export function postAutenticar(request: AutenticarRequestModel): Observable<AutenticarResponseModel>{
    return new Observable<AutenticarResponseModel>(observer => {
        axios.post<AutenticarResponseModel>(`${enviroment.apiUsuarios}/autenticar`, request)
            .then(
                response => {
                    observer.next(response.data);
                    observer.complete();
                }
            )
            .catch(
                e => {
                    observer.error(e)
                }
            )
    })
}