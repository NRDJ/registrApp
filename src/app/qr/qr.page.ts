import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QRPage implements OnInit {
  title = 'app';
  elementType = 'url';
  value = 'Techiediaries';
  generateQrCode = false;
  userDocente = '';

  constructor(public navCtrl: NavController, private activeroute: ActivatedRoute,
    private router: Router) {

    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.userDocente = this.router.getCurrentNavigation().extras.state.userName;
        console.log('Dato a mostrar ' + this.userDocente);
        }
      });
  }

  ngOnInit() {
  }

  qrCode() {
    this.generateQrCode = true;
  }

}
