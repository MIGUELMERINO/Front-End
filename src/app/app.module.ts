import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { APIs } from './services/const/api';
import { CrudService } from './services/crud/crud.service';
import { EmployeeComponent } from './navbar/employee/employee.component';
import { GroupsComponent } from './navbar/groups/groups.component';
import { CarouselComponent } from './navbar/carousel/carousel.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchemployeePipe } from './services/pipe/searchemployee.pipe';
import { DataTablesModule } from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeeComponent,
    GroupsComponent,
    CarouselComponent,
    SearchemployeePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule,
    DataTablesModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [CrudService, APIs],
  bootstrap: [AppComponent]
})
export class AppModule { }
