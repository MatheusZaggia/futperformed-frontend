import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { JogadorTimeComponent } from './layout/jogador-time/jogador-time.component';
import { JogoComponent } from './layout/jogo/jogo.component';
import { QuadraComponent } from './layout/quadra/quadra.component';
import { TimeComponent } from './layout/time/time.component';
import { LoginComponent } from './login/login.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'novousuario',
        component: NovoUsuarioComponent,
      },

      {
        path: 'time',
        component: TimeComponent,
      },

      {
        path: 'quadra',
        component: QuadraComponent,
      },

      {
        path: 'jogo',
        component: JogoComponent,
      },

      {
        path: 'jogador',
        component: JogadorTimeComponent,
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
