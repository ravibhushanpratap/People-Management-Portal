import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Person {
  id: number;
  name: string;
  email?: string;
  phone?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private readonly baseUrl = `${environment.apiBaseUrl}`;

  constructor(private http: HttpClient) { }

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.baseUrl}/users`);
  }

  getPerson(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.baseUrl}/users/${id}`);
  }

  updatePerson(id: number, payload: Partial<Person>): Observable<Person> {
    return this.http.put<Person>(`${this.baseUrl}/users/${id}`, payload);
  }

  deletePerson(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/users/${id}`);
  }
}
