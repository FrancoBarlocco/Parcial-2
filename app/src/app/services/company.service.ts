import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Company } from '../interfaces/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  apiUrl = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  getAllCompany() {
    return this.http.get<Company[]>(this.apiUrl + "Company")
  }

  getCompany(id: number) {
    return this.http.get<Company>(this.apiUrl + "Company/" + id)
  }

  postCompany(data: Company) {
    return this.http.post<Company>(this.apiUrl + "Company", data)
  }
}
