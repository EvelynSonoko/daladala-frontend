import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManuComponent } from './componets/manu/manu/manu.component';
import { DriverComponent } from './components/driver/driver/driver.component';
import { FirstpageComponent } from './components/firstpage/firstpage/firstpage.component';
import { RouteComponent } from './components/route/route/route.component';
import { DaladalaComponent } from './components/daladala/daladala/daladala.component';
import { OwnerComponent } from './components/owner/owner/owner.component';
import { HomeComponent } from './components/home/home/home.component';
import { DaladalarouteComponent } from './components/daladalaroute/daladalaroute/daladalaroute.component';
import {MatButtonModule} from '@angular/material/button';
import { OwnerlistComponent } from './components/ownerlist/ownerlist/ownerlist.component'
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { DriverlistComponent } from './components/driverlist/driverlist/driverlist.component';
import { DaladalalistComponent } from './components/daladalalist/daladalalist/daladalalist.component';
import { RoutelistComponent } from './components/routelist/routelist/routelist.component';
import { DroutelistComponent } from './components/droutelist/droutelist/droutelist.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouteupdateComponent } from './components/routeupdate/routeupdate/routeupdate.component';
import { MatIconModule} from '@angular/material/icon';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { UpdatedriverComponent } from './components/updatedriver/updatedriver/updatedriver.component';
import { UpdateownerComponent } from './components/updateowner/updateowner/updateowner.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { AdministratorComponent } from './components/adminstrator/administrator/administrator.component';
import { NavComponent } from './components/nav/nav/nav.component';
import { AdminroutelistComponent } from './components/adminroutelist/adminroutelist/adminroutelist.component';
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdatedaladalaComponent } from './components/updatedaladala/updatedaladala/updatedaladala.component';
import { UpdaterequestComponent } from './components/updaterequest/updaterequest/updaterequest.component';
import { Login2Component } from './components/login2/login2/login2.component';
import { ChangeComponent } from './components/change/change/change.component';
import { RegComponent } from './components/reg/reg/reg.component';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { AccountComponent } from './components/account/account/account.component';
import { MatSelectModule } from '@angular/material/select';




@NgModule({
  declarations: [
    AppComponent,
    ManuComponent,
    DriverComponent,
    FirstpageComponent,
    RouteComponent,
    DaladalaComponent,
    OwnerComponent,
    HomeComponent,
    DaladalarouteComponent,
    OwnerlistComponent,
    DriverlistComponent,
    DaladalalistComponent,
    RoutelistComponent,
    DroutelistComponent,
    RouteupdateComponent,
    UpdatedriverComponent,
    UpdateownerComponent,
    AdministratorComponent,
    NavComponent,
    AdminroutelistComponent,
    UpdatedaladalaComponent,
    UpdaterequestComponent,
    Login2Component,
    ChangeComponent,
    RegComponent,
    ProfileComponent,
    AccountComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    CommonModule,
    MatFormFieldModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule,
  
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
