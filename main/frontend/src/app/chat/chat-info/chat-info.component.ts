import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cfc-chat-info',
  templateUrl: './chat-info.component.html',
  styleUrls: ['./chat-info.component.sass']
})
export class ChatInfoComponent implements OnInit {
  isEditing: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
