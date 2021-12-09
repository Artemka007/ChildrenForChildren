import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

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

  @ViewChild("img")
  img?: ElementRef<HTMLImageElement>

  isOpen: boolean = true

  constructor() { }

  ngOnInit(): void {
    window.addEventListener("keydown", e => {
      if (e.key === "Escape") this.closeSlider()
      if (e.key === "ArrowRight") this.next()
      if (e.key === "ArrowLeft") this.previous()
    })
    this.img && this.checkImgSize(this.img.nativeElement)
  }

  next() {
    this.img && this.checkImgSize(this.img.nativeElement)
    this.urls.length - 1 > this.id ? this.id +=1 : this.id = 0
  }

  previous() {
    this.img && this.checkImgSize(this.img.nativeElement)
    0 < this.id ? this.id -=1 : this.id = this.urls.length - 1
  }

  closeSlider() {
    this.close.emit()
  }
  checkImgSize(img: HTMLImageElement) {
    let ww = window.innerWidth,
        wh = window.innerHeight
    let w = img.offsetWidth,
        h = img.offsetHeight
    if (w > h) {
        img.style.width = ww <= 1024 ? `${ww}px` : "1024px"
        img.style.height = "auto"
        if (img.offsetWidth > wh) {
            img.style.height = "100%"
            img.style.width = "auto"
        }
    } else {
      img.style.height = wh <= 1024 ? `${wh}px` : "1024px"
      img.style.width = "auto"
        if (img.offsetWidth > ww) {
            img.style.height = "auto"
            img.style.width = "100%"
        }
    }
}
}
