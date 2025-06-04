import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const usuario = JSON.parse(localStorage.getItem('usuario') || 'null');
    if (usuario) {
      return true;
    } else {
      this.router.navigate(['/login']); // Redirige al login
      return false;
    }
  }
}
