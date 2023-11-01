import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export const guardsGuard : CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
: Observable<boolean | UrlTree>
| UrlTree
|boolean
| Promise<boolean| UrlTree> => {
  let login = true;

  return login;
};
