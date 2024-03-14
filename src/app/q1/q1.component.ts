import { Component, inject } from '@angular/core';
import { PlayersService } from '../players.service';
import { Player } from '../player';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-q1',
  standalone: true,
  imports: [DatePipe, RouterLink, ReactiveFormsModule],
  templateUrl: './q1.component.html',
  styleUrl: './q1.component.css'
})

export class Q1Component {

  
  displayPlayers: boolean = true;
  players: Player[] = [];
  newPlayer: Player = {"id": 10, "name": "John", full_name: "John Doe", dob: "1990-01-01"}; 

  playerService = inject(PlayersService);

  constructor() {
    this.playerService.getPlayers().subscribe(
      data => {
        this.players = data;
        console.log(data);
      }
    ); // Add closing parenthesis here
  }

  addPlayers(){
    this.playerService.addPlayer(this.newPlayer).subscribe(
      data => {
        console.log(data);
      }
    );
  }


  // players : Player[] = [
  //   {id: 1, name: 'Lionel Messi', position: 'Forward'},
  //   {id: 2, name: 'Cristiano Ronaldo', position: 'Forward'},
  //   {id: 3, name: 'Neymar Jr', position: 'Forward'},
  //   {id: 4, name: 'Kylian Mbappe', position: 'Forward'},
  // ];

}
