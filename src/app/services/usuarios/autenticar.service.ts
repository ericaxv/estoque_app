import axios from 'axios';
import { Observable } from 'rxjs';
import { AutenticarRequestModel } from "src/app/models/usuarios/autenticaar-request.model";
import { AutenticarResponseModel } from "src/app/models/usuarios/autenticar-response.model";
import { environment } from 'src/enviroments/enviroments';
import { doRequest } from '../commons/commons.service';

export function postAutenticar(request: AutenticarRequestModel): Observable<AutenticarResponseModel>{
    const config = {
        method: 'post',
        url: `${environment.apiUsuarios}/autenticar`,
        data: request
    };
    return doRequest<AutenticarResponseModel>(config);
}