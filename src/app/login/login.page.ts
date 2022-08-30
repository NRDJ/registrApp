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
    if (this.formData.value.user === 'docente' || this.formData.value.user === 'alumno') {
      if (this.formData.value.user === this.formData.value.password) {
        alert('Correct');
        this.router.navigate(['/home']);
      } else {
        alert('Wrong password');
      }
    } else {
      alert('Wrong user');
    }

  }

}
