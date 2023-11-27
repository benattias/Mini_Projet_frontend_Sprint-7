import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParEquipeComponent } from './recherche-par-equipe.component';

describe('RechercheParEquipeComponent', () => {
  let component: RechercheParEquipeComponent;
  let fixture: ComponentFixture<RechercheParEquipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheParEquipeComponent]
    });
    fixture = TestBed.createComponent(RechercheParEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
