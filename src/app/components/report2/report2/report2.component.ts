import { Component, OnInit } from '@angular/core';
import { DrouteserviceService } from 'src/app/services/droute_service/drouteservice.service';
import { OwnerserviceService } from 'src/app/services/owner_service/ownerservice.service';

@Component({
  selector: 'app-report2',
  templateUrl: './report2.component.html',
  styleUrls: ['./report2.component.css']
})
export class Report2Component implements OnInit {
  daladala_id:any
  route_id:any
  start:any
  expire:any
  constructor(private drouteservice:DrouteserviceService) { }

  ngOnInit(): void {
    this.daladala_id=this.drouteservice.daladala_id
    this.route_id = this.drouteservice.route_id
    this.start = this.drouteservice.start
    this.expire = this.drouteservice.expire
    this.drouteservice.onDataReady();
    
  }

}
