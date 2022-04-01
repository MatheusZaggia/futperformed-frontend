import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NovoTime } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        nomeResponsavel: ['', [Validators.required, Validators.minLength(4)]],
        nomeTime: ['', [Validators.required, Validators.minLength(4)]],
        dataNascimento: ['', [Validators.required]],
        cidade: ['', [Validators.required]],
        bairro: ['', [Validators.required]],
        zona: ['', [Validators.required]],
        ddd: ['', [Validators.required]],
        telefone: ['', [Validators.required]],
        senha: ['', [Validators.required]],
      }
    );
  }

  cadastrar() {
    if (this.novoUsuarioForm.valid) {
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoTime;
      console.log(novoUsuario);
      this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe(
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
