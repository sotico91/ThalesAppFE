import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService, Employee } from '../../services/employee.service';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class EmployeeSearchComponent implements OnInit {
  employeeId: string = '';
  employees: Employee[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  searchEmployee(): void {
    this.loading = true;
    this.error = null;

    if (!this.employeeId.trim()) {
      this.getAllEmployees();
      return;
    }

    const id = parseInt(this.employeeId, 10);
    if (isNaN(id)) {
      this.error = 'Please enter a valid employee ID';
      this.loading = false;
      return;
    }

    this.employeeService.getEmployeeById(id).subscribe({
      next: (employee) => {
        // Calculate annual salary
        this.employees = [this.calculateAnnualSalary(employee)];
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Employee not found or an error occurred';
        this.employees = [];
        this.loading = false;
      }
    });
  }

  private getAllEmployees(): void {
    this.loading = true;
    this.employeeService.getEmployees().subscribe({
      next: (employees) => {
        // Calculate annual salary for each employee
        this.employees = employees.map(emp => this.calculateAnnualSalary(emp));
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load employees';
        this.loading = false;
      }
    });
  }

  private calculateAnnualSalary(employee: Employee): Employee {
    return {
      ...employee,
      employee_anual_salary: employee.salary * 12
    };
  }
}