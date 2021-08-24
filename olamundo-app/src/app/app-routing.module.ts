import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContatoComponent} from "./contato/contato.component";
import {PrincipalComponent} from "./principal/principal.component";

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'contato', component: ContatoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
