import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatUploaderComponent } from './chat-uploader.component';

describe('ChatUploaderComponent', () => {
  let component: ChatUploaderComponent;
  let fixture: ComponentFixture<ChatUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatUploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
