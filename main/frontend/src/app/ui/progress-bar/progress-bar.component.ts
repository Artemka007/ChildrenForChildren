import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.sass']
})
export class ProgressBarComponent implements OnInit {
  @Input()
  progress: number = 0
  @Input()
  progressColor?: string

  constructor() { }

  ngOnInit(): void {
  }

}
