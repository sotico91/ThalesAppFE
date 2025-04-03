import { Routes } from '@angular/router';
import { EmployeeSearchComponent } from './components/employee-search/employee-search.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeSearchComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];
