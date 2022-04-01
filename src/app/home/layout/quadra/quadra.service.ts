import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quadra } from './quadra';

@Injectable({
  providedIn: 'root'
})
export class QuadraService {

  constructor(private http: HttpClient) {}

  cadastraNovaQuadra(novaQuadra: Quadra) {
    return this.http.post('http://localhost:8080/api/quadra', novaQuadra);
  }
}
