import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrouteserviceService } from 'src/app/services/droute_service/drouteservice.service';
import { OwnerserviceService } from 'src/app/services/owner_service/ownerservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any[]
  email:any
  daladalarouterquest:any[]
  users:any
  constructor(private drouteservice:DrouteserviceService,private ownerservice:OwnerserviceService,private router:Router) { }
  visible=false
  ngOnInit(): void {
    var user = JSON.parse(sessionStorage.getItem("user")!)
    this.email = user.email
    this.ownerservice.getByEmail(this.email).subscribe((res:any)=>{
      this.users=res
    })
  this.getById()
  }
  
  getall(){
    this.drouteservice.getall().subscribe((res:any)=>{
      this.data=res
     
    })
  }
  getById(){
    this.ownerservice.getByEmail(this.email).subscribe((res:any)=>{
      this.data = res.daladalaList
      this.data.forEach(element => {
        this.daladalarouterquest = element.daladalarouteList
        console.log(this.daladalarouterquest)
      });
      
      if(this.daladalarouterquest.length>0){
        this.visible = true
      }else{
        this.visible = false
      }
     
    })
    console.log("run")
  }
report(){
  this.router.navigateByUrl("/report2")
}
send(daladalaroute:any){
  this.drouteservice.daladala_id = daladalaroute.daladala_id
  this.drouteservice.route_id = daladalaroute.route_id
  this.drouteservice.start = daladalaroute.start
  this.drouteservice.expire = daladalaroute.expire
}
}
