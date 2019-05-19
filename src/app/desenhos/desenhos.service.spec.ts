/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DesenhosService } from './desenhos.service';

describe('DesenhosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DesenhosService]
    });
  });

  it('should ...', inject([DesenhosService], (service: DesenhosService) => {
    expect(service).toBeTruthy();
  }));
});
