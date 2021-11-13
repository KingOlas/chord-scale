import { Component } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public contactPrompt: ContactService) {}

  // Contact Service Placeholder - full Contact Service will come in future updates //
  contactSubmit() {
    console.log('Message Sent')
    this.contactPrompt.contactAlert()
  }

}
