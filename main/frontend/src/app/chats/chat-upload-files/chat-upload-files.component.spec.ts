import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatUploadFilesComponent } from './chat-upload-files.component';

describe('ChatUploadFilesComponent', () => {
  let component: ChatUploadFilesComponent;
  let fixture: ComponentFixture<ChatUploadFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatUploadFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatUploadFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
