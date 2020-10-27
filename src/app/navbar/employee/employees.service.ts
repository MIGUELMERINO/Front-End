import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/services/crud/crud.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private crud: CrudService) { }

  createEmployee(employee: any) {
    return this.crud.post(`employees/miguel`, employee);
  }

  listEmployees() {
    return this.crud.get(`employees/miguel`);
  }

}
