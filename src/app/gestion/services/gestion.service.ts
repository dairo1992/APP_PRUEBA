import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resp } from 'src/app/interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor(private http: HttpClient) { }

  private apiUrl: String = 'https://api.github.com/';

  listUsers(q: string): Observable<Resp> {
    return this.http.get<Resp>(`${this.apiUrl}search/users?q=${q}`);
  }

  // getUserProfile(user: string): Observable<User> {
  //   return this.http.get<User>(`${this.apiUrl}users/${user}`);
  // }

  async getUserProfile(user: string) {
    try {
      const response = await fetch(`${this.apiUrl}users/${user}`);
      return await response.json();
    } catch (err) {
      console.error(err);
    }
  }
}
