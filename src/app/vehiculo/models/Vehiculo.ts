export interface IVehiculo {
    id: number;
    marca: string;
    linea: string;
    referencia: number;
    modelo: number;
    kilometro: number;
    color: string;
    imagen: string;
}

export class Vehiculo implements IVehiculo {
    id: number;
    marca: string;
    linea: string;
    referencia: number;
    modelo: number;
    kilometro: number;
    color: string;
    imagen: string;

    constructor(vehiculo: IVehiculo) {
        this.id = vehiculo.id;
        this.marca = vehiculo.marca;
        this.linea = vehiculo.linea;
        this.referencia = vehiculo.referencia;
        this.modelo = vehiculo.modelo;
        this.kilometro = vehiculo.kilometro;
        this.color = vehiculo.color;
        this.imagen = vehiculo.imagen;
    }
}