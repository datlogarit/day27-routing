import { Component, Injectable, inject } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public progress_appcpn = 31;
  constructor(private authorService:AuthorService){}
  title = 'routing';
  toggle_login(){
    this.authorService.login = !this.authorService.login
  }
}
