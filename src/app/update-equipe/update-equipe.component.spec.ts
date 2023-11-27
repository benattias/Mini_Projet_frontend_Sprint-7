import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEquipeComponent } from './update-equipe.component';

describe('UpdateEquipeComponent', () => {
  let component: UpdateEquipeComponent;
  let fixture: ComponentFixture<UpdateEquipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateEquipeComponent]
    });
    fixture = TestBed.createComponent(UpdateEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
