import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateroleComponent } from './updaterole.component';

describe('UpdateroleComponent', () => {
  let component: UpdateroleComponent;
  let fixture: ComponentFixture<UpdateroleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateroleComponent]
    });
    fixture = TestBed.createComponent(UpdateroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
