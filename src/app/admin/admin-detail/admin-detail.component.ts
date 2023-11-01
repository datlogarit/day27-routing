import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleService } from 'src/app/article/article.service';
import { Article } from 'src/app/module/service';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})

export class AdminDetailComponent implements OnInit {
  article$!:Observable<Article[]>
  constructor( private _api:ArticleService){
  }
ngOnInit(): void {
    this.article$ = this._api.getArticle()
}
}
