import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       email: ['', Validators.required ],
       subject: ['', Validators.required ],
       message: ['', Validators.required ]
    });
  }
}
