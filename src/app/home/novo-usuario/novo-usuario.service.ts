import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoTime } from './novo-usuario';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private http: HttpClient) {}

  cadastraNovoUsuario(novoUsuario: NovoTime) {
    return this.http.post('http://localhost:8080/api/time', novoUsuario);
  }

  verificaUsuarioExistente(email: string) {
    return this.http.get(`http://localhost:8080/api/time/exists/${email}`);
  }

}
