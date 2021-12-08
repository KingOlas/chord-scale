import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  contactData: FormGroup

  constructor(public contactPrompt: ContactService) {}

  // Contact Service Placeholder - full Contact Service will come in future updates //
  contactSubmit() {

    console.log("something")
    this.contactPrompt.contactAlert()
  }

}
