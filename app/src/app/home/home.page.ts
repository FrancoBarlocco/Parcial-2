import { Component } from '@angular/core';
import { PersonService } from "../services/person.service";
import { Person } from "../interfaces/person";
import { CompanyService } from '../services/company.service';
import { Company } from '../interfaces/company';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  persons: Person[] = [];
  companies: Company[] = [];
  constructor(private personService: PersonService,private companyService : CompanyService) {
    this.personService.getAllPersons().subscribe({
      next: (res) => {
        this.persons = res;
      }
    })
    this.companyService.getAllCompany().subscribe({
      next: (res) => {
        this.companies = res;
      }
    })
  }

  filterPersons(name : String, surname : String) {
    return this.persons.filter(person => {
      const personName = person.name.toLowerCase();
      const personSurname = person.surname.toLowerCase();
      return (
        (!name || personName.includes(name.toLowerCase())) &&
        (!surname || personSurname.includes(surname.toLowerCase()))
      );
    });
  }

  
  
  /*postProduct() {
    const product: Product = { id: 44, name: "Producto 4", price: 1880, stock: 100, images: ['https://picsum.photos/200', 'https://picsum.photos/201', 'https://picsum.photos/202'] };
    this.productsService.postProduct(product).subscribe({
      next: (res) => {
        this.products = this.products;
      }
    }
    )
  }*/
}
