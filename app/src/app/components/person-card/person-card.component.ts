import { Component, Input, OnInit } from '@angular/core';
import { Person } from "../../interfaces/person";

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss'],
})
export class PersonComponentCard {

  @Input() person!: Person;

  constructor() { }

}