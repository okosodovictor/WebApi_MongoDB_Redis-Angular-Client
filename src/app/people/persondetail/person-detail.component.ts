import { Component, OnInit } from '@angular/core';
import { Person } from '../../../entities/person';
import {
  Params,
  Router,
  ActivatedRoute
} from '../../../../node_modules/@angular/router';
import { PersonService } from '../../../services/personservice';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  person: Person;
  pageTitle: string;
  personId: string;
  isEditMode: boolean;
  isUpdated: boolean;
  constructor(
    private _route: Router,
    private _activatedRoute: ActivatedRoute,
    private _service: PersonService
  ) {
    this.isEditMode = false;
    this.person = new Person();
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params: Params) => {
      this.personId = params['id'];
      this.initializePerson(this.personId);
    });
  }

  initializePerson(id: string): any {
    if (id && id != null) {
      this.pageTitle = 'person Detail';
      this._service.getPersonDetailsById(this.personId).subscribe(data => {
        this.person = data;
        console.log(JSON.stringify(this.person.friends));
      });
    }
  }

  enableEditMode() {
    this.isEditMode = true;
    this.pageTitle = 'Edit Person';
  }

  onBack() {
    this._route.navigate(['/people']);
  }

  refresh(_id: string) {
    this.isEditMode = false;
    this.initializePerson(_id);
  }

  enableEdit() {
    this.isEditMode = true;
    this.pageTitle = 'Edit person';
  }

  onSubmit(form: NgForm): void {
    this._service.updateSelectedPerson(this.person).subscribe(data => {
      this.person = data;
      alert('Successful');
      this._route.navigate(['/people']);
    });
  }
}
