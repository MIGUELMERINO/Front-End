import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './navbar/carousel/carousel.component';
import { EmployeeComponent } from './navbar/employee/employee.component';
import { GroupsComponent } from './navbar/groups/groups.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CanActivateGuard } from './services/guard/can-activate.guard';

const routes: Routes = [{
  path: '', component: NavbarComponent, children: [
    { path: '', component: CarouselComponent, canActivate: [CanActivateGuard]},
    { path: 'employees', component: EmployeeComponent, canActivate: [CanActivateGuard] },
    { path: 'groups', component: GroupsComponent, canActivate: [CanActivateGuard]}
  ]
},
{ path: '**',  component: NavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
