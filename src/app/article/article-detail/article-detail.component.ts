import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';
import { Observable } from 'rxjs';
import { Article } from 'src/app/module/service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  article$!:Observable<Article|undefined>
  constructor(private _router:ActivatedRoute, private _api:ArticleService){}
  ngOnInit(): void {
      let slug = this._router.snapshot.paramMap.get('slug')
      this.article$ = this._api.getArticleBySlug(slug)
  }
}
