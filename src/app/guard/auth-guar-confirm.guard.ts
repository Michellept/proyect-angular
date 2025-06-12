import { CanDeactivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

interface CanComponentDeactive {
  canDeactivate: () => boolean;
}

@Injectable({
  providedIn: 'root',
}) // esto es para que se pueda inyectar en cualquier componente
export class authGuarConfirmGuard
  implements CanDeactivate<CanComponentDeactive>
{
  constructor(private router: Router) {}

  canDeactivate(): boolean {
    const confirmAlert = window.confirm(
      'Estas seguro de salir de esta pagina?'
    );
    if (confirmAlert) {
      setTimeout(() => this.router.navigate(['/login']), 0);
      return true;
    } else {
      return false;
    }
  }
}
