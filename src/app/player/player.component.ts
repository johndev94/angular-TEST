import { Component, NgModule } from '@angular/core';
import { Player } from '../player';
import { JsonPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from '../players.service';
import { FormControl, FormsModule, FormGroup, NgModel, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [JsonPipe, FormsModule, ReactiveFormsModule],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {
  id: number = 0;
  newPlayer: Player = {"id": 1, "name": "John", full_name: "John Doe", dob: "1990-01-01"};

  playerForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    full_name: new FormControl(''),
    dob: new FormControl('')
  })

  updatedPlayer: Player = {
    "id": Number(this.playerForm.value.id),
    "name": this.playerForm.value.name!,
    "full_name": this.playerForm.value.full_name!,
    "dob": this.playerForm.value.dob!
  };

  constructor(private route: ActivatedRoute, private playerService: PlayersService) {
  }


  updatePlayer() {
    // Implement player update logic here, possibly calling a service method
    console.log('Updating player...', this.newPlayer);
    this.playerService.updatePlayer(this.newPlayer).subscribe(
      data => {
        console.log(data);
      }
    );
  }
  
  deletePlayer() {
    // Implement player deletion logic here, possibly calling a service method
    console.log('Deleting player with ID:', this.newPlayer.id);
    this.playerService.deletePlayer(this.newPlayer.id).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('playerID'));
    
    this.playerService.getPlayer(this.id).subscribe(
      data => {
        this.newPlayer = data;
        console.log(data);
      }
    );
  }
}
