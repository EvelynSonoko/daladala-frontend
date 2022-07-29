import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverComponent } from './components/driver/driver/driver.component';
import { FirstpageComponent } from './components/firstpage/firstpage/firstpage.component';
import { RouteComponent } from './components/route/route/route.component';
import { OwnerComponent } from './components/owner/owner/owner.component';
import { DaladalaComponent } from './components/daladala/daladala/daladala.component';
import { DaladalarouteComponent } from './components/daladalaroute/daladalaroute/daladalaroute.component';
import { OwnerlistComponent } from './components/ownerlist/ownerlist/ownerlist.component';
import { DriverlistComponent } from './components/driverlist/driverlist/driverlist.component';
import { DaladalalistComponent } from './components/daladalalist/daladalalist/daladalalist.component';
import { RoutelistComponent } from './components/routelist/routelist/routelist.component';
import { DroutelistComponent } from './components/droutelist/droutelist/droutelist.component';
import { RouteupdateComponent } from './components/routeupdate/routeupdate/routeupdate.component';
import { HomeComponent } from './components/home/home/home.component';
import { UpdatedriverComponent } from './components/updatedriver/updatedriver/updatedriver.component';
import { UpdateownerComponent } from './components/updateowner/updateowner/updateowner.component';
import { AdministratorComponent } from './components/adminstrator/administrator/administrator.component';
import { NavComponent } from './components/nav/nav/nav.component';
import{AdminroutelistComponent} from './components/adminroutelist/adminroutelist/adminroutelist.component';
import { UpdaterequestComponent } from './components/updaterequest/updaterequest/updaterequest.component';
import { Login2Component } from './components/login2/login2/login2.component';
import { ChangeComponent } from './components/change/change/change.component';
import { UpdatedaladalaComponent } from './components/updatedaladala/updatedaladala/updatedaladala.component';
import { RegComponent } from './components/reg/reg/reg.component';
import { Report2Component } from './components/report2/report2/report2.component';
import { AccountComponent } from './components/account/account/account.component';
import { GuardGuard } from './components/guard/guard.guard';



const routes: Routes = [
  {path:'login',component:Login2Component},
  {path:'change',component:ChangeComponent},
  {path:'reg',component:RegComponent},
  //{ path:'login', component:LoginComponent},
  //{path:'owner',component:OwnerComponent},
  {path:'administrator',component:AdministratorComponent,
  canActivate:[GuardGuard],
    children:[
      {path:'nav',component:NavComponent},
      {path:'adminroutelist',component:AdminroutelistComponent},
      {path:'requestlist',component:DroutelistComponent},
      {path:'route',component:RouteComponent},
      {path:'ownerlist',component:OwnerlistComponent},
      {path:'daladalalist',component:DaladalalistComponent},
      {path:'driverlist',component:DriverlistComponent},
      {path:'updateroute/:id',component: RouteupdateComponent},
      {path:'updatedriver/:id',component:UpdatedriverComponent},
      {path:'updateowner/:id',component:UpdateownerComponent},
      {path:'updatedaladala/:id',component:UpdatedaladalaComponent},
      


    ]
  },
  {path:'firstpage' , component: FirstpageComponent,
  canActivate:[GuardGuard],
    children:[
      {path:'home',component:HomeComponent},
      {path:'driver' ,component:DriverComponent},
      {path:'routelist',component:RoutelistComponent},
      {path:'daladala',component:DaladalaComponent},
      {path:'daladalaroute',component:DaladalarouteComponent},
      {path:'droutelist',component:DroutelistComponent},
      {path:'profile',component:AccountComponent}
   ]
  },
  {path:'report2',component:Report2Component},
  
  {path:'**',redirectTo:'login'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
