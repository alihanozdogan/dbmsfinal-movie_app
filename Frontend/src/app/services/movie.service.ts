import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { movie } from '../models/movie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}
  public getMovies(): Observable<movie[]> {
    return this.http.get<movie[]>(`${this.apiServerUrl}/allMovies`);
  }
}
