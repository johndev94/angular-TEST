import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  contactForm = new FormGroup({
    email: new FormControl(''),
    comment: new FormControl('')
  });

  submit() {
    console.log(this.contactForm.value.email);
  }
}
