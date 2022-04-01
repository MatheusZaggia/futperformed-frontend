import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { TimeComponent } from './layout/time/time.component';
import { JogadorTimeComponent } from './layout/jogador-time/jogador-time.component';
import { QuadraComponent } from './layout/quadra/quadra.component';
import { JogoComponent } from './layout/jogo/jogo.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent, NovoUsuarioComponent, TimeComponent, JogadorTimeComponent, QuadraComponent, JogoComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MensagemModule,
    ReactiveFormsModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
