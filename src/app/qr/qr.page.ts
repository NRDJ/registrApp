import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

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

  constructor(public navCtrl: NavController) {

   }

  ngOnInit() {
  }

  qrCode() {
    this.generateQrCode = true;
  }

}
