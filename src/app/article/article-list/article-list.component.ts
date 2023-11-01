import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/module/service';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  article$!: Observable<Article[]>

  constructor(private _router:ActivatedRoute, private _api: ArticleService){}
  ngOnInit(): void {
      this.article$ = this._api.getArticle()
  }
}
