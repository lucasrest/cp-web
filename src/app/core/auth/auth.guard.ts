import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ROTAS } from '../constants/rotas';
import { CPToken } from '../interfaces/token';
import { CPLocalStorageService } from '../services/common/cp-localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _cpLocalStorageService: CPLocalStorageService
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.endpointWithoutVerification(state.url))
      return true;

    let cpToken: CPToken = this._cpLocalStorageService.getToken();
    if (!cpToken) {
      this._router.navigate([ROTAS.LOGIN]);
      return false;
    }

    return true;
  }

  endpointWithoutVerification(url: string): boolean {
    return url == ROTAS.LOGIN ||
      url == ROTAS.REGISTER_USER;
  }

}
