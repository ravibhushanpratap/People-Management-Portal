import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService, Person } from '../services/people.service';

@Component({
  selector: 'app-person-delete',
  template: `
    <h2>Delete Person</h2>
    <div *ngIf="person">
      <p>Are you sure you want to delete <strong>{{ person.name }}</strong>?</p>
      <button (click)="confirmDelete()">Yes, delete</button>
      <button (click)="cancel()">Cancel</button>
    </div>
  `,
  styles: []
})
export class PersonDeleteComponent implements OnInit {
  person: Person | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private peopleService: PeopleService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.peopleService.getPerson(id).subscribe(p => this.person = p);
  }

  confirmDelete() {
    if (!this.person) { return; }
    this.peopleService.deletePerson(this.person.id)
      .subscribe(() => this.router.navigate(['/people']));
  }

  cancel() {
    this.router.navigate(['/people']);
  }

}
