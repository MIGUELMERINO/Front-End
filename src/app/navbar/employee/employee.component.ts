import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { EmployeesService } from './employees.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnDestroy {

  employees: any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();

  employeeFrom: FormGroup;

  constructor(private employeService: EmployeesService, private form: FormBuilder) {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.employeeFrom = this.form.group({
      name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      birthday: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.listEmployees();
  }

  listEmployees() {
    this.employeService.listEmployees().subscribe(res => {
      this.employees = res.data.employees;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  createEmployeeView(employee) {
    const remplace = employee.birthday.replace('-', '/').replace('-', '/');
    this.employeeFrom.get('birthday').setValue(remplace);
    this.employeService.createEmployee(this.employeeFrom.value).subscribe( result => {
      this.dtTrigger.unsubscribe();
      if (result.success === true) {
        this.employeeFrom.reset();
        alert('Datos agregados correctamente');
        this.listEmployees();
      }
    });
  }

}


