/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VideogamesService } from './videogames.service';

describe('VideogamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideogamesService]
    });
  });

  it('should ...', inject([VideogamesService], (service: VideogamesService) => {
    expect(service).toBeTruthy();
  }));
});
