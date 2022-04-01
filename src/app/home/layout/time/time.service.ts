import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Time } from './time';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private http: HttpClient) {}

  cadastraNovaQuadra(novoTime: Time) {
    return this.http.post('http://localhost:8080/api/time', novoTime);
  }
}
