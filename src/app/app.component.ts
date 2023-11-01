import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login:boolean = true
  title = 'routing';
  toggle_login(){
    this.login = !this.login
    console.log('login is:',this.login)
  }
}
