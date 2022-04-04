import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JogadorTime } from './jogador-time';


@Injectable({
  providedIn: 'root',
})
export class JogadorTimeService {
  constructor(private http: HttpClient) {}

  cadastraNovoJogadorTime(novoJogador: JogadorTime) {
    return this.http.post(`${environment.url}/jogadorTime`, novoJogador);
  }

  verificaJogadorExistente(email: string) {
    return this.http.get(`${environment.url}/jogadorTime/jogadorTime/exists/${email}`);
  }
}
