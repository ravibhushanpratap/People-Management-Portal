import { Component, OnInit } from '@angular/core';
import { PeopleService, Person } from '../services/people.service';

@Component({
  selector: 'app-people-list',
  template: `
    <h2>People</h2>
    <table *ngIf="people && people.length" border="1" cellspacing="0" cellpadding="6">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let p of people">
          <td>{{ p.id }}</td>
          <td>{{ p.name }}</td>
          <td>{{ p.email }}</td>
          <td>{{ p.phone }}</td>
          <td>
            <a [routerLink]="['/people', p.id, 'edit']">Edit</a>
            |
            <a [routerLink]="['/people', p.id, 'delete']">Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
    <p *ngIf="people && !people.length">No people found.</p>
  `,
  styles: []
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getPeople().subscribe(data => this.people = data);
  }

}
