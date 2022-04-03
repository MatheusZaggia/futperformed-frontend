import { environment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Time } from './time';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private http: HttpClient) {}

  alterarTime(novoTime: Time) {
    return this.http.put(`${environment.url}/time`, novoTime);
  }

  buscaTime(id: Number) {
    console.log(id);
    return this.http.get<Time>(`${environment.url}/time/${id}`);
  }
}
