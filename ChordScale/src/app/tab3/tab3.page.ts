import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  name: string
  email: string
  subject: string
  message: string

  constructor(public contactService: ContactService) {}

  //Contact Form will connect to service in future updates //
  async contactSubmit() {
    if (this.name == null || this.email == null || this.subject == null || this.message == null) {
      this.contactService.contactAlert()
    } else {
      this.contactService.contactSuccess()

      console.log(`Message sent from ${this.email}`)

      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';
    }
  }
}
