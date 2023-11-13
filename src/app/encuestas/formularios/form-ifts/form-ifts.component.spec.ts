import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIftsComponent } from './form-ifts.component';

describe('FormIftsComponent', () => {
  let component: FormIftsComponent;
  let fixture: ComponentFixture<FormIftsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormIftsComponent]
    });
    fixture = TestBed.createComponent(FormIftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
