import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChatFormComponent } from './create-chat-form.component';

describe('CreateChatFormComponent', () => {
  let component: CreateChatFormComponent;
  let fixture: ComponentFixture<CreateChatFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateChatFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateChatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
