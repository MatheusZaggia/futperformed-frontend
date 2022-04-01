import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JogadorTime } from './jogador-time';
import { JogadorTimeService } from './jogador-time.service';



@Component({
  selector: 'app-jogador-time',
  templateUrl: './jogador-time.component.html',
  styleUrls: ['./jogador-time.component.css']
})
export class JogadorTimeComponent implements OnInit {

  novoJogadorTimeForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private jogadorTimeService: JogadorTimeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.novoJogadorTimeForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        quadro: ['', [Validators.required]],
        ddd: ['', [Validators.required]],
        telefone: ['', [Validators.required]],
        posicao: ['', [Validators.required]],
        nomeJogador: ['', [Validators.required]],
      }
    );
  }

  cadastrar() {
    if (this.novoJogadorTimeForm.valid) {
      const novoJogadorTime = this.novoJogadorTimeForm.getRawValue() as JogadorTime;
      console.log(novoJogadorTime);
      this.jogadorTimeService.cadastraNovoJogadorTime(novoJogadorTime).subscribe(
        () => {
          this.router.navigate(['']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

}
