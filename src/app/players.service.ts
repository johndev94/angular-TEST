import { Injectable } from '@angular/core';
import { Player } from './player';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  url = "http://localhost:3000/players"

  // players : Player[] = [
  //   {id: 1, name: 'Lionel Messi', position: 'Forward'},
  //   {id: 2, name: 'Cristiano Ronaldo', position: 'Forward'},
  //   {id: 3, name: 'Neymar Jr', position: 'Forward'},
  //   {id: 4, name: 'Kylian Mbappe', position: 'Forward'},
  // ];
  
  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.url);
  }

  addPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(this.url, player);
  }

  // get player by ID
  getPlayer(id: number): Observable<Player> {
    return this.http.get<Player>(`${this.url}/${id}`);
  }

  // update a player
  updatePlayer(player: Player): Observable<Player> {
    console.log(player);
    return this.http.put<Player>(`${this.url}/${player.id}`, player);
    
  }

  // delete a player by ID
  deletePlayer(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
