import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authState = new BehaviorSubject(false);
  constructor(
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    public toastController: ToastController
  )
  {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }
  ifLoggedIn() {
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }
  login(user, password) {
    if ((user === 'docente') && (password === 'docente')){
      const navigationExtras: NavigationExtras = {
        state: {
          userId: 'idDocente1234',
          userName: 'Docente Juan',
          message: 'Bienvenido'
        }
      };
      this.storage.set('USER_INFO', navigationExtras).then((response) => {
        this.router.navigate(['qr'],navigationExtras);
        this.authState.next(true);
      });
    } else if ((user === 'alumno') && (password === 'alumno')) {
      const navigationExtras: NavigationExtras = {
        state: {
          userId: 'idAlumno1234',
          userName: 'Alumno Pedro',
          message: 'Bienvenido'
        }
      };
      this.storage.set('USER_INFO', navigationExtras).then((response) => {
        this.router.navigate(['qr-alumno'],navigationExtras);
        this.authState.next(true);
      });
    } else {
      const navigationExtrasNOK: NavigationExtras = {
        state: {
          userId: '',
          userName: '',
          message: 'Nombre de usuario o contraseña inválidos'
        }
      };
      this.storage.set('USER_INFO', navigationExtrasNOK).then((response) => {
        this.router.navigate(['login'], navigationExtrasNOK);
        this.authState.next(false);
      });
    }
  }

  logout() {
    this.storage.remove('USER_INFO').then(() => {
      this.router.navigate(['login']);
      this.authState.next(false);
    });
  }

  isAuthenticated() {
    return this.authState.value;
  }
}
