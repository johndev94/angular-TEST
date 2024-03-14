import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { ClickedButtonComponent } from './clicked-button/clicked-button.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { PlayerComponent } from './player/player.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayersComponent, MyButtonComponent, ClickedButtonComponent, EmployeeComponent, FormComponent, HttpClientModule, 
            NavComponent, RouterLink, RouterOutlet, PlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world';
}
