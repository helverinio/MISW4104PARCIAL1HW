import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarVehiculoComponent } from './vehiculo/listar-vehiculo/listar-vehiculo.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: '', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
