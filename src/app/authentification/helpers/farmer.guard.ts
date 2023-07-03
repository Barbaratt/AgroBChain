import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class FarmerGuard implements CanActivateChild {
  constructor(private router: Router, private authService: AuthService) {}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    const user = this.authService.userAuth();
    if (user) {
      // Retorna verdadeiro caso sejá autorizado
      // Permitindo ir para outras rotas
      return true;
    }

    // Retorna ao login caso não esteja autorizado
    // não permitindo entrar no dashboard, e quaisquer outras routas
    this.router.navigate([''], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
