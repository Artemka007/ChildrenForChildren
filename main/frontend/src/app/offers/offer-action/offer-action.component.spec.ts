import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferActionComponent } from './offer-action.component';

describe('OfferActionComponent', () => {
  let component: OfferActionComponent;
  let fixture: ComponentFixture<OfferActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
