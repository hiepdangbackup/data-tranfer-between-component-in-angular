import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EmployeeComponent } from './employee/employee.component';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';
import { EmplistingComponent } from './emplisting/emplisting.component';
import { EmpaddComponent } from './empadd/empadd.component';

const routes: Routes = [
  { component: HomeComponent, path: '' },
  {
    component: AboutComponent,
    path: 'About',
    children: [{ component: AboutcompanyComponent, path: 'company' }],
  },
  {
    component: EmployeeComponent,
    path: 'Employee',
    children: [
      { component: EmplistingComponent, path: '' },
      { component: EmpaddComponent, path: 'Edit/:id' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
