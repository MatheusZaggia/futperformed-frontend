import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jogo } from './jogo';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  constructor(private http: HttpClient) {}

  cadastraNovoJogo(novoJogo: Jogo) {
    return this.http.post('http://localhost:8080/api/jogo', novoJogo);
  }

}
