import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeuserComponent } from './liste-user.component';

describe('ListeUserComponent', () => {
  let component: ListeuserComponent;
  let fixture: ComponentFixture<ListeuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeuserComponent]
    });
    fixture = TestBed.createComponent(ListeuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
