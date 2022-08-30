import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formData: FormGroup;
  user: '';
  password: '';

  constructor() {
      this.formData = new FormGroup({
        user: new FormControl(),
        password: new FormControl()
    });
   }


  ngOnInit() {

  }

  onSubmit() {
    if (this.formData.value.user === 'docente' && this.formData.value.password === 'docente'){
      alert('correct');
    } else {
      alert('wrong');
    }

    if (this.formData.value.user === 'alumno' && this.formData.value.password === 'alumno'){
      alert('correct');
    } else {
      alert('wrong');
    }
  }

}
