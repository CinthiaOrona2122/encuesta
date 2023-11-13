import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCfpComponent } from './form-cfp.component';

describe('FormCfpComponent', () => {
  let component: FormCfpComponent;
  let fixture: ComponentFixture<FormCfpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCfpComponent]
    });
    fixture = TestBed.createComponent(FormCfpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
