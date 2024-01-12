// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const authGuard = () => {
  let isAuth= false;
  const router = inject(Router);
  if(!isAuth){
    
  }


  return false;
}