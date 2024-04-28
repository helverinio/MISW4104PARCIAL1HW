import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../services/vehiculo.service';
import { IVehiculo } from '../models/Vehiculo';

@Component({
  selector: 'app-listar-vehiculo',
  templateUrl: './listar-vehiculo.component.html',
  styleUrl: './listar-vehiculo.component.css'
})
export class ListarVehiculoComponent implements OnInit{
  
  vehiculos: IVehiculo[] = [];
  marcas: { [key: string]: number } = {};

  constructor(private vehiculoService: VehiculoService) {}
  
  ngOnInit(): void {
    this.getAllVehiculos();

  }

  private contarMarcas() {
    this.marcas = this.vehiculos.reduce((acc, vehiculo) => {
      if (acc[vehiculo.marca]) {
        acc[vehiculo.marca]++;
      } else {
        acc[vehiculo.marca] = 1;
      }
      return acc;
    }, {} as { [key: string]: number; });
  }

  getAllVehiculos() {
    this.vehiculoService.getAllVehiculos().subscribe((data: any) => {
      this.vehiculos = data;
      this.contarMarcas();
      console.log(this.marcas);
    });
  }
}
