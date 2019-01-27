import { Person } from 'src/entities/person';
import { Injectable } from '../../node_modules/@angular/core';
import { Observable } from '../../node_modules/rxjs';
import * as Constants from '../app.constants';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpHeaders
} from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';
import { PagedResponse } from '../entities/PagedResponse';

@Injectable()
export class PersonService {
  url = Constants.PeopleController;
  constructor(private _http: HttpClient) {}

  getAllPerson(page: number): Observable<PagedResponse> {
    return this._http
      .get<PagedResponse>(this.url + '/' + page + '/10')
      .pipe(tap(data => console.log('yyy'), Error => this.handleError(Error)));
  }

  getPersonDetailsById(_id: string): Observable<Person> {
    return this._http
      .get<Person>(this.url + '/' + _id)
      .pipe(
        tap(
          data => console.log('person:' + JSON.stringify(data)),
          Error => this.handleError(Error)
        )
      );
  }

  updateSelectedPerson(person: Person): Observable<Person> {
    alert('Welcome');
    return this._http
      .put<Person>(this.url + '/' + person._id, person)
      .pipe(tap(data => alert('Succesful'), Error => this.handleError(Error)));
  }

  CreatePerson(person: Person): Observable<Person> {
    return this._http
      .post<Person>(this.url, person)
      .pipe(tap(data => alert('Succesful'), Error => this.handleError(Error)));
  }

  deletePerson(id: string) {
    return this._http
      .delete(this.url + '/' + id)
      .pipe(tap(data => alert('Succesful'), Error => this.handleError(Error)));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${
        err.message
      }`;
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }
}
