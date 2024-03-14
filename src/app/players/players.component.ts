import { Component, inject } from '@angular/core';
import { Player } from '../player';
import { PlayersService } from '../players.service';
import { JsonPipe } from '@angular/common';
import { json } from 'express';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [JsonPipe, RouterLink],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent {
  
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
