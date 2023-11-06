import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleService } from 'src/app/article/article.service';
import { Article } from 'src/app/module/service';
import { ToggleComponent } from 'src/app/toggle/toggle.component';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})

export class AdminDetailComponent implements OnInit {
  @ViewChild(ToggleComponent) togglecpn!: ToggleComponent
  @ViewChild('inputElm', {static:true}) input_Elm!:ElementRef<HTMLInputElement>


  toggleInside(){
    this.togglecpn.toggle()
  }
  check = true
  article$!:Observable<Article[]>
  constructor( private _api:ArticleService){
  }
ngOnInit(): void {
    this.article$ = this._api.getArticle()
    setTimeout(() => {
      this.input_Elm.nativeElement.focus()
    }, 3000);
}
}
