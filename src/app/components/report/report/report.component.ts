import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverserviceService } from 'src/app/services/driver_service/driverservice.service';
import { OwnerserviceService } from 'src/app/services/owner_service/ownerservice.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  ownerdetails:any
  driverdetails:any
  daladetails:any
  
  constructor(private ownerservices:OwnerserviceService) { }

  ngOnInit(): void {
    var user=JSON.parse(sessionStorage.getItem("user")!)
    this.ownerservices.getByEmail(user.email).subscribe((res:any)=>{
      this.ownerdetails=res
      res.driverList.forEach((element:any)=>{
        this.driverdetails=element
      });
      res.daladalaList.forEach((element:any)=>{
        this.daladetails=element

      })
    })
    
  }
  
}
