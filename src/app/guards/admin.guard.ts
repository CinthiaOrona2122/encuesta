import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { LocalstorageService } from '../services/localstorage.service';

export const adminGuard: CanActivateFn = (route, state) => {

  const token = LocalstorageService.getItem('token');
  const router = inject(Router);
  const userService = inject(UserService);


  if(!userService.isAdmin(token)){ 
    router.navigate(['/home']);
    console.log("Sos comun no podes pasar");
    return false // es ROl_ADMIN
  }else{
    return true;
  }

};
