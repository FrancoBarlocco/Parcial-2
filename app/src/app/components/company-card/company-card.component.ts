import { Component, Input, OnInit } from '@angular/core';
import { Company } from 'src/app/interfaces/company';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss'],
})
export class CompanyComponentCard {

  @Input() company!: Company;
  constructor() { }


}
