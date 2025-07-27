import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // In a real application, you would implement authentication logic here.
  // For now, we'll always return true to allow access.
  console.log('AuthGuard: Checking if user can activate route...');
  return true;
};