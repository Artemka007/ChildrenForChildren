import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsNavigationComponent } from './chats-navigation.component';

describe('ChatsNavigationComponent', () => {
  let component: ChatsNavigationComponent;
  let fixture: ComponentFixture<ChatsNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatsNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
