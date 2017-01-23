/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SubpurpllitService } from './subpurpllit.service';

describe('SubpurpllitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubpurpllitService]
    });
  });

  it('should ...', inject([SubpurpllitService], (service: SubpurpllitService) => {
    expect(service).toBeTruthy();
  }));
});
