import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Person } from '../interfaces/person';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonService {

  apiUrl = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  getAllPersons() {
    return this.http.get<Person[]>(this.apiUrl + "Persons")
  }

  getPerson(id: number) {
    return this.http.get<Person>(this.apiUrl + "Persons/" + id)
  }

  postPerson(data: Person) {
    return this.http.post<Person>(this.apiUrl + "persons", data)
  }

  deletePerson(id: number){
    return this.http.delete(this.apiUrl + "Persons/" + id);
  }

}
