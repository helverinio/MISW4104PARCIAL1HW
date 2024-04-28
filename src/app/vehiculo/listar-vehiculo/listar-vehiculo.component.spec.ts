import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListarVehiculoComponent } from './listar-vehiculo.component';

describe('ListarVehiculoComponent', () => {
  let component: ListarVehiculoComponent;
  let fixture: ComponentFixture<ListarVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarVehiculoComponent],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('la tabla se debe crear con 3 filas mas un encabezado', () => {
    component.vehiculos = [
      { id: 1, marca: 'Toyota', modelo: 2020, linea: 'corolla', referencia: 0, kilometro: 0, color: 'red', imagen: '' },
      { id: 2, marca: 'Hyundai', modelo: 2021, linea: 'Tucson', referencia: 0, kilometro: 0, color: 'red', imagen: '' },
      { id: 3, marca: 'Renault', modelo: 2022, linea: '4', referencia: 0, kilometro: 0, color: 'red', imagen: '' },
    ];
  });
});
