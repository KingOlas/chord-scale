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

  // Contact Form will connect to service in future updates
  // ngModel does not work with FormGroup/FormBuilder/FormControl
  // Form will connect to Database when more time is available
  async contactSubmit() {
    // Input Validation
    if (this.name == null || this.email == null || this.subject == null || this.message == null) {
      this.contactService.contactAlert()
    } else {
      this.contactService.contactSuccess()

      // Ensuring data is being parsed from input fields
      console.log(`${this.name}'s message sent from ${this.email} | ${this.subject}: ${this.message}`)

      // Reset/Clear Form
      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';
    }
  }
}
