import { Injectable } from '@angular/core';
import { Article } from '../module/service';
import { Observable, delay, find, of } from 'rxjs';


const articles: Article[] = [
  {
    title: 'bai viet 1',
    id: "1",
    author: "doan minh dat",
    date: "6-7-2020",
    slug: "bai-viet-1",
    content:'day la noi dung bai viet 1'
  },
  {
    title:"bai viet 2",
  id:"2",
  author:"ntn",
  date:"25-11-2020",
  slug:"bai-viet-2",
  content:"day la noi dung bai viet 2"
  }
]

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor() { }
  getArticle(): Observable<Article[]>{
    return of(articles).pipe(delay(500))
  }
  getArticleBySlug(slug:string|null):Observable<Article| undefined>{
    let article = articles.find(x => x.slug === slug)
    return of(article).pipe(delay(500))
  }
}

