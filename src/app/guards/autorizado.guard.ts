import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutorizadoGuard implements CanActivate {

constructor(private autorizadoService: AutorizacaoService, private routerService: Router)

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const usuarioEstaLogado = this.autorizadoService.obterLoginStatus();
      if (usuarioEstaLogado){
        return true;
      }else{
       this.routerService.navigate(['/login']);
       return false;
      }

  }
}
