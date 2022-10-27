import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

/*
import { SQLiteObject } from '@awesome-cordova-plugins/sqlite';
import { SQLite } from '@ionic-native/sqlite/ngx';

*/
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public authenticationService: AuthenticationService, private router: Router ,/*private sqlite: SQLite */) {
    /*this.sqlite.create({
      name:'datos.db'
    }).then((db: SQLiteObject)=> {
      console.log('Base de datos creada');
    });*/
  }

  canActivate(): boolean {
    if (!this.authenticationService.isAuthenticated()){
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}

