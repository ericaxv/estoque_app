import axios, { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

export function doRequest<T>(config: any): Observable<T>{
    return new Observable<T>(observer => {
        axios(config)
        .then(response => handleResponse(observer, response))
        .catch(error => handleError(observer, error));
    })
}

//capturar retorno de sucesso da API
function handleResponse<T>(observer: any, response: AxiosResponse<T>){
    observer.next(response.data);
    observer.complete();
}

//capturar retorno de erro da API.
function handleError(observer: any, error: any){
    observer.error(error);
}