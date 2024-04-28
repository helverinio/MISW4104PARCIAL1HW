import { TestBed } from '@angular/core/testing';

import { VehiculoService } from './vehiculo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VehiculoService', () => {
  let service: VehiculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(VehiculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
