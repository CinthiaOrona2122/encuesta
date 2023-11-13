import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCacComponent } from './form-cac.component';

describe('FormCacComponent', () => {
  let component: FormCacComponent;
  let fixture: ComponentFixture<FormCacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCacComponent]
    });
    fixture = TestBed.createComponent(FormCacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
