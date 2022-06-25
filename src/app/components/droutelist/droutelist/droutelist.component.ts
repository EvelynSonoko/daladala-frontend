import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DrouteserviceService } from 'src/app/services/droute_service/drouteservice.service';
import { UpdaterequestComponent } from '../../updaterequest/updaterequest/updaterequest.component';


@Component({
  selector: 'app-droutelist',
  templateUrl: './droutelist.component.html',
  styleUrls: ['./droutelist.component.css']
})
export class DroutelistComponent implements OnInit {
  data:any[]
  loading:Boolean
  constructor(private router:Router,private drouteservice:DrouteserviceService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getall()
    
  }
  getall(){
    this.loading=true
    this.drouteservice.getall().subscribe((res:any)=>{
      this.data=res
      this.loading=false
    })
  }
  updatedroute(droute:any){
    this.drouteservice.request_id = droute.id
    const dialogRef = this.dialog.open(UpdaterequestComponent)
    
  
  }
  delete(id:number){
    this.drouteservice.delete(id).subscribe(res =>{
      this.getall()
    })

  }
  change(droute:any){
     droute['start'] = new Date().toLocaleDateString('en-CA')
    droute['status'] = true
    this.drouteservice.updateddroute(droute).subscribe(res =>{
      console.log(res)
    })
   
  }

 



}
