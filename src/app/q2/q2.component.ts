import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-q2',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './q2.component.html',
  styleUrl: './q2.component.css'
})
export class Q2Component {
  counter: number = 0; 
  timerRef!: number; 
  running: boolean = false;
  startText = 'Start';

  startTimer() {
    this.running = !this.running;
    if (this.running) {
      this.startText = 'Stop';
      const startTime = Date.now() - this.counter;
      this.timerRef = window.setInterval(() => { 
        this.counter = Date.now() - startTime;
      }, 100); 
    } else {
      this.startText = 'Resume';
      clearInterval(this.timerRef);
    }
  }

  clearTimer() {
    this.running = false;
    this.startText = 'Start';
    this.counter = 0; // Reset to 0 instead of undefined for type consistency
    clearInterval(this.timerRef);
  }

  ngOnDestroy() {
    clearInterval(this.timerRef);
  }
}
