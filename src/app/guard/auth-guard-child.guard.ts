import { Router, CanActivateChild } from '@angular/router';
import { TasksService } from '../services/tasks.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class authGuardChildGuard implements CanActivateChild {

  constructor(private service: TasksService, private router: Router) { }


  canActivateChild(): boolean {
    if (this.service.authRoutesChild()) {
      return true
    } else {
      alert("No tienes permiso para acceder a esta página");
      setTimeout(() => this.router.navigate(['/login']), 2000);
      return false
    }


  }


};
