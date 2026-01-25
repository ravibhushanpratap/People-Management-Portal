import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService, Person } from '../services/people.service';

@Component({
  selector: 'app-person-edit',
  template: `
    <h2>Edit Person</h2>
    <form *ngIf="person" (ngSubmit)="save()">
      <div>
        <label>Name</label>
        <input [(ngModel)]="person.name" name="name" required />
      </div>
      <div>
        <label>Email</label>
        <input [(ngModel)]="person.email" name="email" />
      </div>
      <div>
        <label>Phone</label>
        <input [(ngModel)]="person.phone" name="phone" />
      </div>
      <button type="submit">Save</button>
      <button type="button" (click)="cancel()">Cancel</button>
    </form>
  `,
  styles: []
})
export class PersonEditComponent implements OnInit {
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

  save() {
    if (!this.person) { return; }
    this.peopleService.updatePerson(this.person.id, this.person)
      .subscribe(() => this.router.navigate(['/people']));
  }

  cancel() {
    this.router.navigate(['/people']);
  }

}
