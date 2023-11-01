import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Article } from 'src/app/module/service';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent {
  editting = false;
  slug$ = this._router.paramMap.pipe(map(params=>params.get('slug')))
  constructor(private _router:ActivatedRoute, private _api:ArticleService){}
  }


