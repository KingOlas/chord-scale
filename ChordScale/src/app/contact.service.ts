import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(public alertController: AlertController) {}
  
  async contactAlert() {
    const alert = await this.alertController.create({
      header: 'Contact Form Invalid',
      subHeader: 'All Fields Required',
      message: 'Please fill out all fields.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async contactSuccess() {
    const alert = await this.alertController.create({
      header: 'Thank You!',
      subHeader: 'Your message has been sent!',
      message: 'We will get back to you as soon as possible!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async chordAlert() {
    const alert = await this.alertController.create({
      header: 'Invalid Selection',
      subHeader: 'All Fields Required',
      message: 'Please select both a Chord and a Chord-Type.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
