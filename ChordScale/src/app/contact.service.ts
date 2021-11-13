import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(public alertController: AlertController) { }
  
  async contactAlert() {
    const alert = await this.alertController.create({
      header: 'Message Sent',
      subHeader: 'Thank You!',
      message: 'Expect a reply within the next 5 business days.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async mediaAlert() {
    const alert = await this.alertController.create({
      header: 'Media Not Created',
      subHeader: 'We are working to create more Audio for you to hear.',
      message: 'Come back and check frequently for updates!',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
