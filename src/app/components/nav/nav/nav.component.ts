import { Component, OnInit } from '@angular/core';
import { DaladalaserviceService } from 'src/app/services/daladala_service/daladalaservice.service';
import { DrouteserviceService } from 'src/app/services/droute_service/drouteservice.service';
import { OwnerserviceService } from 'src/app/services/owner_service/ownerservice.service';
import { RouteserviceService } from 'src/app/services/routes_service/routeservice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  dala:any
  roti:any
  mmiliki:any
  ombi:any

  constructor(private daladalaservice:DaladalaserviceService,private routeservice:RouteserviceService,
    private ownerservice:OwnerserviceService,private daladalaroute:DrouteserviceService) { }

  ngOnInit(): void {
    this.getdaladala()
    this.getroute()
    this.getmmiliki()
    this.getdroute()
  }

  getdaladala(){
    this.daladalaservice.getall().subscribe((eva:any)=>{
      this.dala=eva.length
      console.log("daladala  =>",eva.length)
    })
  }
  getroute(){
    this.routeservice.getall().subscribe((eva:any)=>{
      this.roti=eva.length
    })
  }
 getmmiliki(){
  this.ownerservice.getall().subscribe((eva:any)=>{
    this.mmiliki=eva.length
  })
 }
 getdroute(){
  this.daladalaroute.getall().subscribe((eva:any)=>{
    this.ombi=eva.length
  })
 }

}
