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

  constructor(private vehiculoService: VehiculoService) {}
  
  ngOnInit(): void {
    this.getAllVehiculos();
  }

  getAllVehiculos() {
    this.vehiculoService.getAllVehiculos().subscribe((data: any) => {
      this.vehiculos = data;
    });
  }
}
