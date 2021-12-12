import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { base64ToFile, ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { AccountService } from 'src/app/services/account.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'crop-image',
  templateUrl: './crop-image.component.html',
  styleUrls: ['./crop-image.component.sass']
})
export class CropImageComponent implements OnInit {
  imageChangedEvent: any = ''
  croppedImage: any = ''

  @Output()
  onclose = new EventEmitter()

  @Output()
  onsubmit = new EventEmitter<FormData>()

  constructor(
    private _ui: UiService
  ) { }

  ngOnInit(): void {
  }

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event
  }

  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64
  }

  imageLoaded(image: LoadedImage) {
  }

  cropperReady() {
  }

  loadImageFailed() {
    this._ui.openWarning({"class": "error", "message": "Не удается загрузить изображение."})
  }

  close() {
    this.onclose.emit()
  }

  submit() {
    let fd = new FormData()
    let file = this.croppedImage
    console.log(file)
    fd.append("photo", base64ToFile(file))
    this.onsubmit.emit(fd)
    this.close()
  }
}
