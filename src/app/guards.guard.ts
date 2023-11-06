import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';
import { Injectable, OnInit } from '@angular/core';
import { AuthorService } from './author.service';
// @Injectable({providedIn: 'root'})
export class guardsGuard {
  constructor(private authorService:AuthorService){
  }
  canActivate() {
    return this.authorService.login;
  }
}
// } = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
//   : Observable<boolean | UrlTree>
//   | UrlTree
//   | boolean
//   | Promise<boolean | UrlTree> => {

//   const appcpn = new AppComponent()
//   return appcpn.login
// };
