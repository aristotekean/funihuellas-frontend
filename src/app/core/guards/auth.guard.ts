import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // In a real app, you would check authentication status here
  // For now, we'll simulate a simple check
  const isAuthenticated = localStorage.getItem('user_token') !== null;

  if (!isAuthenticated) {
    // Redirect to login page or home with a message
    router.navigate(['/home'], {
      queryParams: {
        message: 'Debes iniciar sesión para acceder a esta página',
        returnUrl: state.url,
      },
    });
    return false;
  }

  return true;
};

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Check if user is authenticated first
  const isAuthenticated = localStorage.getItem('user_token') !== null;
  const userRole = localStorage.getItem('user_role');

  if (!isAuthenticated) {
    router.navigate(['/home'], {
      queryParams: {
        message: 'Debes iniciar sesión para acceder al panel administrativo',
        returnUrl: state.url,
      },
    });
    return false;
  }

  if (userRole !== 'admin') {
    router.navigate(['/home'], {
      queryParams: {
        message: 'No tienes permisos para acceder al panel administrativo',
      },
    });
    return false;
  }

  return true;
};
