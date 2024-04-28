import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListarVehiculoComponent } from './listar-vehiculo/listar-vehiculo.component';

@NgModule({
  declarations: [ListarVehiculoComponent],
  exports: [ListarVehiculoComponent],
  imports: [
    CommonModule,
    HttpClientModule    
  ]
})
export class VehiculoModule { }
