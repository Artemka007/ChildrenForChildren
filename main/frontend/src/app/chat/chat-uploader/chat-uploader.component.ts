import { HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICreateMessage } from 'src/app/models/chat.model';
import { ChatService } from 'src/app/services/chat.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'cfc-chat-uploader',
  templateUrl: './chat-uploader.component.html',
  styleUrls: ['./chat-uploader.component.sass']
})
export class ChatUploaderComponent implements OnInit {
  @Input()
  message?: ICreateMessage

  @Input()
  inputs: {type: 'img' | 'doc', el: HTMLInputElement}[] = []

  uploadigFiles: {id?: number, type: "img" | "doc", name: string, progress: number, progressColor?: string}[] = []
  uploadSubscription?: Subscription

  constructor(
    private _ui: UiService,
    private _chat: ChatService
  ) { }

  ngOnInit(): void {
    this.inputs.forEach(i => {
      i.el.onchange = e => {this.uploadFile(e, i.type)}
    })
  }

  uploadFile(event: Event, type: "img" | "doc") {
    // get input with file in event
    let el = event.target as HTMLInputElement
    // get files in input
    let fileList: FileList | null = el.files
    // create form data for add files in it
    let fd = new FormData()
    if (fileList) {
      // get file in list
      let f = fileList[0]
      let uploadFile = {type, name: f.name, progress: 0}
      if (f.name.length > 100) {
        // django does not support files with large name
        this._ui.openWarning({"message": "Длина названия файла не может быть больше 100 символов.", "class": "error"})
        return
      }
      fd.append("file", f)
      this.uploadigFiles.push(uploadFile)

      this.uploadSubscription = this._chat.uploadFile(fd, type).subscribe(data => {
        let uploadingFilesLastId = this.uploadigFiles.length - 1
        if (data.type === HttpEventType.UploadProgress && data.total) {
          this.uploadigFiles[uploadingFilesLastId].progress = Math.round(data.loaded / data.total * 100)
        } else if (data.type === HttpEventType.Response) {
          if (data.body?.data.id && this.message) {
            type === "img" && this.message['imgs'].push(data.body?.data.id)
            type === "doc" && this.message['docs'].push(data.body?.data.id)
            this.uploadigFiles[uploadingFilesLastId].id = data.body.data.id
          }
        }
      })
    }
  }

  breakUpload() {
    this.uploadSubscription?.unsubscribe()
    let uploadingFilesLastId = this.uploadigFiles.length - 1
    this.uploadigFiles.splice(uploadingFilesLastId, 1)
  }

  deleteUploadedFile(type: "img" | "doc", id?: number) {
    id && this._chat.deleteUploadedFile(id, type).subscribe(data => {
      if (this.message) {
        if (type === 'img') {
          this.message['imgs'].splice(this.message.imgs.indexOf(id), 1)
        } else if (type === 'doc') {
          this.message['docs'].splice(this.message.docs.indexOf(id), 1)
        }
        let uf = this.uploadigFiles.find(i => i.id === id)
        uf && this.uploadigFiles.splice(this.uploadigFiles.indexOf(uf), 1)
      }
    })
  }

}
