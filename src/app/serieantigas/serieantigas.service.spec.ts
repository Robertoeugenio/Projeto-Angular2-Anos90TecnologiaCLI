/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SerieantigasService } from './serieantigas.service';

describe('SerieantigasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerieantigasService]
    });
  });

  it('should ...', inject([SerieantigasService], (service: SerieantigasService) => {
    expect(service).toBeTruthy();
  }));
});
