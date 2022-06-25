import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { DrouteserviceService } from 'src/app/services/droute_service/drouteservice.service';
import { OwnerserviceService } from 'src/app/services/owner_service/ownerservice.service';
import { RouteserviceService } from 'src/app/services/routes_service/routeservice.service';
import { HomeComponent } from '../../home/home/home.component';

@Component({
  selector: 'app-routelist',
  templateUrl: './routelist.component.html',
  styleUrls: ['./routelist.component.css']
})
export class RoutelistComponent implements OnInit {
  @ViewChild('receipt') receipt:TemplateRef<any>
  data:any
  loading:Boolean
  recept:any
  route_id:any
  daladala_id:any
  routeform:FormGroup
  daladalalist:any[]
  email:any
  constructor(private router:Router,
    private routeservice:RouteserviceService,
    private dialog:MatDialog,private ownerservice:OwnerserviceService,private droute:DrouteserviceService) { }

  ngOnInit(): void {
    var user = JSON.parse(sessionStorage.getItem("user")!)
    this.email = user.email
    this.getByOwnerId()
    this.getall()
    this.formConfiguration()
    
  }
  getByOwnerId(){
    this.ownerservice.getByEmail(this.email).subscribe((result:any)=>{
      this.daladalalist=result.daladalaList
      this.daladalalist.forEach(element => {
        this.daladala_id = element.daladala_id
      });
      console.log(this.daladala_id)
    })
  }

  getall(){
    this.loading=true
    this.routeservice.getall().subscribe((res:any) =>{
      this.data=res
      this.loading=false
    })
  }

  
  requestroute(id:any){
    console.log("working")
    this.route_id =id
    const dialogConfig={
      width:'30'
    }
   this.dialog.open(this.receipt,dialogConfig)
  }
  formConfiguration(){
    this.routeform=new FormGroup({
      receipt_no:new FormControl('',[Validators.required])
    })
  }
  save(){
    const values=this.routeform.value
    values['route_id'] = this.route_id
    values['daladala_id']=this.daladala_id
    values['status']=false
    console.log(values)
    this.droute.adddroute(values).subscribe(result =>{
      this.router.navigateByUrl("firstpage/home")
      this.routeform.reset()
    })
    
  }
}
