import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PersonService } from "../../services/person.service";
import { Person } from "../../interfaces/person";
import { CompanyService } from 'src/app/services/company.service';
import { Company } from 'src/app/interfaces/company';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  person?: Person;
  company?: Company;

  constructor(private route: ActivatedRoute, private personService: PersonService, private companyService: CompanyService) {
    this.route.params.subscribe({
      next: (params) => {
        this.personService.getPerson(params['id']).subscribe({
          next: (res) => {
            this.person = res;
          }
        })
      }
    })
    /*this.route.params.subscribe({
      next: (params) => {
        this.companyService.getCompany(params['id']).subscribe({
          next: (res) => {
            this.company = res;
          }
        })
      }
    })*/

  }

  deletePerson(id: number): void {
    this.personService.deletePerson(id).subscribe({
      next: (res) => {
        console.log(res);
      }
    }
    );
  }
  ngOnInit() {

  }

}
