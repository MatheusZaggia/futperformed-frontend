import { environment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quadra } from './quadra';

@Injectable({
  providedIn: 'root'
})
export class QuadraService {

  constructor(private http: HttpClient) {}

  cadastraNovaQuadra(novaQuadra: Quadra) {
    return this.http.post(`${environment.url}/quadra`, novaQuadra);
  }
}
