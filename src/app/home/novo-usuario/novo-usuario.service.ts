import { environment } from './../../../environments/environment';
import { Time } from './../layout/time/time';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoTime } from './novo-usuario';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private http: HttpClient) {}

  cadastraNovoUsuario(novoUsuario: NovoTime) {
    return this.http.post(`${environment.url}/time`, novoUsuario);
  }

  verificaEmailExistente(email: string) {
    return this.http.get<Time>(`${environment.url}/time?email=${email}`);
  }

}
