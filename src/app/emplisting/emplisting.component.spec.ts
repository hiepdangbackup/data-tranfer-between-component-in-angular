import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplistingComponent } from './emplisting.component';

describe('EmplistingComponent', () => {
  let component: EmplistingComponent;
  let fixture: ComponentFixture<EmplistingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmplistingComponent]
    });
    fixture = TestBed.createComponent(EmplistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
