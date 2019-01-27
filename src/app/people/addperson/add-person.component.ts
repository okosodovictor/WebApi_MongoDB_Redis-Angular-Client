import { OnInit, Component } from '@angular/core';
import { Person } from '../../../entities/person';
import { PersonService } from '../../../services/personservice';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  templateUrl: './add-person.component.html'
})
export class AddPersonComponent implements OnInit {
  person: Person;
  pageTitle: string;
  constructor(private _service: PersonService, private _route: Router) {}
  ngOnInit(): void {
    this.person = new Person();
    this.pageTitle = 'Add new Person';
  }

  onSubmit(form: NgForm) {
    return this._service.CreatePerson(this.person).subscribe(data => {
      this.person = data;
      console.log(JSON.stringify(this.person));
      this._route.navigate(['/people']);
    });
  }
}
