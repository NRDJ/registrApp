import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicStorageModule } from '@ionic/storage-angular';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

import { Camera } from '@awesome-cordova-plugins/camera/ngx';

class CameraMock extends Camera {
  getPicture(options) {
    return new Promise((resolve, reject) => {
      resolve('BASE_64_ENCODED_DATA_GOES_HERE');
    });
  }
}

class BarcodeScannerMock extends BarcodeScanner {
  getPicture(options) {
    return new Promise((resolve, reject) => {
      resolve('BASE_64_ENCODED_DATA_GOES_HERE');
    });
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
     AppRoutingModule,
     IonicStorageModule.forRoot()
    ],
  providers: [
    { provide: Camera, useClass: CameraMock },
    { provide: BarcodeScanner, useClass: BarcodeScannerMock },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}

