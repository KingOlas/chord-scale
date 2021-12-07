import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(public alertController: AlertController) { }
  
  async contactAlert() {
    const alert = await this.alertController.create({
      header: 'Under Construction',
      subHeader: 'Contact Form Unavailable',
      message: 'We are working to get this functional again - Check back soon.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
