import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INew } from '../models/news.model';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {
  news: INew[] = []
  new?: INew

  constructor(private _news: NewsService, private _route: ActivatedRoute) {
    _news.getAllNews().subscribe(data => {
      this.news = data.data.news || []
      this._route.queryParams.subscribe(i => {
        let id = i["id"]
        if (id) this.new = this.news.find(j => j.id === parseInt(id))
      })
    })
  }

  ngOnInit(): void {
  }

}
