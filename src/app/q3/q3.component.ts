import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-q3',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './q3.component.html',
  styleUrl: './q3.component.css'
})
export class Q3Component {
  chatForm = new FormGroup({
    name: new FormControl(''),
    message: new FormControl('')
  });

  messages: { name: string, message: string, id: number }[] = [];

  onClick(event: Event) {
    event.preventDefault(); // Prevent the default form submission behavior
    this.messages.push({
      name: this.chatForm.value.name || '',
      message: this.chatForm.value.message || '',
      id: 0
    });
    this.chatForm.reset(); // Optional: Reset the form after submission
  }
}