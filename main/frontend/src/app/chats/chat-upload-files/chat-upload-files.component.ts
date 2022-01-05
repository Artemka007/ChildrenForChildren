import { HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICreateMessage, IMessage } from 'src/app/models/chat.model';
import { ChatService } from 'src/app/services/chat.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'chat-upload-files',
  templateUrl: './chat-upload-files.component.html',
  styleUrls: ['./chat-upload-files.component.sass']
})
export class ChatUploadFilesComponent implements OnInit {
  @Input()
  message?: ICreateMessage

  @Input()
  inputs: {type: 'img' | 'doc', el: HTMLInputElement}[] = []

  @Output()
  onupload = new EventEmitter()

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
      if (f.name.length > 100) {
        // django does not support files with large name
        this._ui.openWarning({"message": "Длина названия файла не может быть больше 100 символов.", "class": "error"})
        return
      }
      // create upload file dor add to upload files array
      let uploadFile = {type, name: f.name, progress: 0}
      fd.append("file", f)
      this.uploadigFiles.push(uploadFile)
      let uploadingFilesLastId = this.uploadigFiles.length - 1
      this.uploadSubscription = this._chat.uploadFile(fd, type).subscribe(data => {
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
