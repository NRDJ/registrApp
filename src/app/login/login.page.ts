import { Component } from '@angular/core';
import { AlertController,NavController,AnimationController,createAnimation} from '@ionic/angular';
import { FormControl,FormGroup,Validators   } from '@angular/forms';
import { Router,NavigationExtras } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  value = 'nriedeldj';
  token = 'token1234';

  usuario = new FormGroup({
    user: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(9)]),
    pass: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(9)]),
  });

  constructor(private storage: Storage,private autGuard: AuthGuardService ,
    private authService: AuthenticationService,private navCtrl: NavController,
    private router: Router, private alertController: AlertController,
    private animationCtrl: AnimationController) {
    this.storage.set('token',this.token);

    this.storage.get('token').then((val) => {
      console.log('el token es : ', val);
    });
  }


  ionViewDidEnter(){
    this.animation();
  }


    animation() {
      const animation = createAnimation()
     .addElement(document.querySelector('.title'))
     .duration(1500)
     .iterations(Infinity)
     .fromTo('transform', 'translateX(100px)', 'translateX(0px)')
     .fromTo('opacity', '1', '0.2');
      animation.play();
    }

    loginUser() {
      if ((this.usuario.value.user.trim()!=='') && ((this.usuario.value.pass.trim()!==''))){
        this.authService.login(this.usuario.value.user, this.usuario.value.pass);
      }
    }

    //Metodo de alerta
     async presentAlert(){
       const alert = await this.alertController.create({
         header: 'Error Login',
         subHeader: 'Infomación : ',
         message: 'Usuario o contraseña son incorrecto',
         buttons: ['Aceptar'],
       });
       await alert.present();
     }

}
