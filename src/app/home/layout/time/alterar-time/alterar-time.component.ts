import { TimeService } from './../time.service';
import { NovoTime } from './../../../novo-usuario/novo-usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Time } from '../time';

@Component({
  selector: 'app-alterar-time',
  templateUrl: './alterar-time.component.html',
  styleUrls: ['./alterar-time.component.css']
})
export class AlterarTimeComponent implements OnInit {

  editaUsuarioForm!: FormGroup;
   time!: Time;

  constructor(
    private formBuilder: FormBuilder,
    private timeService: TimeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) {}

  ngOnInit(): void {

    this.consultarTime(this.activatedRoute.snapshot.params.id);

    this.editaUsuarioForm = this.formBuilder.group(
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

  alterar() {
    if (this.editaUsuarioForm.valid) {
      const novoUsuario = this.editaUsuarioForm.getRawValue() as NovoTime;
      console.log(this.editaUsuarioForm);
      this.timeService.alterarTime(novoUsuario).subscribe(
        () => {
          this.router.navigate(['']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  consultarTime(id: Number) {
    console.log(id);
      this.timeService.buscaTime(id).subscribe((time: Time) => {
          console.log(time);
          this.time = time;
          this.editaUsuarioForm = new FormGroup({
          email: new FormControl(time.email),
          nomeResponsavel: new FormControl(time.nomeResponsavel),
          nomeTime: new FormControl(time.nomeTime),
          dataNascimento:new FormControl(time.dataNascimento),
          cidade: new FormControl(time.cidade),
          bairro: new FormControl(time.bairro),
          zona: new FormControl(time.zona),
          ddd:new FormControl(time.ddd),
          telefone: new FormControl(time.telefone),
          senha:new FormControl(time.senha),
          });

      })

  }

}
