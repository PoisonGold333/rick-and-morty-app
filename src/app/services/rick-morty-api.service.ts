import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character, CharacterResponse } from '../models/character.model';
import { Location } from '../models/location.model';
import { Episode } from '../models/episode.model';

@Injectable({
  providedIn: 'root'
})
export class RickMortyApiService {
  private baseUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  getCharacters(page: number = 1): Observable<CharacterResponse> {
    return this.http.get<CharacterResponse>(`${this.baseUrl}/character?page=${page}`);
  }

  getLocationByUrl(url: string): Observable<Location> {
    return this.http.get<Location>(url);
  }

  getEpisodeByUrl(url: string): Observable<Episode> {
    return this.http.get<Episode>(url);
  }

  getEpisodeById(id: number): Observable<Episode> {
    return this.http.get<Episode>(`${this.baseUrl}/episode/${id}`);
  }

  getLocationById(id: number): Observable<Location> {
    return this.http.get<Location>(`${this.baseUrl}/location/${id}`);
  }

  getMultipleEpisodes(ids: number[]): Observable<Episode[]> {
    const idsString = ids.join(',');
    return this.http.get<Episode[]>(`${this.baseUrl}/episode/${idsString}`);
  }
}