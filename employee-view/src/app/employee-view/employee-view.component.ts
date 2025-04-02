import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-view', // Must exactly match <app-employee-view>
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent {
  employeeId: string = '';
  employees: any[] = [];

  constructor(private http: HttpClient) {}

  handleSearch() {
    if (this.employeeId) {
      // Fetch specific employee data
      this.http.get(`http://localhost:8080/api/employees/${this.employeeId}`)
        .subscribe((data: any) => {
          this.employees = [data];
        });
    } else {
      // Fetch all employees
      this.http.get('http://localhost:8080/api/employees')
        .subscribe((data: any) => { // Adjusted type to 'any'
          this.employees = data;
        });
    }
  }
}