import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EmployeeSearchComponent } from './components/employee-search/employee-search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, EmployeeSearchComponent]
})
export class AppComponent {
  title = 'thalesFE';
}
