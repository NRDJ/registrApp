import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QRPage implements OnInit {

  title = 'app';
  elementType = 'url';
  value = 'Joaquin Brito';
  constructor() {

  }

  ngOnInit() {
  }

}
