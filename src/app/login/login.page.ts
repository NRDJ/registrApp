import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController, AnimationController, createAnimation} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formData: FormGroup;
  user: '';
  password: '';

  constructor(private router: Router, private animationCtrl: AnimationController) {
    this.formData = new FormGroup({
      user: new FormControl(),
      password: new FormControl()
    });

   }

    ngOnInit() {
      const animation = createAnimation()
     .addElement(document.querySelector('.title'))
     .duration(1500)
     .iterations(Infinity)
     .fromTo('transform', 'translateX(100px)', 'translateX(0px)')
     .fromTo('opacity', '1', '0.2');
      animation.play();
    }

  onSubmit() {
    if (this.formData.value.user === 'docente' && this.formData.value.password === 'docente') {
        alert('Credenciales correctas');
        this.router.navigate(['/qr']);
    } else if (this.formData.value.user === 'alumno' && this.formData.value.password === 'alumno'){
        alert('Credenciales correctas');
        this.router.navigate(['/qr-alumno']);
    } else {
      alert('Credenciales incorrectas!');
    }
  }

}
