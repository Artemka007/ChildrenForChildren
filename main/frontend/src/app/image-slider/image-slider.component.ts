import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.sass']
})
export class ImageSliderComponent implements OnInit {
  @Input()
  urls: string[] = []
  
  @Input()
  id: number = 0

  @Output()
  close = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    window.addEventListener("keydown", e => {
      if (e.key === "Escape") this.closeSlider()
      if (e.key === "ArrowRight") this.next()
      if (e.key === "ArrowLeft") this.previous()
    })
  }

  next() {
    this.urls.length - 1 > this.id ? this.id +=1 : this.id = 0
  }

  previous() {
    0 < this.id ? this.id -=1 : this.id = this.urls.length - 1
  }

  closeSlider() {
    this.close.emit()
  }
}
