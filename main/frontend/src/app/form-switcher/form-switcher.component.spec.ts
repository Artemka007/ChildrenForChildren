import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSwitcherComponent } from './form-switcher.component';

describe('FormSwitcherComponent', () => {
  let component: FormSwitcherComponent;
  let fixture: ComponentFixture<FormSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSwitcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
