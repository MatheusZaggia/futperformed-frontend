import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Time } from './time';
import { TimeService } from './time.service';


@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  novoTimeForm!: FormGroup;
  time!: Time;

  constructor(
    private formBuilder: FormBuilder,
    private timeService: TimeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.novoTimeForm = this.formBuilder.group(
      {
        nomeTime: ['', [Validators.required]],
        cidade: ['', [Validators.required]],
        bairro: ['', [Validators.required]],
        zona: ['', [Validators.required]],
        nomeResponsavel: ['', [Validators.required]],
        dataNascimento: ['', [Validators.required]],
        email: ['', [Validators.required]],
        ddd: ['', [Validators.required]],
        telefone: ['', [Validators.required]],
        senha: ['', [Validators.required]],
      }
    );
  }

  consultarTime() {
    if (this.novoTimeForm.valid) {
      const time = this.novoTimeForm.getRawValue() as Time;
      console.log(time);
      this.timeService.alterarTime(time).subscribe(
        () => {
          this.time = time;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

}
