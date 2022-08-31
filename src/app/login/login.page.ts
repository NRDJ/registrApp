import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formData: FormGroup;
  user: '';
  password: '';

  constructor(private router: Router) {
      this.formData = new FormGroup({
        user: new FormControl(),
        password: new FormControl()
    });
   }


  ngOnInit() {

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
