import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Quadra } from './quadra';
import { QuadraService } from './quadra.service';

@Component({
  selector: 'app-quadra',
  templateUrl: './quadra.component.html',
  styleUrls: ['./quadra.component.css']
})
export class QuadraComponent implements OnInit {

  novaQuadraForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private quadraService: QuadraService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.novaQuadraForm = this.formBuilder.group(
      {
        nomeQuadra: ['', [Validators.required]],
        tipoQuadra: ['', [Validators.required]],
        endereco: ['', [Validators.required]],
      }
    );
  }

  cadastrar() {
    if (this.novaQuadraForm.valid) {
      const novaQuadra = this.novaQuadraForm.getRawValue() as Quadra;
      console.log(novaQuadra);
      this.quadraService.cadastraNovaQuadra(novaQuadra).subscribe(
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
