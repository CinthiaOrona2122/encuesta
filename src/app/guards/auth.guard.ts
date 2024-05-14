import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { LocalstorageService } from '../services/localstorage.service';


export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree> 
  | boolean
  | UrlTree => {

  const token = LocalstorageService.getItem('token');
  const router = inject(Router);
  const userService = inject(UserService);

  if (!token || !userService.isTokenValid(token)) {
    console.log("Acceso no autorizado. Redireccionando al login...");
    router.navigate(['/auth']);
    return false;
  } else {
    return true;
  }
}



