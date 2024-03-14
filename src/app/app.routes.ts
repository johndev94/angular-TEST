import { Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { ClickedButtonComponent } from './clicked-button/clicked-button.component';
import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form/form.component';
import { EmployeeComponent } from './employee/employee.component';
import { PlayerComponent } from './player/player.component';
import { Q1Component } from './q1/q1.component';
import { Q3Component } from './q3/q3.component';
import { Q4Component } from './q4/q4.component';
import { Q2Component } from './q2/q2.component';

export const routes: Routes = [
    { path: 'players', component: PlayersComponent, title: 'Players'}, // /players
    { path: '', component: ClickedButtonComponent, title: 'My Button'}, // default route
    { path: 'clicked-button', component: ClickedButtonComponent, title: 'Clicked Button'},
    { path: 'contact', component: FormComponent, title: 'Form'},
    { path: 'employee', component: EmployeeComponent, title: 'Employee'},
    { path: 'form', component: FormComponent, title: 'Form'},
    { path: 'player/:playerID', component: PlayerComponent, title: 'Player Details'},
    { path: 'player/update/:playerID', component: PlayerComponent, title: 'Player Details'},
    { path: 'q1', component: Q1Component, title: 'Question 1'},
    { path: 'q2', component: Q2Component, title: 'Question 2'},
    { path: 'q3', component: Q3Component, title: 'Question 3'},
    { path: 'q4', component: Q4Component, title: 'Question 4'},
];
