import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from './service/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  if (userService.isLoggedIn()) {
    return true; // Allow access if the user is logged in
  } else {
    // Redirect to login page if not logged in
    const router = inject(Router);
    router.navigate(['/login']);
    return false;
  }
};
