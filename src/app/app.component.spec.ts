import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ListarVehiculoComponent } from './vehiculo/listar-vehiculo/listar-vehiculo.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({      
      imports: [HttpClientTestingModule],
      declarations: [AppComponent,ListarVehiculoComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'Parcial1' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Parcial1');
  });
});
