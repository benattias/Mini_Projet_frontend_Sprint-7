import { TestBed } from '@angular/core/testing';

import { joueurGuard } from './joueur.guard';

describe('ProduitGuard', () => {
  let guard: joueurGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(joueurGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});