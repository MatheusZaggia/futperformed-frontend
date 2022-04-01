import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Jogo } from './jogo';
import { JogoService } from './jogo.service';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {

  novoJogoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private jogoService: JogoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.novoJogoForm = this.formBuilder.group(
      {
        dataJogo: ['', [Validators.required]],
        resultado: ['', [Validators.required]],
      }
    );
  }

  cadastrar() {
    if (this.novoJogoForm.valid) {
      const novoJogo = this.novoJogoForm.getRawValue() as Jogo;
      console.log(novoJogo);
      this.jogoService.cadastraNovoJogo(novoJogo).subscribe(
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
