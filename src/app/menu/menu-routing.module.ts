import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaMenuComponent } from './lista-menu/lista-menu.component';

const routes: Routes = [
  {
    path: '',
    component: ListaMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
