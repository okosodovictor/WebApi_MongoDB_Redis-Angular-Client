import { Person } from './../../../entities/person';
import { OnInit, Component } from '@angular/core';
import { PersonService } from 'src/services/personservice';
import { Observable } from '../../../../node_modules/rxjs';
import { PagedResponse } from '../../../entities/PagedResponse';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './person-list.component.html'
})
export class PersonListComponent implements OnInit {
  pageTitle = 'Person List';
  private pageResponse: PagedResponse;
  private page = 1;
  result: boolean;
  constructor(private _service: PersonService, private router: Router) {}

  ngOnInit(): void {
    this.getPeople(this.page);
  }

  pageChanged(event: any) {
    console.log(event);
  }
  private getPeople(page: number) {
    this._service.getAllPerson(page).subscribe(data => {
      this.pageResponse = data;
      console.log(JSON.stringify(this.pageResponse));
    });
  }

  deletePerson(id: string) {
    this._service.deletePerson(id).subscribe(data => {
      this.result = data as boolean;
      alert(this.result);
      console.log(JSON.stringify(this.result));
    });
  }

  addPerson() {
    this.router.navigate(['/people/add']);
  }
}
