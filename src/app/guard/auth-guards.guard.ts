import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Injectable({
  providedIn: 'root',
}) // esto es para que se pueda inyectar en cualquier componente

export class AuthGuard implements CanActivate {
  constructor(
    private service: TasksService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.service.isLoggedIn()) {
      return true;
    } else {
      alert('Debes iniciar sesión para acceder a esta página.');
      this.router.navigate(['/login']);
      return false;
    }
  }

}
