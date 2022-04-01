import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JogadorTime } from './jogador-time';


@Injectable({
  providedIn: 'root',
})
export class JogadorTimeService {
  constructor(private http: HttpClient) {}

  cadastraNovoJogadorTime(novoJogador: JogadorTime) {
    return this.http.post('http://localhost:8080/api/jogadorTime', novoJogador);
  }

  verificaJogadorExistente(email: string) {
    return this.http.get(`http://localhost:8080/api/jogadorTime/exists/${email}`);
  }
}
