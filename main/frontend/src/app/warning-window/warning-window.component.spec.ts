import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningWindowComponent } from './warning-window.component';

describe('WarningWindowComponent', () => {
  let component: WarningWindowComponent;
  let fixture: ComponentFixture<WarningWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
